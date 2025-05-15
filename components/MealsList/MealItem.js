import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetail from '../MealDetail';
import GlobalStyle from '../../constants/GlobalStyle';

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: GlobalStyle.Colors.cardShadow }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={pressHandler}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={[styles.image, styles.radius]} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail duration={duration} complexity={complexity} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: GlobalStyle.Spacing.medium,
    borderRadius: GlobalStyle.Spacing.borderRadius,
    backgroundColor: GlobalStyle.Colors.cardBackground,
    elevation: GlobalStyle.Spacing.shadow.elevation,
    shadowColor: GlobalStyle.Colors.shadowColor,
    shadowOpacity: GlobalStyle.Spacing.shadow.shadowOpacity,
    shadowOffset: GlobalStyle.Spacing.shadow.shadowOffset,
    shadowRadius: GlobalStyle.Spacing.shadow.shadowRadius,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    borderRadius: GlobalStyle.Spacing.borderRadius,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: GlobalStyle.Spacing.mealItemHeight,
  },
  radius: {
    borderTopLeftRadius: GlobalStyle.Spacing.borderRadius,
    borderTopRightRadius: GlobalStyle.Spacing.borderRadius,
  },
  title: {
    fontWeight: GlobalStyle.Typography.bold,
    textAlign: GlobalStyle.Typography.center,
    fontSize: GlobalStyle.Typography.medium,
    margin: GlobalStyle.Spacing.small,
  },
});
