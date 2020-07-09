const stories = (root, args, context) => (
    context.prisma.user({id: root.id}).stories()
)

const chapters = (root, args, context) => (
    context.prisma.user({id: root.id}).chapters()
)

const likesStory = (root, args, context) => (
    context.prisma.user({id: root.id}).likesStory()
)

const likesChapter = (root, args, context) => (
    context.prisma.user({id: root.id}).likesChapter()
)

module.exports = {
    stories,
    chapters,
    likesStory,
    likesChapter
}