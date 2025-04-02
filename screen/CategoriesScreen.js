import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';

function renderCategoryItem(itemData) {
    return (
        <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} />
    );
  }

function CategoriesScreen() {

  return (
    <FlatList
        key="two-column-list" // numColumns 사용시 필요 3줄이면 three-column-list 등 작성.
        data={CATEGORIES}
        keyExtractor={(item) => item.id} //FlatList가 직접 호출하며 매개변수로 바로 item을 전달
        renderItem={renderCategoryItem} //renderItem은 추가정보(item,index,separators)를 포함한 객체를 전달.
        numColumns={2}
    />
  );
}

export default CategoriesScreen;