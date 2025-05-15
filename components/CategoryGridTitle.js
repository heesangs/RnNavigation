import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';
import GlobalStyle from '../constants/GlobalStyle';

function CategoryGridTitle({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: color },
          Platform.OS === 'ios' && pressed && styles.buttonPressed,
        ]}
        android_ripple={{ color: GlobalStyle.Colors.rippleColor }}
        onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: GlobalStyle.Spacing.medium,
    height: GlobalStyle.Spacing.gridItemHeight,
    borderRadius: GlobalStyle.Spacing.borderRadiusMedium,
    elevation: GlobalStyle.Spacing.shadow.elevation,
    shadowColor: GlobalStyle.Colors.shadowColor,
    shadowOpacity: 0.16,
    shadowOffset: GlobalStyle.Spacing.shadow.shadowOffset,
    shadowRadius: GlobalStyle.Spacing.shadow.shadowRadius,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
    borderRadius: GlobalStyle.Spacing.borderRadiusMedium,
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  innerContainer: {
    flex: 1,
    padding: GlobalStyle.Spacing.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: GlobalStyle.Typography.small,
    fontWeight: GlobalStyle.Typography.bold,
  },
});
