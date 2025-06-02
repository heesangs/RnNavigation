import { View, Text, StyleSheet, Pressable } from 'react-native';
import GlobalStyle from '../../constants/GlobalStyle';

function ExpensesItem({ description, date, amount }) {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{description}</Text>
          <Text style={styles.textBase}>{date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpensesItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding:GlobalStyle.Spacing.medium,
    backgroundColor: GlobalStyle.Colors.pri20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius:GlobalStyle.Spacing.borderRadius,
    elevation: 3,
    shadowColor: GlobalStyle.Colors.pri90,
    shadowRadius: 4,
    shadowOffset: {width:1, height:1},
    shadowOpacity: 0.4,
  },
  textBase: {
    color:GlobalStyle.Colors.pri80,
  },
  description: {
    fontSize: GlobalStyle.Typography.medium,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    color: GlobalStyle.Colors.pri80,
    fontWeight: 'bold',
  },
});
