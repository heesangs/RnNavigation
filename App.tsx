import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from './screen/Meals/CategoriesScreen';
import MealsOverviewScreen from './screen/Meals/MealsOverviewScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MealDetailScreen from './screen/Meals/MealDetailScreen';
import FavoritesScreen from './screen/Meals/FavoritesScreen';
import AllExpenses from './screen/Expenses/AllExpenses';
import RecentExpenses from './screen/Expenses/RecentExpenses';
import ManageExpenses from './screen/Expenses/ManageExpenses';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import GlobalStyle from './constants/GlobalStyle';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: GlobalStyle.Colors.primary },
        headerTintColor: GlobalStyle.Colors.accent,
        tabBarActiveTintColor: GlobalStyle.Colors.white,
        tabBarInactiveTintColor: GlobalStyle.Colors.accent,
        tabBarStyle: { backgroundColor: GlobalStyle.Colors.primary },
        tabBarLabelStyle: { fontWeight: 'bold' },
      }}>
      <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: '모든 카테고리',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="list" size={size || GlobalStyle.Spacing.iconSize} color={color || GlobalStyle.Colors.white} />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: '즐겨찾기',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="star" size={size || GlobalStyle.Spacing.iconSize} color={color || GlobalStyle.Colors.white} />,
        }}
      />
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: '전체 지출',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="receipt-long" size={size || GlobalStyle.Spacing.iconSize} color={color || GlobalStyle.Colors.white} />,
        }}
      />
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: '최근 지출',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="access-time" size={size || GlobalStyle.Spacing.iconSize} color={color || GlobalStyle.Colors.white} />,
        }}
      />
      <BottomTab.Screen
        name="ManageExpenses"
        component={ManageExpenses}
        options={{
          title: '지출 관리',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="add-circle-outline" size={size || GlobalStyle.Spacing.iconSize} color={color || GlobalStyle.Colors.white} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

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
        name="BottomTabs"
        component={BottomTabNavigator}
        options={{
          title: "Sang's 음식 앱",
          drawerIcon: ({ color, size }) => <MaterialIcons name="restaurant-menu" size={size || GlobalStyle.Spacing.iconSize} color={color || GlobalStyle.Colors.white} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "즐겨찾기",
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
