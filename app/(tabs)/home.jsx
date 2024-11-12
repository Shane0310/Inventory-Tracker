import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon library
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Image
            source={require('../../assets/icons/shane.jpg')} // Replace with your logo path
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hello, Shane!</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon} onPress={() => router.push('/notif')}>
            <Icon name="bell" size={25} color="#1f4068" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoCard}>
          <Icon name="cube-outline" size={30} color="#FFFFFF" />
          <Text style={styles.infoLabel}>Current Stock</Text>
          <Text style={styles.infoValue}>0.00</Text>
        </View>
        <View style={styles.infosCard}>
          <Icon name="cash" size={30} color="#FFFFFF" />
          <Text style={styles.infoLabel}>Stock Value</Text>
          <Text style={styles.infoValue}>$0.00</Text>
        </View>
      </View>

      <View style={styles.dashboard}>
        <Text style={styles.sectionTitle}>Dashboard</Text>
        <View style={styles.cardRow}>
          <Card title="Incoming New" icon="package-down" />
          <Card title="Outgoing New" icon="package-up"/>
        </View>
        <View style={styles.cardRow}>
          <Card title="Customers" icon="account"/>
          <Card title="Documents" icon="file-document"/>
        </View>
      </View>
      <Text style={styles.TextTitle}>Reports and Expenses</Text>
      <TouchableOpacity>
      <View style={styles.optionRow}>
          <View style={styles.rowLeft}>
            <Icon style={{padding:10}} name="file-chart" size={24} color="#87CEFA" />
            <Text style={styles.optionText}>Inventory Reports</Text>
          </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.optionRow}>
          <View style={styles.rowLeft}>
            <Icon style={{padding:10}} name="wallet" size={24} color="#87CEFA" />
            <Text style={styles.optionText}>Expenses</Text>
            <Text style={{ flex: 1, textAlign: 'left', fontWeight: 'bold', fontSize: 18 }}>$0.00</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Card = ({ title, icon, value }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Icon name={icon} size={30} color="#87CEFA" />
      <Text style={styles.cardTitle}>{title}</Text>
      {value && <Text style={styles.cardValue}>{value}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFF', // Primary color similar to the image
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    backgroundColor: '#ebebeb', // Accent color
    padding: 20,
    paddingTop: 43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: '5%',
  },
  logo: {
    width: 38,
    height: 38,
    borderRadius: 50,
  },
  headerTitle: {
    fontSize: 20,
    color: '#333333',
    fontWeight: 'bold',
    marginLeft: -110,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 15,
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  infoCard: {
    backgroundColor: '#6D51BE',
    flex: 1,
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  infosCard: {
    backgroundColor: '#6D51BE', //3e6cba
    flex: 1,
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  infoLabel: {
    color: '#FFFFFF',
    marginTop: 10,
    fontSize: 14,
  },
  infoValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  dashboard: {
    margin: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#333333', // Text color
    marginBottom: 10,
    fontWeight: 'bold',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5, // Adjusts spacing between cards
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333', // Text color
    marginTop: 5,
  },
  cardValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333', // Text color
    marginTop: 5,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 13,
    marginBottom: 10,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 0,
    marginBottom: 0,
  },
  TextTitle: {
    fontSize: 18,
    color: '#333333', // Text color
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8,
  }
});

export default Home;
