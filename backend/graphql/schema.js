const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString
} = require('graphql')

// Dummy data

const authors = [
  { id: '1', name: 'Tom Rob Smith', language: 'English' },
  { id: '2', name: 'Dave Eggers', language: 'English' }
]
const books = [
  { id: '1', title: 'The Circle', authorId: '2', read: true },
  { id: '2', title: 'The Farm', authorId: '1', read: true }
]

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    language: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, _args) {
        return books.filter(({ authorId }) => authorId === parent.id)
      }
    }
  })
})

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, _args) {
        return authors.find(({ id }) => id === parent.authorId)
      }
    },
    genre: { type: GraphQLString },
    length: { type: GraphQLInt },
    read: { type: GraphQLBoolean }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID }, name: { type: GraphQLString } },
      resolve(_parent, args) {
        if (args.id) {
          return authors.find(({ id }) => id === args.id)
        } else if (args.name) {
          return authors.find(({ name }) => name === args.name)
        }
      }
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return books.find(({ id }) => id === args.id)
      }
    }
  }
})

module.exports = new GraphQLSchema({ query: RootQuery })
