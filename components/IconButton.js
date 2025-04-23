import { Pressable, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function IconButton({icon, color, onPress}) {
    const DEFAULT_ICON = 'star';
    const DEFAULT_COLOR = 'white';

  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <MaterialIcons name={icon || DEFAULT_ICON} size={24} color={color || DEFAULT_COLOR} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
    },
});
