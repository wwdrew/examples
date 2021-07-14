import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useQuery } from 'react-query';
import {
  ResultsList,
  ExampleFetchData,
} from '../../components/ResultsList/ResultsList';

export const QueryScreen = () => {
  const { data, isLoading } = useQuery<ExampleFetchData[]>(
    'users',
    async () => {
      const response = await fetch('http://myapi.test/users');

      if (!response.ok) {
        throw new Error('Network error');
      }

      return response.json();
    },
  );

  if (isLoading || !data) {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={true} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ResultsList data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
