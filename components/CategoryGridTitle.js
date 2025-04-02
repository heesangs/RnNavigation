import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';

function CategoryGridTitle({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable 
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: color },
          Platform.OS === 'ios' && pressed && styles.buttonPressed
        ]}
        android_ripple={{ color: 'rgba(0, 0, 0, 0.15)' }}
      >
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
    margin: 16,
    height: 150,
    borderRadius: 10,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
    borderRadius: 10,
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

