const story = (root, args, context) => (
    context.prisma.chapter({id: root.id}).story()
)
const likedBy = (root, args, context) => (
    context.prisma.chapter({id: root.id}).likedBy()
)
const author = (root, args, context) => (
    context.prisma.chapter({id: root.id}).author()
)

module.exports = {
    story,
    likedBy,
    author
}