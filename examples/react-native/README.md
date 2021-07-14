# React Native App (REST and GraphQL)

This repository illustrates how to use [Mock Service Worker](https://github.com/mswjs/msw) to mock a REST API and a GraphQL API for development and unit testing in a React Native project.

Three examples are provided:

- REST API access using Fetch
- REST API access using React Query
- GraphQL API access using Apollo Client

## Technologies

- [**React Native**](https://reactnative.dev/)
- [@mswjs/data](https://github.com/mswjs/data) for generating mock API data and handlers;
- [React Query](https://react-query.tanstack.com/) for REST API access;
- [Apollo Client](https://www.apollographql.com/docs/react/) for GraphQL API access;
- [Jest](https://jestjs.io) for running unit tests;
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) for unit test assertions;

## Getting started

```bash
$ git clone https://github.com/mswjs/examples.git
$ cd examples
$ yarn
$ cd react-native-msw
$ npx pod-install
```

## Running locally

### iOS

```bash
$ yarn ios
```

### Android

```bash
$ yarn android
```

## Tests

### Unit tests

```bash
$ yarn test
```

## Key points

- [`mocks/handlers.js`](mocks/handlers.js) describes how to setup request handlers to use for development and unit tests.

When using MSW with React Native, absolute URLs are required for API access when mocking handlers.

### App

- [`mocks/native.js`](mocks/native.js) sets up the React Native Service Worker.
- [`index.js`](index.js) conditionally enables mocking in `development` environment.

### NodeJS

- [`mocks/server.js`](mocks/server.js) sets up the "server" to use the same mocking logic in Node.
- [`jest/setupTests.js`](jest/setupTests.js) enables mocking for unit tests via `beforeAll`/`afterAll` hooks and adds fetch to the global object.

If using `fetch` for API requests in your React Native project, it's important to add this to the global object within your test setup script
otherwise your tests will fail due to `fetch` not being found. This repository uses the `node-fetch` library for this purpose.

## Other Points

- When running unit tests using React Query, the tests will return a warning:

  ```
  Jest did not exit one second after the test run has completed.

  This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
  ```

  This is a [known issue](https://github.com/tannerlinsley/react-query/issues/1847) and is expected to be fixed in a future version of react-native-testing-library.
