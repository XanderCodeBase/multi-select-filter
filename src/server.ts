import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import { gql } from 'graphql-tag';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dataPath = path.join(__dirname, '../public/data/items.json');
const rawData = fs.readFileSync(dataPath, 'utf-8');
const jsonData = JSON.parse(rawData);
const stringArray: string[] = jsonData.data;

const typeDefs = gql`
  type Query {
    items: [String!]!
  }
`;

const resolvers = {
  Query: {
    items: () => stringArray,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:4173'],
    credentials: true,
  })
);

const port = 4000;

async function startServer() {
  await server.start();

  app.use('/graphql', express.json(), expressMiddleware(server));

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/graphql`);
  });
}

startServer();
