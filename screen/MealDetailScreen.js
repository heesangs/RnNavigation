import { View, Text, Image } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: selectedMeal.title });
  }, [navigation, mealId, selectedMeal]);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
        <MealDetail
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
        <Text>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredients => 
            <Text key={ingredients}>{ingredients}</Text>
        )}
        <Text>Steps</Text>
        {selectedMeal.steps.map(step => 
            <Text key={step}>{step}</Text>
        )}

    </View>
  );
}

export default MealDetailScreen;
