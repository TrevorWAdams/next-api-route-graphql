# Welcome

My name is Trevor.
I'm a dev.

[GitHub](https://github.com/TrevorWAdams/next-api-route-graphql)

---

# Disclaimer

I am very opinionated.
However, my opinions are not tightly held.

This is just my opinion.

---

## The Problem

Applications grow organically over time.
Business logic is scattered in various locations.
Sometimes it's baked into the UI.
Sometimes it's hidden in the dB.
- Side effects in stored procedures
- Triggers
Sometimes it's all encapsulated in a single place.
However, that is not often the case.

As systems mature this business logic "sprawl" makes the system brittle.
So you might think, "I'm gonna put it all in one place!"

---

## Challenges to solving the problem 

Before you gather up all the business logic from the system, you might want to think about where you are going to put it?
Behind an API seems like an option.

- REST "like" APIs are the norm.
- Authentication flows vary.
- Documenting the API is another thing to do.
- Swagger is great but it's another thing to do.

---

## What is GraphQL

- [GraphQL](https://graphql.github.io/graphql-spec/June2018/) is a specification.
- [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) on the other hand is not a specification.
- There are REST best practices and style guides, but not one agreed upon specification.
- With GraphQL, there is 1 specification.
- That makes it easy.

---

## Why use GraphQL

- The specification enforces consistency.
- The specification enables documentation to be generated.
- GraphQL defines a real time channel for push operations (subscriptions)
- GraphQL allows you to create an abstraction layer for your API.
- You can leverage existing APIs or any data source to resolve queries and mutations.

---

## How does it work?

- I'm not sure actually, but it's something like this.
- A GraphQL API defines one end-point. 
- The GraphQL specification defines a type system to make a schema.
- The schema has 3 special types:
  - query
  - mutation
  - subscription
- When these special types are passed into the end-point:
  - GraphQL delegates the work for each of these special type definitions to async resolver functions.
  - This provides the abstraction layer between the API and the actual implementation.
  - This abstraction layer allows the resolver function to be fulfilled however needed.
  - It also allows the implementations to vary over time without changing the GraphQL API.

---

## Challenges to implementing a GraphQL API

- You can't implement a specification.
- However, there are several good packages that provide well supported implementations.
- These implementations allow for multiple caching mechanisms.
- Designing a GraphQL schema is different that designing a database schema.
- Changes to the API schema seem difficult.

---

## Demo

Last time I was here we looked at a Next.js application with a separate GraphQL API application built with Prisma.
Tonight lets take a look at a Next.js application with Apollo Server (micro) and an api route as a GraphQL API endpoint in one application.

Which is best?
- It depends.





