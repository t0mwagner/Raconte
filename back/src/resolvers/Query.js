const { APP_SECRET, getUserId } = require('../utils')

const info = async () => `This is the API of Raconte`
const feedTags = async (root, args, context) => {
  const userId = getUserId(context)
  return context.prisma.tags()
}
const feedStories = async (root, args, context) => {
  return context.prisma.stories({where:args.where})
}
const feedChaptersByStory = async (root, args, context) => {
  return context.prisma.chapters({where:{story:args.story}})
}
const feedStoriesByAuthor = async (root, args, context) => {
  return context.prisma.stories({where :{author: args.author}})
}
const story = async (root, args, context) => {
  return context.prisma.story({id: args.id})
}
const chapter = async (root, args, context) => {
  return context.prisma.chapter({id: args.id})
}

module.exports = {
    info,
    feedStories,
    feedTags,
    feedChaptersByStory,
    feedStoriesByAuthor,
    story,
    chapter
}