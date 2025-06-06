import { View, Text, StyleSheet } from 'react-native';
import GlobalStyle from '../../constants/GlobalStyle';

function List({ data }) {
  return data.map(dataPoint => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: GlobalStyle.Colors.accentSecondary,
  },
  itemText: {
    color: '#351401',
    textAlign: GlobalStyle.Typography.center,
  },
});
