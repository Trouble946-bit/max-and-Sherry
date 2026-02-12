import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCart } from '../context/CartContext';

export default function Home() {
  const router = useRouter();
  const { getCartItemCount } = useCart();
  const cartCount = getCartItemCount();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Welcome to</Text>
          <Text style={styles.heroLogo}>Max and Sherry</Text>
          <Text style={styles.heroSubtitle}>Delicious Food Delivered to You</Text>
          <Text style={styles.trialBadge}>🎉 TRIAL VERSION</Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => router.push('/menu')}
          >
            <Text style={styles.actionEmoji}>🍕</Text>
            <Text style={styles.actionText}>Browse Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => router.push('/cart')}
          >
            <Text style={styles.actionEmoji}>🛒</Text>
            <Text style={styles.actionText}>Cart {cartCount > 0 && `(${cartCount})`}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => router.push('/orders')}
          >
            <Text style={styles.actionEmoji}>📦</Text>
            <Text style={styles.actionText}>My Orders</Text>
          </TouchableOpacity>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}>Why Choose Us?</Text>
          
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>⚡</Text>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Fast Delivery</Text>
              <Text style={styles.featureDesc}>Get your food in 45 minutes or less</Text>
            </View>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🍴</Text>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Fresh Ingredients</Text>
              <Text style={styles.featureDesc}>We use only the freshest ingredients</Text>
            </View>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>💳</Text>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Easy Payment</Text>
              <Text style={styles.featureDesc}>Multiple payment options available</Text>
            </View>
          </View>
        </View>

        {/* CTA Button */}
        <TouchableOpacity 
          style={styles.ctaButton}
          onPress={() => router.push('/menu')}
        >
          <Text style={styles.ctaButtonText}>Start Ordering Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
  },
  hero: {
    backgroundColor: '#667eea',
    padding: 40,
    alignItems: 'center',
    paddingTop: 20,
  },
  heroTitle: {
    fontSize: 20,
    color: '#ffffff',
    opacity: 0.9,
  },
  heroLogo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
    marginBottom: 15,
  },
  trialBadge: {
    backgroundColor: '#ffd700',
    color: '#333',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: -20,
    marginHorizontal: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  actionButton: {
    alignItems: 'center',
    padding: 15,
  },
  actionEmoji: {
    fontSize: 36,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  featuresContainer: {
    padding: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  featureIcon: {
    fontSize: 40,
    marginRight: 15,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 14,
    color: '#666',
  },
  ctaButton: {
    backgroundColor: '#667eea',
    padding: 18,
    borderRadius: 30,
    marginHorizontal: 20,
    marginVertical: 30,
    alignItems: 'center',
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
