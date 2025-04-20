import { StyleSheet, View } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route, navigation }) {
  const catID = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === catID,).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catID, navigation]);

  const displayMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      navigation: navigation,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MealsOverviewScreen;
