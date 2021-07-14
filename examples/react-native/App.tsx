import 'react-native-gesture-handler';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  FetchScreen,
  GraphQLScreen,
  IndexScreen,
  QueryScreen,
} from './src/screens';

import apolloClient from './apolloClient';
const queryClient = new QueryClient();

export type ScreensParamList = {
  Index: undefined;
  Fetch: undefined;
  Query: undefined;
  GraphQL: undefined;
};

const Screens = createStackNavigator<ScreensParamList>();

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Screens.Navigator>
          <Screens.Screen
            name="Index"
            component={IndexScreen}
            options={{ title: 'React Native MSW Examples' }}
          />
          <Screens.Screen name="Fetch" component={FetchScreen} />
          <Screens.Screen name="Query" component={QueryScreen} />
          <Screens.Screen name="GraphQL" component={GraphQLScreen} />
        </Screens.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  </ApolloProvider>
);
