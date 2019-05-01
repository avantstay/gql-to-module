#!/usr/bin/env node

const meow = require('meow');
const graphqlToModule = require('./graphqlToModule')

const { input, flags } = meow(`
    Usage
      $ gql-to-module <pattern>
 
    Options
      --es6             Generate module files with 'export default' instead of 'module.exports'
      --extension, -e   Output extension (default: js)
      --watch, -w       Watch GraphQL files
 
    Examples
      $ gql-to-module ./src/**/*.graphql -t -w
`, {
  flags: {
    es6: {
      type: 'boolean',
    },
    watch: {
      type: 'boolean',
      alias: 'w'
    },
    extension: {
      type: 'string',
      alias: 'e'
    }
  }
});

graphqlToModule(input, flags)