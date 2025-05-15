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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import GlobalStyle from './constants/GlobalStyle';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyle.Colors.primary },
        headerTintColor: GlobalStyle.Colors.white,
        drawerContentStyle: { backgroundColor: GlobalStyle.Colors.primaryDark },
        drawerActiveBackgroundColor: GlobalStyle.Colors.primaryMedium,
        drawerActiveTintColor: GlobalStyle.Colors.white,
        drawerInactiveBackgroundColor: 'transparent',
        drawerInactiveTintColor: GlobalStyle.Colors.accent,
        drawerItemStyle: { borderRadius: 5, marginVertical: 5 },
        drawerLabelStyle: { fontWeight: 'bold' },
        drawerStyle: { width: 200 },
      }}>
      <Drawer.Screen
        name="Category"
        component={CategoriesScreen}
        options={{
          title: "Sang's Categories",
          drawerIcon: ({ color, size }) => <MaterialIcons name="list" size={size || GlobalStyle.Spacing.iconSize} color={color || GlobalStyle.Colors.white} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => <MaterialIcons name="star" size={size || GlobalStyle.Spacing.iconSize} color={color || GlobalStyle.Colors.white} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyle.Colors.primary },
              headerTintColor: GlobalStyle.Colors.white,
              contentStyle: { backgroundColor: GlobalStyle.Colors.primaryDark },
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                title: 'All Categories',
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ title: 'About the Meal' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </GestureHandlerRootView>
  );
}
