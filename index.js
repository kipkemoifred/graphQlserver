const {ApolloServer}=require("apollo-server-express");
const express=require("express");
const {typeDefs}=require("./Schema/TypeDefs");
const {resolvers}=require("./Schema/Resolvers");
const app=express();
const server=new ApolloServer({typeDefs,resolvers});//resolvers
server.applyMiddleware({app})
app.listen({port:3000},()=>{console.log("server runniong")})

// async function startApolloServer(typeDefs, resolvers) {
//     // Same ApolloServer initialization as before
//     const server = new ApolloServer({ typeDefs, resolvers });
  
//     // Required logic for integrating with Express
//     await server.start();
  
//     const app = express();
  
//     server.applyMiddleware({
//        app,
  
//        // By default, apollo-server hosts its GraphQL endpoint at the
//        // server root. However, *other* Apollo Server packages host it at
//        // /graphql. Optionally provide this to match apollo-server.
//        path: '/'
//     });
  
//     // Modified server startup
//     await new Promise(resolve => app.listen({ port: 4000 }, resolve));
//     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
//   }
  //startApolloServer()