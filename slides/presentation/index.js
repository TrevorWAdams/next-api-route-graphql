// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck, Heading, List, ListItem, Notes, Slide, Text } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>
            GraphQL
          </Heading>
          <Text>and Next.js</Text>
          <Notes>Explain why I'm interested in GraphQL.</Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>
            Welcome
          </Heading>
          <List>
            <ListItem>My name is Trevor.</ListItem>
            <ListItem>I am a developer.</ListItem>
            <ListItem>I work for Allata.</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>
            The Problem
          </Heading>
          <List>
            <ListItem>Applications grow organically over time.</ListItem>
            <ListItem>Business logic gets scattered about.</ListItem>
            <ListItem>As clients are added things get brittle.</ListItem>
          </List>
          <Notes>Set the context - general observations</Notes>
          <Notes>I've been faced with this problem on several occasions</Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Business logic sprawl
          </Heading>
          <List>
            <ListItem>It gets baked into the UI.</ListItem>
            <ListItem>Sometimes it's hidden in the dB.</ListItem>
            <ListItem>Like side effects in stored procedures.</ListItem>
            <ListItem>And triggers.</ListItem>
          </List>
          <Notes>I call this hidden business logic.</Notes>
          <Notes>So what can we do?</Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Put business logic in one place
          </Heading>
          <List>
            <ListItem>Were?</ListItem>
            <ListItem>Behind our API?</ListItem>
            <ListItem>Which one?</ListItem>
            <ListItem>How?</ListItem>
            <ListItem>How about documentation?</ListItem>
          </List>
          <Notes>Swagger is cool, but it's another thing to do.</Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>
            GraphQL
          </Heading>
          <Heading size={6} textColor="secondary" caps>
            One API to rule them all
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            What is GraphQL?
          </Heading>
          <List>
            <ListItem>It's a specification.</ListItem>
            <ListItem>REST is not.</ListItem>
          </List>
          <Notes>https://graphql.github.io/graphql-spec/June2018/</Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Why use the GraphQL Specification?
          </Heading>
          <List>
            <ListItem>It enforces consistency.</ListItem>
            <ListItem>Allow documentation generation.</ListItem>
            <ListItem>Provides an abstraction layer over the API.</ListItem>
            <ListItem>Defines a channel for push notifications.</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            How does it work?
          </Heading>
          <List>
            <ListItem>I'm not sure.</ListItem>
          </List>
          <Notes>But here is what I think I know.</Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            GraphQL - Big picture
          </Heading>
          <List>
            <ListItem>A GraphQL API has one end-point.</ListItem>
            <ListItem>GraphQL spec defines a type system.</ListItem>
            <ListItem>Use the type system to build a schema.</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Special types
          </Heading>
          <List>
            <ListItem>Query.</ListItem>
            <ListItem>Mutation.</ListItem>
            <ListItem>Subscription.</ListItem>
          </List>
          <Notes>Briefly explain each.</Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Async resolver functions
          </Heading>
          <List>
            <ListItem>Used for implementation.</ListItem>
            <ListItem>Provides the abstraction layer.</ListItem>
            <ListItem>Can use existing APIs for implementation.</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>
            Challenges
          </Heading>
          <List>
            <ListItem>Designing a GraphQL schema is different.</ListItem>
            <ListItem>Changing the schema is hard.</ListItem>
            <ListItem>Caching is easy until it gets hard.</ListItem>
            <ListItem>Tooling (especially in .NET).</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Pets, Users, and a Login Button
          </Heading>
          <Heading size={1} textColor="secondary" caps>
            WIP Demo
          </Heading>
          <List>
            <ListItem>Next.js.</ListItem>
            <ListItem>API route.</ListItem>
            <ListItem>In memory database.</ListItem>
          </List>
          <Notes>I believe api routes were added in Next.js 9?</Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>
            Overview
          </Heading>
          <List>
            <ListItem>One project for both the UI and API.</ListItem>
            <ListItem>Some boiler plate code (cut/paste).</ListItem>
            <ListItem>Not done - WIP.</ListItem>
          </List>
          <Notes>Fire it up</Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            GraphQL Playground
          </Heading>
          <List>
            <ListItem>Queries.</ListItem>
            <ListItem>Mutations.</ListItem>
            <ListItem>Subscriptions not included.</ListItem>
          </List>
          <Notes>Demo queries and Log In mutation</Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>
            Auth Stuff
          </Heading>
          <Heading size={5} textColor="secondary" caps>
            Basic token authentication
          </Heading>
          <List>
            <ListItem>Check out - graphql.js</ListItem>
            <ListItem>Check out - auth.js</ListItem>
          </List>
          <Notes>This demo is not secure.</Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>
            Client
          </Heading>
          <List>
            <ListItem>Pets.</ListItem>
            <ListItem>Users.</ListItem>
            <ListItem>Login Button.</ListItem>
          </List>
          <Notes>Use GraphQL playground to build, then copy to client.</Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>
            Conclusion
          </Heading>
          <List>
            <ListItem>GraphQL is cool.</ListItem>
            <ListItem>It is a specification.</ListItem>
            <ListItem>Check it out.</ListItem>
          </List>
          <Notes>Any questions.</Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>
            Thanks
          </Heading>
          <Heading textAlign="left" size={5} textColor="secondary" caps>
            GitHub:
          </Heading>
          <Text>trevorwadams/next-api-route-graphql</Text>
        </Slide>
      </Deck>
    );
  }
}
