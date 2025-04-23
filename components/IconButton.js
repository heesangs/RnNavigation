import { Pressable, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function IconButton({icon, color, onPress}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <MaterialIcons name={icon || "star"} size={24} color={color || "white"} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
    },
});
