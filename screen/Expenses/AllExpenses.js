import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GlobalStyle from '../../constants/GlobalStyle';
import ExpensesOutput from '../../components/Expenses/ExpensesOutput';

function AllExpenses({ navigation }) {
  // 임시 더미 데이터 (나중에 실제 데이터로 교체)
  const expensesData = [
    { id: '1', description: '식료품 구매', amount: 45000, date: '2024-01-15' },
    { id: '2', description: '카페 방문', amount: 8500, date: '2024-01-14' },
    { id: '3', description: '주유비', amount: 60000, date: '2024-01-13' },
    { id: '4', description: '도서 구매', amount: 25000, date: '2024-01-12' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>전체 지출 내역</Text>
      </View>
      <ExpensesOutput 
        expenses={expensesData} 
        expensesPeriod="전체" 
        fallbackText="등록된 지출 내역이 없습니다." 
      />
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.Colors.primaryDark,
  },
  header: {
    padding: GlobalStyle.Spacing.medium,
    backgroundColor: GlobalStyle.Colors.primary,
  },
  headerText: {
    fontSize: GlobalStyle.Typography.large,
    fontWeight: GlobalStyle.Typography.bold,
    color: GlobalStyle.Colors.white,
    textAlign: GlobalStyle.Typography.center,
  },
});