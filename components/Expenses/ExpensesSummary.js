import { View, Text, StyleSheet } from 'react-native';
import GlobalStyle from '../../constants/GlobalStyle';

function ExpensesSummary({ periodName, expenses }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: GlobalStyle.Spacing.medium,
    backgroundColor: GlobalStyle.Colors.pri20,
    borderRadius: GlobalStyle.Spacing.borderRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: GlobalStyle.Typography.small,
    color: GlobalStyle.Colors.accentSecondary,
  },
  sum: {
    fontSize: GlobalStyle.Typography.medium,
    color: GlobalStyle.Colors.accentSecondary,
  },
});