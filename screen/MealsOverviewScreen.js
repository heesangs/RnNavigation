import { StyleSheet, View } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealsList/MealList';
import GlobalStyle from '../constants/GlobalStyle';

function MealsOverviewScreen({ route, navigation }) {
  const catID = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === catID,).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catID, navigation]);

  const displayMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  return (
    <View style={styles.container}>
      <MealList items={displayMeals} />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.Colors.primaryDark,
  },
})