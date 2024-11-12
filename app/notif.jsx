import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const Notif = () => {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/home')}>
          <Icon name="arrow-back" size={30} color="#333333" /> 
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <View style={styles.textTitle}> 
        <Text style={styles.title}>No new notifications</Text>
        <Text style={styles.subtitle}>When you start getting notifications, they'll appear here.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFF'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ebebeb', 
    paddingVertical: 20,
    paddingHorizontal: '5%',
  },
  headerTitle: {
    fontSize: 20,
    color: '#333333',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  textTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: '70%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#333333',
    margin: 5,
    marginTop: -10,
    padding: 18,
  },
});

export default Notif;
