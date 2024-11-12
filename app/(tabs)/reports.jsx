import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'; // Added Dimensions import
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { BarChart } from 'react-native-chart-kit';
import { useRouter } from 'expo-router';

const Reports = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={30} color="#333333" onPress={() => router.push('/home')}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Inventory Reports</Text>
      </View>

      {/* Reports Section */}
      <ScrollView>
        <View style={styles.reportContainer}>
          <ReportCard title="Expenses Summary"/>
          <ReportCard title="Transaction History Report" />
        </View>
        <View style={styles.reportContainer}>
          <ReportCard title="Purchases by Supplier Report"/>
          <ReportCard title="Sales by Customer Report" />
        </View>
        <View style={styles.reportContainer}>
          <ReportCard title="Store Wise Quantity"/>
          <ReportCard title="Month Sales Report" />
        </View>
      </ScrollView>
    </View>
  );
};

const ReportCard = ({ title }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardContent}>
        <Icon name="file-document" size={25} color="#7067CF" /> 
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      {/* Arrow icon positioned at the bottom right */}
      <Icon name="chevron-right" size={25} color="#058ED9" style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFF', // Primary color
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ebebeb', // Accent color
    paddingTop: 44,
    paddingVertical: 18,
    paddingHorizontal: '5%',
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 20,
    color: '#333333',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  reportContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 55,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
    height: '140%',
    width: '48%',
    position: 'relative', 
  },
  cardContent: {
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    color: '#333333', 
    fontWeight: 'bold',
    marginTop: 5, 
    textAlign: 'center',
  },
  arrowIcon: {
    position: 'absolute',
    bottom: 10, // Adjust as needed
    right: 10,  // Adjust as needed
  },
  overviewSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

export default Reports;
