const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/types/User')
const Story = require('./resolvers/types/Story')
const Chapter = require('./resolvers/types/Chapter')
const Tag = require('./resolvers/types/Tag')

const resolvers = {
    Query,
    Mutation,
    User,
    Story,
    Chapter,
    Tag
}

//const checkUser = async () => await prisma.$exists.user({id: 'ckc1p9t036zsh097386p2soh0'})
//checkUser().then(result=>{console.log(result)})

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request, // queries or mutations are attached to the context so they can be read for authentication purposes
      prisma
    }
  }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))