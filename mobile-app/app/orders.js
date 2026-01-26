import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { getCustomerOrders } from '../services/api';

export default function Orders() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearchOrders = async () => {
    if (!phoneNumber.trim()) {
      alert('Please enter your phone number');
      return;
    }

    try {
      setLoading(true);
      const response = await getCustomerOrders(phoneNumber.trim());
      if (response.success) {
        setOrders(response.data);
        setSearched(true);
      }
    } catch (error) {
      alert('Failed to load orders. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#FFA500';
      case 'preparing': return '#4169E1';
      case 'delivered': return '#32CD32';
      case 'cancelled': return '#FF4444';
      default: return '#666';
    }
  };

  const renderOrder = ({ item }) => (
    <View style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderNumber}>Order #{item.orderNumber}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{item.status.toUpperCase()}</Text>
        </View>
      </View>
      
      <View style={styles.orderDetails}>
        <Text style={styles.orderLabel}>Customer:</Text>
        <Text style={styles.orderValue}>{item.customerName}</Text>
      </View>
      
      <View style={styles.orderDetails}>
        <Text style={styles.orderLabel}>Total:</Text>
        <Text style={styles.orderValue}>${item.totalAmount.toFixed(2)}</Text>
      </View>
      
      <View style={styles.orderDetails}>
        <Text style={styles.orderLabel}>Items:</Text>
        <Text style={styles.orderValue}>{item.items.length} items</Text>
      </View>
      
      <View style={styles.orderDetails}>
        <Text style={styles.orderLabel}>Delivery:</Text>
        <Text style={styles.orderValue}>{item.deliveryAddress}</Text>
      </View>
      
      <Text style={styles.orderDate}>
        Placed: {new Date(item.createdAt).toLocaleString()}
      </Text>
      
      {item.status === 'pending' && (
        <Text style={styles.estimatedTime}>
          ⏰ Estimated delivery: {new Date(item.estimatedDelivery).toLocaleTimeString()}
        </Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchLabel}>Enter your phone number to view orders:</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <TouchableOpacity 
          style={styles.searchButton}
          onPress={handleSearchOrders}
          disabled={loading}
        >
          <Text style={styles.searchButtonText}>
            {loading ? 'Searching...' : 'Search Orders'}
          </Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#667eea" />
        </View>
      )}

      {!loading && searched && orders.length === 0 && (
        <View style={styles.centerContainer}>
          <Text style={styles.emptyEmoji}>📦</Text>
          <Text style={styles.emptyText}>No orders found</Text>
          <Text style={styles.emptySubtext}>
            Orders will appear here after you place them
          </Text>
        </View>
      )}

      {!loading && orders.length > 0 && (
        <FlatList
          data={orders}
          renderItem={renderOrder}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  searchButton: {
    backgroundColor: '#667eea',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyEmoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  listContent: {
    padding: 15,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderLabel: {
    fontSize: 14,
    color: '#666',
  },
  orderValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  orderDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 10,
  },
  estimatedTime: {
    fontSize: 14,
    color: '#667eea',
    fontWeight: '600',
    marginTop: 8,
  },
});
