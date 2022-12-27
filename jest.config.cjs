// const { pathsToModuleNameMapper } = require("ts-jest");
// const { compilerOptions } = require("./tsconfig.json");
// console.log(compilerOptions);
// /** @type {import('ts-jest').JestConfigWithTsJest} */
// module.exports = {
//   // [...]
//   preset: "ts-jest",
//   roots: ["<rootDir>/src/"],
//   modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
//   moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
//   moduleDirectories: ["node_modules", "<rootDir>/src/"],
//   testEnvironment: "jest-environment-jsdom",
// };

const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src/", `${compilerOptions.baseUrl}`],
  modulePaths: ["<rootDir>/src/", `${compilerOptions.baseUrl}`],
  moduleDirectories: [
    "node_modules",
    "<rootDir>/src/",
    `${compilerOptions.baseUrl}`,
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  watchPathIgnorePatterns: [`./src/tests`],
  testEnvironment: "jsdom",
};
