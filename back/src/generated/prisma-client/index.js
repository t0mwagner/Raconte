"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Story",
    embedded: false
  },
  {
    name: "Chapter",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Tag",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/warthas-307d03/raconte/dev`
});
exports.prisma = new exports.Prisma();
