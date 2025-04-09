// server.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const schema = require('./schema') // Import your schema
const cors = require('cors'); // Enable CORS

const app = express();
app.use(cors());

// Set up the GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`GraphQL server is running on http://localhost:${PORT}/graphql`);
});