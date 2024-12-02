import React from "react";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Main from "./SpecificItemScreen/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "./SpecificItemScreen/Contacts";
import AccInfo from "./screens/AccInfo";
import Items from "./screens/Items";
import AddItem from "./SpecificItemScreen/Additem";
import ModiyItem from "./SpecificItemScreen/Modiyitem";
import SpecificItem from "./SpecificItemScreen/SpecificItem";
import AboutScreen from "./SpecificItemScreen/About";
import 

const Stack = createStackNavigator();
function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Acc Info" component={AccInfo} />
      <Stack.Screen name="Items" component={Items} />
      <Stack.Screen name="Add Item" component={AddItem} />
      <Stack.Screen name="Modify Item" component={ModiyItem} />
      <Stack.Screen name="Specific Item" component={SpecificItem} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
