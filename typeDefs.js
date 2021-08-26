const { gql } = require("apollo-server-express");

// Queries
const typeDefs = gql`
    type Student{
        id: ID!
        name: String!
        email: String
        phone: String
        dOB: String
        subjects: String
        description: String

    }
    type Query {
        hello: String
        students:[Student!]!
    }
    input StudentInput{
        name: String
        email: String
        phone: String
        dOB: String
        subjects: String
        description: String
    }
    type Mutation{
        createStudent(student:StudentInput):Student
        updateStudent(id:String, student:StudentInput):Student
        deleteStudent(id:String):String
    }
    
`;

module.exports = typeDefs;