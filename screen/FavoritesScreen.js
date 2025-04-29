import MealList from '../components/MealsList/MealList';
import { FavoritesContext } from '../store/context/favorites-context';
import { useContext } from 'react';
import { MEALS } from '../data/dummy-data';
import { View,StyleSheet } from 'react-native';

function FavoritesScreen() {
  const favoritesMealsCtx = useContext(FavoritesContext);

  const favoriteMeal = MEALS.filter(meal => {
    return favoritesMealsCtx.ids.includes(meal.id);
  });

  return(
  <View style={styles.container}>
    <MealList items={favoriteMeal} />
  </View>
  )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#281103',
  },
});
