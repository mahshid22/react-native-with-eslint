import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon } from './icon/components';
const Hello = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>App.sdfsdfsdftsxcszdfd</Text>
      <Icon name="home" size="lg" color="red" />
    </View>
  );
};
export default Hello;
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
