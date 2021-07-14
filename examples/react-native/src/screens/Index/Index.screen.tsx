import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { ScreensParamList } from '../../../App';

type Props = StackScreenProps<ScreensParamList, 'Index'>;

export const IndexScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('Fetch')}
        style={styles.navButton}>
        <Text style={styles.navButtonText}>Fetch example</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Query')}
        style={styles.navButton}>
        <Text style={styles.navButtonText}>Query example</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('GraphQL')}
        style={styles.navButton}>
        <Text style={styles.navButtonText}>GraphQL example</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  navButton: {
    borderColor: 'blue',
    borderWidth: 2,
    padding: 16,
    marginBottom: 16,
  },
  navButtonText: {
    fontSize: 20,
  },
});
