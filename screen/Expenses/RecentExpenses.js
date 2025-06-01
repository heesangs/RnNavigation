import React from 'react';
import { View } from 'react-native';
import ExpensesOutput from '../../components/Expenses/ExpensesOutput';

function RecentExpenses({ navigation }) {
  // 최근 7일간의 지출 데이터 (임시 더미 데이터)

  return (
    <View>
      <ExpensesOutput expensesPeriod="Last 7 Days"
      />
    </View>
  );
}

export default RecentExpenses;

