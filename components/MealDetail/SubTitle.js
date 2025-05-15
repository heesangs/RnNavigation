import { Text, StyleSheet, View } from 'react-native';
import GlobalStyle from '../../constants/GlobalStyle';

function SubTitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: GlobalStyle.Colors.accentSecondary,
    fontSize: GlobalStyle.Typography.medium,
    fontWeight: GlobalStyle.Typography.bold,
    textAlign: GlobalStyle.Typography.center,
  },
  subTitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: GlobalStyle.Colors.accentSecondary,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
  },
});
