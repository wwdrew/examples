import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export interface ExampleFetchData {
  id: number;
  firstName: string;
  lastName: string;
}

interface Props {
  data: ExampleFetchData[];
}

export const ResultsList = ({ data }: Props) => (
  <FlatList
    data={data}
    keyExtractor={({ id }) => `${id}`}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Text>
          <Text style={styles.bold}>Full Name</Text>: {item.firstName}{' '}
          {item.lastName}
        </Text>
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
});
