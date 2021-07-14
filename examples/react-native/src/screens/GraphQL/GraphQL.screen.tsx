import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {
  ResultsList,
  ExampleFetchData,
} from '../../components/ResultsList/ResultsList';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      firstName
      lastName
    }
  }
`;

interface GetUsersQueryResult {
  users: ExampleFetchData[];
}

export const GraphQLScreen = () => {
  const { data, loading } = useQuery<GetUsersQueryResult>(GET_USERS);

  if (loading || !data) {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={true} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ResultsList data={data.users} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
