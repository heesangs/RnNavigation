import { View, Text, StyleSheet } from 'react-native';
import GlobalStyle from '../constants/GlobalStyle';

function MealDetail({ duration, complexity, affordability, style, textStyle }) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: GlobalStyle.Spacing.small,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
