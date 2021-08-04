// import required stuff from graphql

const {GraphQLSchema, GraphQLObjectType} =require('graphql')

// queries that
const {} =require('./queries')

// mutations
const {} =require('./mutations')

// define queryType
const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'Queries',
    fields: {},
})

// define mutationType
const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'Mutations',
    fields: {},
})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutations: MutationType,
})