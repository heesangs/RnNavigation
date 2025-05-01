import { useSelector } from 'react-redux';
import MealList from '../components/MealsList/MealList';
// import { FavoritesContext } from '../store/context/favorites-context';
// import { useContext } from 'react';
import { MEALS } from '../data/dummy-data';
import { View, StyleSheet, Text } from 'react-native';

function FavoritesScreen() {
  // const favoritesMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

  const favoriteMeal = MEALS.filter(meal => {
    return favoriteMealIds.includes(meal.id);
  });

  if (favoriteMeal.length === 0) {
    return (
      <View style={styles.contentsBox}>
        <View style={styles.textLayout}>
          <Text style={styles.text}> you have no favorite meals yet.</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MealList items={favoriteMeal} />
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#281103',
  },
  contentsBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#281103',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textLayout: {
    marginBottom: 80,
  },
});
