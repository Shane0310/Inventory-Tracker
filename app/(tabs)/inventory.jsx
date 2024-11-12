import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter, useLocalSearchParams } from 'expo-router';

const Inventory = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false); // For dots-vertical modal
  const [storeModalVisible, setStoreModalVisible] = useState(false); // For store modal
  const [cardModalVisible, setCardModalVisible] = useState(false); // For card edit/delete modal
  const { itemName, barcode, description, quantity } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('home')}>
          <Icon name="arrow-left" size={30} color="#333333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Products</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="folder" size={25} color="#333333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconSpacing}>
            <Icon name="magnify" size={25} color="#333333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name="dots-vertical" size={25} color="#333333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Quantity and Total */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>QTY: {quantity || 0}</Text>
        <Text style={styles.summaryText}>TOTAL: ${quantity * 10 || 0}.00</Text>
      </View>

      {/* Displaying Added Items with Dots Menu */}
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View style={styles.leftSection}>
            <Text style={styles.itemName}>{itemName || 'Nike'}</Text>
            <Text style={styles.itemDescription}>{description || 'shoes'}</Text>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.itemPrice}>0.00</Text>
            <Text style={styles.itemSubText}>
              <Text style={{ color: '#00CED1' }}>$0.00</Text>/
              <Text style={{ color: '#FF6347' }}>$0.00</Text>
            </Text>
          </View>
          <TouchableOpacity onPress={() => setCardModalVisible(true)}>
            <Icon name="dots-vertical" size={25} color="#333333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for Card Edit/Delete */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={cardModalVisible}
        onRequestClose={() => setCardModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setCardModalVisible(false)}>
          <View style={styles.cardModalContent}>
            <TouchableOpacity style={styles.modalOption} onPress={() => console.log('Edit pressed')}>
              <Icon name="pencil" size={25} color="#4CAF50" />
              <Text style={styles.modalOptionText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={() => console.log('Delete pressed')}>
              <Icon name="delete" size={25} color="#FF6347" />
              <Text style={styles.modalOptionText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => router.push('addButton')}>
        <Icon name="plus" size={30} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Modal for Store Options */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={storeModalVisible}
        onRequestClose={() => setStoreModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setStoreModalVisible(false)}>
          <View style={styles.storeModalContent}>
            <TouchableOpacity style={styles.modalOption}>
              <Text style={styles.storeModalText}>All Stores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Text style={styles.storeModalText}>Main Store</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Modal for Export Options */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalOption}>
              <Icon name="file-excel" size={25} color="#4CAF50" />
              <Text style={styles.modalOptionText}>Export to Excel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Icon name="file-pdf-box" size={25} color="#FF6347" />
              <Text style={styles.modalOptionText}>Export to PDF</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
    paddingTop: 40,
    paddingLeft: 18,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    color: '#333333',
    fontWeight: 'bold',
    marginLeft: '-30%',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    backgroundColor: '#CEC2FF', //E6E6FA
  },
  summaryText: {
    fontSize: 16,
    color: '#333333',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 3,
    marginHorizontal: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'column',
  },
  rightSection: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  itemDescription: {
    fontSize: 14,
    color: '#777777',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  itemSubText: {
    fontSize: 14,
    color: '#777777',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4379F2',
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  cardModalContent: {
    width: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalOptionText: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 10,
  },
  storeModalContent: {
    width: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  storeModalText: {
    fontSize: 18,
    color: '#333333',
    paddingVertical: 10,
  },
  iconSpacing: {
    marginLeft: 20,
  },
});

export default Inventory;
