import { Stack } from 'expo-router';
import { CartProvider } from '../context/CartContext';

export default function Layout() {
  return (
    <CartProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#667eea',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Max and Sherry',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="menu"
          options={{
            title: 'Menu',
          }}
        />
        <Stack.Screen
          name="cart"
          options={{
            title: 'Your Cart',
          }}
        />
        <Stack.Screen
          name="checkout"
          options={{
            title: 'Checkout',
          }}
        />
        <Stack.Screen
          name="orders"
          options={{
            title: 'My Orders',
          }}
        />
      </Stack>
    </CartProvider>
  );
}
