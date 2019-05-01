#!/usr/bin/env node

const meow = require('meow');
const graphqlToModule = require('./graphqlToModule')

const { input, flags } = meow(`
    Usage
      $ gql-to-module <pattern>
 
    Options
      --typescript, -t  Generate module files with .ts extension
      --watch, -w  Watch GraphQL files
 
    Examples
      $ gql-to-module ./src/**/*.graphql -t -w
`, {
  flags: {
    typescript: {
      type: 'boolean',
      alias: 't'
    },
    watch: {
      type: 'boolean',
      alias: 'w'
    }
  }
});

graphqlToModule(input, flags)