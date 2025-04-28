import { Text, View, StyleSheet } from 'react-native';

function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>this is my favorites food </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#281103',
  },
  text: {
    color: 'white'
  }
});

export default FavoritesScreen;
