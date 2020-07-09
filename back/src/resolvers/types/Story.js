const tags = (root, args, context) => (
    context.prisma.story({id: root.id}).tags()
)
const chapters = (root, args, context) => (
    context.prisma.story({id: root.id}).chapters()
)
const likedBy = (root, args, context) => (
    context.prisma.story({id: root.id}).likedBy()
)
const author = (root, args, context) => (
    context.prisma.story({id: root.id}).author()
)

module.exports = {
    tags,
    chapters,
    likedBy,
    author
}