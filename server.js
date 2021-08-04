const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const{ buildSchema } = require('graphql');
const {connectDB} = require("./db");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;



app.use(cors());
app.use(express.json());


app.use("/graphql",graphqlHTTP({
    schema: schema,
    graphiql: true,
})
)
    
app.get('/', (req, res) => {
    res.send("Working");
})
app.listen(port, ()=> {
    console.log(`App running port ${port}`);
});