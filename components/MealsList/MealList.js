import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from './MealItem';
import GlobalStyle from '../../constants/GlobalStyle';

function MealList({ items }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: GlobalStyle.Spacing.medium,
  },
});

export default MealList;