import { FlatList, View, StyleSheet } from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';
import CategoryGridTitle from '../../components/CategoryGridTitle';
import GlobalStyle from '../../constants/GlobalStyle';

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', { categoryId: itemData.item.id });
    }

    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        key="two-column-list"
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.Colors.primaryDark,
  },
});
