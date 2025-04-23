import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screen/CategoriesScreen';
import MealsOverviewScreen from './screen/MealsOverviewScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MealDetailScreen from './screen/MealDetailScreen';
import FavoritesScreen from './screen/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#381703' },
        headerTintColor: 'white',
        drawerContentStyle: { backgroundColor: '#281103' },
      }}>
      <Drawer.Screen name="Category" component={CategoriesScreen} options={{ title: 'All Category' }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#381703' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#281103' },
          }}>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ title: 'About the Meal' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
