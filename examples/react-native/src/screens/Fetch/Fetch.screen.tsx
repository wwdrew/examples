import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {
  ResultsList,
  ExampleFetchData,
} from '../../components/ResultsList/ResultsList';

export const FetchScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ExampleFetchData[] | undefined>(undefined);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch('http://myapi.test/users');

        if (!response.ok) {
          throw new Error(await response.text());
        }

        const json = await response.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (loading || !data) {
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
