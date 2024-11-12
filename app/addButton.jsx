import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useRouter } from 'expo-router'; // Assuming you're using Expo Router

const addButton = () => {
  const router = useRouter();

  // State for form fields
  const [itemName, setItemName] = useState('');
  const [barcode, setBarcode] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);

  // Function to handle submit and pass data to the inventory screen
  const handleSubmit = () => {
    router.push({
      pathname: 'inventory',
      params: {
        itemName,
        barcode,
        description,
        quantity,
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('inventory')}>
          <Ionicons name="arrow-back" size={24} color="#333333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Item</Text>
        <TouchableOpacity style={styles.headerIcon} onPress={handleSubmit}>
          <Ionicons name="checkmark" size={24} color="#333333" />
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter item name"
          value={itemName}
          onChangeText={setItemName}
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Quantity</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={quantity.toString()}
          onChangeText={setQuantity}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFF',
  },
  header: {
    backgroundColor: '#ebebeb',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 20,
    color: '#333333',
    fontWeight: 'bold',
    marginLeft: '-40%',
  },
  headerIcon: {
    marginLeft: 15,
  },
  form: {
    backgroundColor: '#EEE8FB',
    padding: 25,
    borderRadius: 8,
    margin: 15,
    height: '50%',
  },
  label: {
    fontSize: 16,
    padding: 5,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
});

export default addButton;
