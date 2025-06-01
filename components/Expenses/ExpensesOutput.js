import { View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpensesOutput({ expensesPeriod }) {
  const DUMMY_EXPENSES = [
    { id: '1', description: '점심 식사', amount: 12000, date: '2024-01-20' },
    { id: '2', description: '버스 요금', amount: 1500, date: '2024-01-20' },
    { id: '3', description: '커피', amount: 4500, date: '2024-01-19' },
    { id: '4', description: '편의점', amount: 3200, date: '2024-01-19' },
    { id: '5', description: '영화 관람', amount: 15000, date: '2024-01-18' },
  ];

  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
