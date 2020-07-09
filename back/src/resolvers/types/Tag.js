const stories = (root, args, context) => (
    context.prisma.tag({id: root.id}).stories()
)

module.exports = {
    stories
}