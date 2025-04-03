import { StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meals Overview Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default MealsOverviewScreen; 