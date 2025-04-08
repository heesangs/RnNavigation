import {StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {FlatList} from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';
function MealsOverviewScreen({route}) {
  const catID = route.params.categoryId;

  const displayMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MealsOverviewScreen;
