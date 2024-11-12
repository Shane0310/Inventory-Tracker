import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const Profile = () => {
  const router = useRouter();
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/home')}>
          <Icon name="arrow-back" size={30} color="#5E548E" /> 
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text> 
      </View>
      
      <View style={styles.profileSection}>
        <Icon name="account-circle" size={100} color="#b375d9" />
        <Text style={styles.profileName}>Shane Caño</Text> 
      </View>

      <View style={styles.optionsSection}>
        <TouchableOpacity style={styles.optionRow}>
          <View style={styles.rowLeft}>
            <Icon name="person" size={24} color="#333399" />
            <Text style={styles.optionText}>Your Profile</Text> 
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <View style={styles.rowLeft}>
            <Icon name="settings" size={24} color="#333399" />
            <Text style={styles.optionText}>Settings</Text> 
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <View style={styles.rowLeft}>
            <Icon name="help" size={24} color="#333399" />
            <Text style={styles.optionText}>Help Center</Text> 
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <View style={styles.rowLeft}>
            <Icon name="privacy-tip" size={24} color="#333399" />
            <Text style={styles.optionText}>Privacy Policy</Text> 
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <View style={styles.rowLeft}>
            <Icon name="logout" size={24} color="#333399" />
            <Text style={styles.optionText}>Log out</Text> 
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    paddingTop: 45,
    paddingVertical: 18,
    paddingHorizontal: '5%',
  },
  headerTitle: {
    fontSize: 20,
    color: '#333333',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  profileSection: {
    marginTop: 50,
    alignItems: 'center',
    marginVertical: 30,
  },
  profileName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  optionsSection: {
    marginHorizontal: 20,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Profile;
