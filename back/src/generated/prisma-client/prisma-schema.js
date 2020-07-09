module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateChapter {
  count: Int!
}

type AggregateStory {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Chapter {
  id: ID!
  title: String
  number: Int!
  publicationDate: DateTime!
  content: String!
  author: User
  story: Story!
  likedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type ChapterConnection {
  pageInfo: PageInfo!
  edges: [ChapterEdge]!
  aggregate: AggregateChapter!
}

input ChapterCreateInput {
  id: ID
  title: String
  number: Int!
  publicationDate: DateTime!
  content: String!
  author: UserCreateOneWithoutChaptersInput
  story: StoryCreateOneWithoutChaptersInput!
  likedBy: UserCreateManyWithoutLikesChapterInput
}

input ChapterCreateManyWithoutAuthorInput {
  create: [ChapterCreateWithoutAuthorInput!]
  connect: [ChapterWhereUniqueInput!]
}

input ChapterCreateManyWithoutLikedByInput {
  create: [ChapterCreateWithoutLikedByInput!]
  connect: [ChapterWhereUniqueInput!]
}

input ChapterCreateManyWithoutStoryInput {
  create: [ChapterCreateWithoutStoryInput!]
  connect: [ChapterWhereUniqueInput!]
}

input ChapterCreateWithoutAuthorInput {
  id: ID
  title: String
  number: Int!
  publicationDate: DateTime!
  content: String!
  story: StoryCreateOneWithoutChaptersInput!
  likedBy: UserCreateManyWithoutLikesChapterInput
}

input ChapterCreateWithoutLikedByInput {
  id: ID
  title: String
  number: Int!
  publicationDate: DateTime!
  content: String!
  author: UserCreateOneWithoutChaptersInput
  story: StoryCreateOneWithoutChaptersInput!
}

input ChapterCreateWithoutStoryInput {
  id: ID
  title: String
  number: Int!
  publicationDate: DateTime!
  content: String!
  author: UserCreateOneWithoutChaptersInput
  likedBy: UserCreateManyWithoutLikesChapterInput
}

type ChapterEdge {
  node: Chapter!
  cursor: String!
}

enum ChapterOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  number_ASC
  number_DESC
  publicationDate_ASC
  publicationDate_DESC
  content_ASC
  content_DESC
}

type ChapterPreviousValues {
  id: ID!
  title: String
  number: Int!
  publicationDate: DateTime!
  content: String!
}

input ChapterScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  publicationDate: DateTime
  publicationDate_not: DateTime
  publicationDate_in: [DateTime!]
  publicationDate_not_in: [DateTime!]
  publicationDate_lt: DateTime
  publicationDate_lte: DateTime
  publicationDate_gt: DateTime
  publicationDate_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [ChapterScalarWhereInput!]
  OR: [ChapterScalarWhereInput!]
  NOT: [ChapterScalarWhereInput!]
}

type ChapterSubscriptionPayload {
  mutation: MutationType!
  node: Chapter
  updatedFields: [String!]
  previousValues: ChapterPreviousValues
}

input ChapterSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChapterWhereInput
  AND: [ChapterSubscriptionWhereInput!]
  OR: [ChapterSubscriptionWhereInput!]
  NOT: [ChapterSubscriptionWhereInput!]
}

input ChapterUpdateInput {
  title: String
  number: Int
  publicationDate: DateTime
  content: String
  author: UserUpdateOneWithoutChaptersInput
  story: StoryUpdateOneRequiredWithoutChaptersInput
  likedBy: UserUpdateManyWithoutLikesChapterInput
}

input ChapterUpdateManyDataInput {
  title: String
  number: Int
  publicationDate: DateTime
  content: String
}

input ChapterUpdateManyMutationInput {
  title: String
  number: Int
  publicationDate: DateTime
  content: String
}

input ChapterUpdateManyWithoutAuthorInput {
  create: [ChapterCreateWithoutAuthorInput!]
  delete: [ChapterWhereUniqueInput!]
  connect: [ChapterWhereUniqueInput!]
  set: [ChapterWhereUniqueInput!]
  disconnect: [ChapterWhereUniqueInput!]
  update: [ChapterUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ChapterUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [ChapterScalarWhereInput!]
  updateMany: [ChapterUpdateManyWithWhereNestedInput!]
}

input ChapterUpdateManyWithoutLikedByInput {
  create: [ChapterCreateWithoutLikedByInput!]
  delete: [ChapterWhereUniqueInput!]
  connect: [ChapterWhereUniqueInput!]
  set: [ChapterWhereUniqueInput!]
  disconnect: [ChapterWhereUniqueInput!]
  update: [ChapterUpdateWithWhereUniqueWithoutLikedByInput!]
  upsert: [ChapterUpsertWithWhereUniqueWithoutLikedByInput!]
  deleteMany: [ChapterScalarWhereInput!]
  updateMany: [ChapterUpdateManyWithWhereNestedInput!]
}

input ChapterUpdateManyWithoutStoryInput {
  create: [ChapterCreateWithoutStoryInput!]
  delete: [ChapterWhereUniqueInput!]
  connect: [ChapterWhereUniqueInput!]
  set: [ChapterWhereUniqueInput!]
  disconnect: [ChapterWhereUniqueInput!]
  update: [ChapterUpdateWithWhereUniqueWithoutStoryInput!]
  upsert: [ChapterUpsertWithWhereUniqueWithoutStoryInput!]
  deleteMany: [ChapterScalarWhereInput!]
  updateMany: [ChapterUpdateManyWithWhereNestedInput!]
}

input ChapterUpdateManyWithWhereNestedInput {
  where: ChapterScalarWhereInput!
  data: ChapterUpdateManyDataInput!
}

input ChapterUpdateWithoutAuthorDataInput {
  title: String
  number: Int
  publicationDate: DateTime
  content: String
  story: StoryUpdateOneRequiredWithoutChaptersInput
  likedBy: UserUpdateManyWithoutLikesChapterInput
}

input ChapterUpdateWithoutLikedByDataInput {
  title: String
  number: Int
  publicationDate: DateTime
  content: String
  author: UserUpdateOneWithoutChaptersInput
  story: StoryUpdateOneRequiredWithoutChaptersInput
}

input ChapterUpdateWithoutStoryDataInput {
  title: String
  number: Int
  publicationDate: DateTime
  content: String
  author: UserUpdateOneWithoutChaptersInput
  likedBy: UserUpdateManyWithoutLikesChapterInput
}

input ChapterUpdateWithWhereUniqueWithoutAuthorInput {
  where: ChapterWhereUniqueInput!
  data: ChapterUpdateWithoutAuthorDataInput!
}

input ChapterUpdateWithWhereUniqueWithoutLikedByInput {
  where: ChapterWhereUniqueInput!
  data: ChapterUpdateWithoutLikedByDataInput!
}

input ChapterUpdateWithWhereUniqueWithoutStoryInput {
  where: ChapterWhereUniqueInput!
  data: ChapterUpdateWithoutStoryDataInput!
}

input ChapterUpsertWithWhereUniqueWithoutAuthorInput {
  where: ChapterWhereUniqueInput!
  update: ChapterUpdateWithoutAuthorDataInput!
  create: ChapterCreateWithoutAuthorInput!
}

input ChapterUpsertWithWhereUniqueWithoutLikedByInput {
  where: ChapterWhereUniqueInput!
  update: ChapterUpdateWithoutLikedByDataInput!
  create: ChapterCreateWithoutLikedByInput!
}

input ChapterUpsertWithWhereUniqueWithoutStoryInput {
  where: ChapterWhereUniqueInput!
  update: ChapterUpdateWithoutStoryDataInput!
  create: ChapterCreateWithoutStoryInput!
}

input ChapterWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  publicationDate: DateTime
  publicationDate_not: DateTime
  publicationDate_in: [DateTime!]
  publicationDate_not_in: [DateTime!]
  publicationDate_lt: DateTime
  publicationDate_lte: DateTime
  publicationDate_gt: DateTime
  publicationDate_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  author: UserWhereInput
  story: StoryWhereInput
  likedBy_every: UserWhereInput
  likedBy_some: UserWhereInput
  likedBy_none: UserWhereInput
  AND: [ChapterWhereInput!]
  OR: [ChapterWhereInput!]
  NOT: [ChapterWhereInput!]
}

input ChapterWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createChapter(data: ChapterCreateInput!): Chapter!
  updateChapter(data: ChapterUpdateInput!, where: ChapterWhereUniqueInput!): Chapter
  updateManyChapters(data: ChapterUpdateManyMutationInput!, where: ChapterWhereInput): BatchPayload!
  upsertChapter(where: ChapterWhereUniqueInput!, create: ChapterCreateInput!, update: ChapterUpdateInput!): Chapter!
  deleteChapter(where: ChapterWhereUniqueInput!): Chapter
  deleteManyChapters(where: ChapterWhereInput): BatchPayload!
  createStory(data: StoryCreateInput!): Story!
  updateStory(data: StoryUpdateInput!, where: StoryWhereUniqueInput!): Story
  updateManyStories(data: StoryUpdateManyMutationInput!, where: StoryWhereInput): BatchPayload!
  upsertStory(where: StoryWhereUniqueInput!, create: StoryCreateInput!, update: StoryUpdateInput!): Story!
  deleteStory(where: StoryWhereUniqueInput!): Story
  deleteManyStories(where: StoryWhereInput): BatchPayload!
  createTag(data: TagCreateInput!): Tag!
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteManyTags(where: TagWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  chapter(where: ChapterWhereUniqueInput!): Chapter
  chapters(where: ChapterWhereInput, orderBy: ChapterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chapter]!
  chaptersConnection(where: ChapterWhereInput, orderBy: ChapterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChapterConnection!
  story(where: StoryWhereUniqueInput!): Story
  stories(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Story]!
  storiesConnection(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StoryConnection!
  tag(where: TagWhereUniqueInput!): Tag
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Story {
  id: ID!
  title: String!
  synopsis: String
  public: Boolean!
  publicationDate: DateTime!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  chapters(where: ChapterWhereInput, orderBy: ChapterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chapter!]
  author: User
  likedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type StoryConnection {
  pageInfo: PageInfo!
  edges: [StoryEdge]!
  aggregate: AggregateStory!
}

input StoryCreateInput {
  id: ID
  title: String!
  synopsis: String
  public: Boolean!
  publicationDate: DateTime!
  tags: TagCreateManyWithoutStoriesInput
  chapters: ChapterCreateManyWithoutStoryInput
  author: UserCreateOneWithoutStoriesInput
  likedBy: UserCreateManyWithoutLikesStoryInput
}

input StoryCreateManyWithoutAuthorInput {
  create: [StoryCreateWithoutAuthorInput!]
  connect: [StoryWhereUniqueInput!]
}

input StoryCreateManyWithoutLikedByInput {
  create: [StoryCreateWithoutLikedByInput!]
  connect: [StoryWhereUniqueInput!]
}

input StoryCreateManyWithoutTagsInput {
  create: [StoryCreateWithoutTagsInput!]
  connect: [StoryWhereUniqueInput!]
}

input StoryCreateOneWithoutChaptersInput {
  create: StoryCreateWithoutChaptersInput
  connect: StoryWhereUniqueInput
}

input StoryCreateWithoutAuthorInput {
  id: ID
  title: String!
  synopsis: String
  public: Boolean!
  publicationDate: DateTime!
  tags: TagCreateManyWithoutStoriesInput
  chapters: ChapterCreateManyWithoutStoryInput
  likedBy: UserCreateManyWithoutLikesStoryInput
}

input StoryCreateWithoutChaptersInput {
  id: ID
  title: String!
  synopsis: String
  public: Boolean!
  publicationDate: DateTime!
  tags: TagCreateManyWithoutStoriesInput
  author: UserCreateOneWithoutStoriesInput
  likedBy: UserCreateManyWithoutLikesStoryInput
}

input StoryCreateWithoutLikedByInput {
  id: ID
  title: String!
  synopsis: String
  public: Boolean!
  publicationDate: DateTime!
  tags: TagCreateManyWithoutStoriesInput
  chapters: ChapterCreateManyWithoutStoryInput
  author: UserCreateOneWithoutStoriesInput
}

input StoryCreateWithoutTagsInput {
  id: ID
  title: String!
  synopsis: String
  public: Boolean!
  publicationDate: DateTime!
  chapters: ChapterCreateManyWithoutStoryInput
  author: UserCreateOneWithoutStoriesInput
  likedBy: UserCreateManyWithoutLikesStoryInput
}

type StoryEdge {
  node: Story!
  cursor: String!
}

enum StoryOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  synopsis_ASC
  synopsis_DESC
  public_ASC
  public_DESC
  publicationDate_ASC
  publicationDate_DESC
}

type StoryPreviousValues {
  id: ID!
  title: String!
  synopsis: String
  public: Boolean!
  publicationDate: DateTime!
}

input StoryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  synopsis: String
  synopsis_not: String
  synopsis_in: [String!]
  synopsis_not_in: [String!]
  synopsis_lt: String
  synopsis_lte: String
  synopsis_gt: String
  synopsis_gte: String
  synopsis_contains: String
  synopsis_not_contains: String
  synopsis_starts_with: String
  synopsis_not_starts_with: String
  synopsis_ends_with: String
  synopsis_not_ends_with: String
  public: Boolean
  public_not: Boolean
  publicationDate: DateTime
  publicationDate_not: DateTime
  publicationDate_in: [DateTime!]
  publicationDate_not_in: [DateTime!]
  publicationDate_lt: DateTime
  publicationDate_lte: DateTime
  publicationDate_gt: DateTime
  publicationDate_gte: DateTime
  AND: [StoryScalarWhereInput!]
  OR: [StoryScalarWhereInput!]
  NOT: [StoryScalarWhereInput!]
}

type StorySubscriptionPayload {
  mutation: MutationType!
  node: Story
  updatedFields: [String!]
  previousValues: StoryPreviousValues
}

input StorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StoryWhereInput
  AND: [StorySubscriptionWhereInput!]
  OR: [StorySubscriptionWhereInput!]
  NOT: [StorySubscriptionWhereInput!]
}

input StoryUpdateInput {
  title: String
  synopsis: String
  public: Boolean
  publicationDate: DateTime
  tags: TagUpdateManyWithoutStoriesInput
  chapters: ChapterUpdateManyWithoutStoryInput
  author: UserUpdateOneWithoutStoriesInput
  likedBy: UserUpdateManyWithoutLikesStoryInput
}

input StoryUpdateManyDataInput {
  title: String
  synopsis: String
  public: Boolean
  publicationDate: DateTime
}

input StoryUpdateManyMutationInput {
  title: String
  synopsis: String
  public: Boolean
  publicationDate: DateTime
}

input StoryUpdateManyWithoutAuthorInput {
  create: [StoryCreateWithoutAuthorInput!]
  delete: [StoryWhereUniqueInput!]
  connect: [StoryWhereUniqueInput!]
  set: [StoryWhereUniqueInput!]
  disconnect: [StoryWhereUniqueInput!]
  update: [StoryUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [StoryUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [StoryScalarWhereInput!]
  updateMany: [StoryUpdateManyWithWhereNestedInput!]
}

input StoryUpdateManyWithoutLikedByInput {
  create: [StoryCreateWithoutLikedByInput!]
  delete: [StoryWhereUniqueInput!]
  connect: [StoryWhereUniqueInput!]
  set: [StoryWhereUniqueInput!]
  disconnect: [StoryWhereUniqueInput!]
  update: [StoryUpdateWithWhereUniqueWithoutLikedByInput!]
  upsert: [StoryUpsertWithWhereUniqueWithoutLikedByInput!]
  deleteMany: [StoryScalarWhereInput!]
  updateMany: [StoryUpdateManyWithWhereNestedInput!]
}

input StoryUpdateManyWithoutTagsInput {
  create: [StoryCreateWithoutTagsInput!]
  delete: [StoryWhereUniqueInput!]
  connect: [StoryWhereUniqueInput!]
  set: [StoryWhereUniqueInput!]
  disconnect: [StoryWhereUniqueInput!]
  update: [StoryUpdateWithWhereUniqueWithoutTagsInput!]
  upsert: [StoryUpsertWithWhereUniqueWithoutTagsInput!]
  deleteMany: [StoryScalarWhereInput!]
  updateMany: [StoryUpdateManyWithWhereNestedInput!]
}

input StoryUpdateManyWithWhereNestedInput {
  where: StoryScalarWhereInput!
  data: StoryUpdateManyDataInput!
}

input StoryUpdateOneRequiredWithoutChaptersInput {
  create: StoryCreateWithoutChaptersInput
  update: StoryUpdateWithoutChaptersDataInput
  upsert: StoryUpsertWithoutChaptersInput
  connect: StoryWhereUniqueInput
}

input StoryUpdateWithoutAuthorDataInput {
  title: String
  synopsis: String
  public: Boolean
  publicationDate: DateTime
  tags: TagUpdateManyWithoutStoriesInput
  chapters: ChapterUpdateManyWithoutStoryInput
  likedBy: UserUpdateManyWithoutLikesStoryInput
}

input StoryUpdateWithoutChaptersDataInput {
  title: String
  synopsis: String
  public: Boolean
  publicationDate: DateTime
  tags: TagUpdateManyWithoutStoriesInput
  author: UserUpdateOneWithoutStoriesInput
  likedBy: UserUpdateManyWithoutLikesStoryInput
}

input StoryUpdateWithoutLikedByDataInput {
  title: String
  synopsis: String
  public: Boolean
  publicationDate: DateTime
  tags: TagUpdateManyWithoutStoriesInput
  chapters: ChapterUpdateManyWithoutStoryInput
  author: UserUpdateOneWithoutStoriesInput
}

input StoryUpdateWithoutTagsDataInput {
  title: String
  synopsis: String
  public: Boolean
  publicationDate: DateTime
  chapters: ChapterUpdateManyWithoutStoryInput
  author: UserUpdateOneWithoutStoriesInput
  likedBy: UserUpdateManyWithoutLikesStoryInput
}

input StoryUpdateWithWhereUniqueWithoutAuthorInput {
  where: StoryWhereUniqueInput!
  data: StoryUpdateWithoutAuthorDataInput!
}

input StoryUpdateWithWhereUniqueWithoutLikedByInput {
  where: StoryWhereUniqueInput!
  data: StoryUpdateWithoutLikedByDataInput!
}

input StoryUpdateWithWhereUniqueWithoutTagsInput {
  where: StoryWhereUniqueInput!
  data: StoryUpdateWithoutTagsDataInput!
}

input StoryUpsertWithoutChaptersInput {
  update: StoryUpdateWithoutChaptersDataInput!
  create: StoryCreateWithoutChaptersInput!
}

input StoryUpsertWithWhereUniqueWithoutAuthorInput {
  where: StoryWhereUniqueInput!
  update: StoryUpdateWithoutAuthorDataInput!
  create: StoryCreateWithoutAuthorInput!
}

input StoryUpsertWithWhereUniqueWithoutLikedByInput {
  where: StoryWhereUniqueInput!
  update: StoryUpdateWithoutLikedByDataInput!
  create: StoryCreateWithoutLikedByInput!
}

input StoryUpsertWithWhereUniqueWithoutTagsInput {
  where: StoryWhereUniqueInput!
  update: StoryUpdateWithoutTagsDataInput!
  create: StoryCreateWithoutTagsInput!
}

input StoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  synopsis: String
  synopsis_not: String
  synopsis_in: [String!]
  synopsis_not_in: [String!]
  synopsis_lt: String
  synopsis_lte: String
  synopsis_gt: String
  synopsis_gte: String
  synopsis_contains: String
  synopsis_not_contains: String
  synopsis_starts_with: String
  synopsis_not_starts_with: String
  synopsis_ends_with: String
  synopsis_not_ends_with: String
  public: Boolean
  public_not: Boolean
  publicationDate: DateTime
  publicationDate_not: DateTime
  publicationDate_in: [DateTime!]
  publicationDate_not_in: [DateTime!]
  publicationDate_lt: DateTime
  publicationDate_lte: DateTime
  publicationDate_gt: DateTime
  publicationDate_gte: DateTime
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  chapters_every: ChapterWhereInput
  chapters_some: ChapterWhereInput
  chapters_none: ChapterWhereInput
  author: UserWhereInput
  likedBy_every: UserWhereInput
  likedBy_some: UserWhereInput
  likedBy_none: UserWhereInput
  AND: [StoryWhereInput!]
  OR: [StoryWhereInput!]
  NOT: [StoryWhereInput!]
}

input StoryWhereUniqueInput {
  id: ID
}

type Subscription {
  chapter(where: ChapterSubscriptionWhereInput): ChapterSubscriptionPayload
  story(where: StorySubscriptionWhereInput): StorySubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tag {
  id: ID!
  name: String!
  stories(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Story!]
}

type TagConnection {
  pageInfo: PageInfo!
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  id: ID
  name: String!
  stories: StoryCreateManyWithoutTagsInput
}

input TagCreateManyWithoutStoriesInput {
  create: [TagCreateWithoutStoriesInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateWithoutStoriesInput {
  id: ID
  name: String!
}

type TagEdge {
  node: Tag!
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
}

input TagScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [TagScalarWhereInput!]
  OR: [TagScalarWhereInput!]
  NOT: [TagScalarWhereInput!]
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TagWhereInput
  AND: [TagSubscriptionWhereInput!]
  OR: [TagSubscriptionWhereInput!]
  NOT: [TagSubscriptionWhereInput!]
}

input TagUpdateInput {
  name: String
  stories: StoryUpdateManyWithoutTagsInput
}

input TagUpdateManyDataInput {
  name: String
}

input TagUpdateManyMutationInput {
  name: String
}

input TagUpdateManyWithoutStoriesInput {
  create: [TagCreateWithoutStoriesInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  set: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutStoriesInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutStoriesInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdateWithoutStoriesDataInput {
  name: String
}

input TagUpdateWithWhereUniqueWithoutStoriesInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutStoriesDataInput!
}

input TagUpsertWithWhereUniqueWithoutStoriesInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutStoriesDataInput!
  create: TagCreateWithoutStoriesInput!
}

input TagWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  stories_every: StoryWhereInput
  stories_some: StoryWhereInput
  stories_none: StoryWhereInput
  AND: [TagWhereInput!]
  OR: [TagWhereInput!]
  NOT: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
  name: String
}

type User {
  id: ID!
  name: String!
  password: String!
  email: String!
  stories(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Story!]
  chapters(where: ChapterWhereInput, orderBy: ChapterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chapter!]
  likesStory(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Story!]
  likesChapter(where: ChapterWhereInput, orderBy: ChapterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chapter!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  password: String!
  email: String!
  stories: StoryCreateManyWithoutAuthorInput
  chapters: ChapterCreateManyWithoutAuthorInput
  likesStory: StoryCreateManyWithoutLikedByInput
  likesChapter: ChapterCreateManyWithoutLikedByInput
}

input UserCreateManyWithoutLikesChapterInput {
  create: [UserCreateWithoutLikesChapterInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutLikesStoryInput {
  create: [UserCreateWithoutLikesStoryInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutChaptersInput {
  create: UserCreateWithoutChaptersInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutStoriesInput {
  create: UserCreateWithoutStoriesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutChaptersInput {
  id: ID
  name: String!
  password: String!
  email: String!
  stories: StoryCreateManyWithoutAuthorInput
  likesStory: StoryCreateManyWithoutLikedByInput
  likesChapter: ChapterCreateManyWithoutLikedByInput
}

input UserCreateWithoutLikesChapterInput {
  id: ID
  name: String!
  password: String!
  email: String!
  stories: StoryCreateManyWithoutAuthorInput
  chapters: ChapterCreateManyWithoutAuthorInput
  likesStory: StoryCreateManyWithoutLikedByInput
}

input UserCreateWithoutLikesStoryInput {
  id: ID
  name: String!
  password: String!
  email: String!
  stories: StoryCreateManyWithoutAuthorInput
  chapters: ChapterCreateManyWithoutAuthorInput
  likesChapter: ChapterCreateManyWithoutLikedByInput
}

input UserCreateWithoutStoriesInput {
  id: ID
  name: String!
  password: String!
  email: String!
  chapters: ChapterCreateManyWithoutAuthorInput
  likesStory: StoryCreateManyWithoutLikedByInput
  likesChapter: ChapterCreateManyWithoutLikedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  email_ASC
  email_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  password: String!
  email: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  password: String
  email: String
  stories: StoryUpdateManyWithoutAuthorInput
  chapters: ChapterUpdateManyWithoutAuthorInput
  likesStory: StoryUpdateManyWithoutLikedByInput
  likesChapter: ChapterUpdateManyWithoutLikedByInput
}

input UserUpdateManyDataInput {
  name: String
  password: String
  email: String
}

input UserUpdateManyMutationInput {
  name: String
  password: String
  email: String
}

input UserUpdateManyWithoutLikesChapterInput {
  create: [UserCreateWithoutLikesChapterInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutLikesChapterInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutLikesChapterInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutLikesStoryInput {
  create: [UserCreateWithoutLikesStoryInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutLikesStoryInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutLikesStoryInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneWithoutChaptersInput {
  create: UserCreateWithoutChaptersInput
  update: UserUpdateWithoutChaptersDataInput
  upsert: UserUpsertWithoutChaptersInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutStoriesInput {
  create: UserCreateWithoutStoriesInput
  update: UserUpdateWithoutStoriesDataInput
  upsert: UserUpsertWithoutStoriesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutChaptersDataInput {
  name: String
  password: String
  email: String
  stories: StoryUpdateManyWithoutAuthorInput
  likesStory: StoryUpdateManyWithoutLikedByInput
  likesChapter: ChapterUpdateManyWithoutLikedByInput
}

input UserUpdateWithoutLikesChapterDataInput {
  name: String
  password: String
  email: String
  stories: StoryUpdateManyWithoutAuthorInput
  chapters: ChapterUpdateManyWithoutAuthorInput
  likesStory: StoryUpdateManyWithoutLikedByInput
}

input UserUpdateWithoutLikesStoryDataInput {
  name: String
  password: String
  email: String
  stories: StoryUpdateManyWithoutAuthorInput
  chapters: ChapterUpdateManyWithoutAuthorInput
  likesChapter: ChapterUpdateManyWithoutLikedByInput
}

input UserUpdateWithoutStoriesDataInput {
  name: String
  password: String
  email: String
  chapters: ChapterUpdateManyWithoutAuthorInput
  likesStory: StoryUpdateManyWithoutLikedByInput
  likesChapter: ChapterUpdateManyWithoutLikedByInput
}

input UserUpdateWithWhereUniqueWithoutLikesChapterInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutLikesChapterDataInput!
}

input UserUpdateWithWhereUniqueWithoutLikesStoryInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutLikesStoryDataInput!
}

input UserUpsertWithoutChaptersInput {
  update: UserUpdateWithoutChaptersDataInput!
  create: UserCreateWithoutChaptersInput!
}

input UserUpsertWithoutStoriesInput {
  update: UserUpdateWithoutStoriesDataInput!
  create: UserCreateWithoutStoriesInput!
}

input UserUpsertWithWhereUniqueWithoutLikesChapterInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutLikesChapterDataInput!
  create: UserCreateWithoutLikesChapterInput!
}

input UserUpsertWithWhereUniqueWithoutLikesStoryInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutLikesStoryDataInput!
  create: UserCreateWithoutLikesStoryInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  stories_every: StoryWhereInput
  stories_some: StoryWhereInput
  stories_none: StoryWhereInput
  chapters_every: ChapterWhereInput
  chapters_some: ChapterWhereInput
  chapters_none: ChapterWhereInput
  likesStory_every: StoryWhereInput
  likesStory_some: StoryWhereInput
  likesStory_none: StoryWhereInput
  likesChapter_every: ChapterWhereInput
  likesChapter_some: ChapterWhereInput
  likesChapter_none: ChapterWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    