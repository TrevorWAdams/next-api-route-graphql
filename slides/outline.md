## What is GraphQL

- [GraphQL](https://graphql.github.io/graphql-spec/June2018/) is a specification
- [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) on the other hand is not.
  - There are REST best practices and style guides, but not an agreed upon specification.


## Why use GraphQL

- It allows you to create an abstraction layer for your API
- Because the API adheres to the specification, documentation can be generated easily. 

## How does it work?

- GraphQL uses a type system to define a schema.
- The schema defines the initial root operation type for each kind of operation it supports: 
  - query
  - mutation
  - subscription
- GraphQL delegates the work from each defined root operation to an async resolver function.
- This provides the abstraction layer and allow you to fulfill the resolver function

## What is Next.js

## What are API routes

## How to use an API route for a GraphQL endpoint in Next.js

