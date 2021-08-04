const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();

dotenv.config();

app.use(bodyParser.json());


// app.use('/graphql', graphqlHTTP({
//     schema: buildSchema(`
//         type Student {
//             Name: String!
//             Email: String!
//             Phone: [String!]!
//             Date_of_Birth: LocalDate!
//             Subjects: String!
//         }
//         type Query{
//             Subjects: [String!]: Student
//         }
//         type Mutation{
//             addStudent(name: StudentInput) : Student
//         }
//         input UserInput {
//             Name: String!
//             Email: String!
//             Phone: [String!]!
//             Date_of_Birth: LocalDate!
//             Subjects: String!
//         }
//         schema{
//             query: Query
//             mutation: Mutation
//         }
//     `),
//     rootValue: {
//         Subjects: () => {
//             return ['Bangla', 'English', 'Math', 'Physics'];
//         },
//         addStudent: (args) => {
//             const StudentName = args.Name;
//             return [StudentName,]
//         }
//     },
//     graphiql: true
// })
// );


app.get('/', (req, res, next) => {
    res.send("Working");
})
app.listen(process.env.PORT, ()=> {
    console.log(`App running port ${process.env.PORT}`);
});