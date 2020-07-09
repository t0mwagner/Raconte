const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

// Specific class to extend array with async function on filter
class AsyncArray  {
    constructor(arr) {
        this.data = arr
    }
    filterAsync(predicate) {
      const data = Array.from(this.data)
      return Promise.all(data.map((element, index) => predicate(element, index, data)))
        .then(result => {
          return data.filter((element, index) => {
            return result[index]
          });
        });
    }
}
// Existence test to switch between create or connect command
const connectOrCreateAndRemove = async (arr, predicate, attribute) => {
    if (arr){
        if (arr.add){
            return await new AsyncArray(arr.add).filterAsync(async (item) => await predicate(item))
            .then(result => {
                const itemOperation = {
                    connect: result,
                    create: arr.add.filter((item=>!(result.find((connectItem)=>(connectItem[attribute] === item[attribute])))))
                }
                if (arr.remove) itemOperation.disconnect = arr.remove
                return itemOperation
            })
        }
    }
}

// STORY
const postStory = async(root, args, context) => {
    const userId = getUserId(context)
    const tagCreateOrConnectAndRemove = await connectOrCreateAndRemove(args.tags, context.prisma.$exists.tag, 'name')
    return context.prisma.createStory({
        title: args.title,
        synopsis: args.synopsis, 
        public: args.public,
        publicationDate: args.publicationDate,
        tags: (args.tags)&&(args.tags.add)
                    ?tagCreateOrConnectAndRemove
                    :args.tags.remove
                &&{disconnect:args.tags.remove},
        chapters: (args.chapters)
                    ?(args.chapters.add)
                        ?{create: args.chapters.add}
                        :{}
                    :{},
        author:{connect:{id:userId}}
    })
}
const updateStory = async(root, args, context) => {
    const userId = getUserId(context)
    const tagCreateOrConnectAndRemove = await connectOrCreateAndRemove(args.tags, context.prisma.$exists.tag, 'name')
    return context.prisma.updateStory({
        data: {
            title: args.title,
            synopsis: args.synopsis,
            public: args.public,
            publicationDate: args.publicationDate,
            dueDate: args.dueDate,
            tags: (args.tags)&&(args.tags.add)
                        ?tagCreateOrConnectAndRemove
                        :args.tags.remove
                    &&{disconnect:args.tags.remove},
            chapters: (args.chapters)
                        ?(args.chapters.add)
                            ?(args.chapters.remove)
                                ?{create: args.chapters.add, delete:args.chapters.remove}
                                :{create: args.chapters.add}
                            :(args.chapters.remove)
                                ?{delete: args.chapters.remove}
                                :{}
                        :{},
            likedBy: (args.likedBy)
                        ?(args.likedBy.add)
                            ?(args.likedBy.remove)
                                ?{connect: args.likedBy.add, disconnect:args.likedBy.remove}
                                :{connect: args.likedBy.add}
                            :(args.likedBy.remove)
                                ?{disconnect: args.likedBy.remove}
                                :{}
                        :{},
        },
        where: {
            id: args.id
        }
    })
}
const deleteStory = async(root, args, context) => {
    const userId = getUserId(context)
    return context.prisma.deleteStory(
        {
            id: args.id
        }
    )
}
// CHAPTER
const postChapter = async(root, args, context) => {
    const userId = getUserId(context)
    return context.prisma.createChapter({
        title: args.title,
        number: args.number, 
        publicationDate: args.publicationDate,
        content: args.content,
        story: {connect:{id:args.story.id}},
        author:{connect:{id:userId}}
    })
}
const updateChapter = async(root, args, context) => {
    const userId = getUserId(context)
    return context.prisma.updateChapter({
        data : {
            title: args.title,
            number: args.number,
            publicationDate: args.publicationDate,
            content: args.content,
            likedBy: (args.likedBy)
                        ?(args.likedBy.add)
                            ?(args.likedBy.remove)
                                ?{connect: args.likedBy.add, disconnect:args.likedBy.remove}
                                :{connect: args.likedBy.add}
                            :(args.likedBy.remove)
                                ?{disconnect: args.likedBy.remove}
                                :{}
                        :{},
        },
        where : {
            id: args.id
        }
    })
}
const deleteChapter = async(root, args, context) => {
    const userId = getUserId(context)
    return context.prisma.deleteChapter(
        {
            id: args.id
        }
    )
}
// LOGIN / SIGNUP
const signup = async(root, args, context) => {
    const hashedPassword = await bcrypt.hash(args.password, 10)
    const {password, ...user} = await context.prisma.createUser({...args, password: hashedPassword})
    const token = jwt.sign({userId: user.id}, APP_SECRET)
    return{
        token,
        user
    }
}
const login = async(root, args, context) => {
    const {password, ...user} = await context.prisma.user({email:args.email})
    if (!user){
        throw new Error('No user found')
    }
    const valid = await bcrypt.compare(args.password, password)
    if (!valid){
        throw new Error('Invalid password')
    }
    const token = jwt.sign({userId: user.id}, APP_SECRET)
    return {
        token,
        user
    }
}

module.exports = {
    postStory,
    updateStory,
    deleteStory,
    postChapter,
    updateChapter,
    deleteChapter,
    signup,
    login
}