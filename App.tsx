import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <SafeAreaView style={styles.container}>
        <CategoriesScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424', // 앱 전체의 배경색
  },
});
