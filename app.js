import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CatalogoScreen from './screens/CatalogoScreen'; 
import { createStackNavigator } from '@react-navigation/stack';
import DetalhesDoceScreen from './screens/DetalhesDoceScreen';
import LojaDeDocesScreen from './screens/LojaDeDocesScreen';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Telas fictícias
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao App!</Text>
    </View>
  );
}

function LojaDeDocesScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        🍭 Loja de Doces da Vovó
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 5 }}>
        Endereço: Rua das Delícias, 123 - Doceville
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 5 }}>
        Horário: Seg a Sáb, das 9h às 18h
      </Text>
      <Text style={{ fontSize: 16, marginTop: 15, marginBottom: 5 }}>
        Produtos mais populares:
      </Text>
      <Text>- Brigadeiro Gourmet</Text>
      <Text>- Beijinho de Coco</Text>
      <Text>- Bolo de Pote</Text>
      <Text>- Trufas Artesanais</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Doces') {
              iconName = 'cafe';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Doces" component={LojaDeDocesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

