const fs = require("fs");
const { ApolloServer } = require("apollo-server-express");

const express = require("express");
const http = require("http");
const path = require("path");

const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

const Query = require("./resolvers/Query");

const resolvers = {
  Query,
};

const typeDefs = fs.readFileSync(
  path.join(__dirname, "schema.graphql"),
  "utf8"
);

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await server.start();
  server.applyMiddleware({
    app,
  });
  app.use(express.static(path.join(__dirname, "../../front", "build")));
  app.use(express.static("public"));

  app.get("/rest", function (req, res) {
    res.json({ data: "hello world" });
  });

  app.get("*", function (req, res) {
    // res.json({data:'Admin Vlad'})
    res.sendFile(path.join(__dirname, "../../front", "build", "index.html"));
  });

  await new Promise((resolve) =>
    // not production
    //  port: 4000

    // on production
    //port: process.env.PORT || 80

    httpServer.listen({ port: process.env.PORT || 80 }, resolve)
  );
  console.log(
    // on production
    // `🚀 Server ready at http://localhost:${process.env.PORT || 80}${server.graphqlPath}`

    // not production
    // `🚀 Server ready at http://localhost:${4000}${server.graphqlPath}`

    `🚀 Server ready at http://localhost:${process.env.PORT || 80}${
      server.graphqlPath
    }`
  );
}

startApolloServer(typeDefs, resolvers);
