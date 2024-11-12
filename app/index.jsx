import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.appName}>Inventory Tracker</Text>
      <Image 
        source={require('../assets/images/logo.png')} // Ensure this path is correct
        style={styles.logo} 
      />
      <Text style={styles.appDescription}>
        Effortlessly manage and track your inventory and expenses.
      </Text>
      
      <Text style={styles.loginText}>Count on Us for Easy Tracking!</Text>

      <TouchableOpacity style={styles.signInButton} onPress={() => router.push('/sign-in')}>
        <Text style={styles.signInText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 180,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2d1d57',
    marginTop: 20,
    marginBottom: 10,
  },
  appDescription: { 
    fontSize: 24,
    color: '#333333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  loginText: {
    fontSize: 18,
    color: '#333333',
  },
  signInButton: {
    backgroundColor: '#333399', // b375d9
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 15,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { Text, View, Image } from 'react-native';
// import { useRouter } from 'expo-router';
// import CustomButton from '../components/CustomButton';


// export default function App() {
//   const router = useRouter();

//   return (
//     <View className="flex-1 bg-gray-100 px-5 justify-center items-center">
//       <Text className="text-3xl font-bold text-indigo-900 mt-5 mb-2">Inventory Tracker</Text>
//       <Image 
//         source={require('../assets/images/logo.png')} 
//         className="w-72 h-44 mb-7" 
//         resizeMode="contain"
//       />
//       <Text className="text-xl font-bold text-gray-800 text-center mb-12">
//         Effortlessly manage and track your inventory and expenses.
//       </Text>
      
//       <Text className="text-lg text-gray-800 mb-4">Count on Us for Easy Tracking!</Text>

//       <CustomButton 
//         title="Get Started" 
//         onPress={() => router.push('/sign-in')}
//         isLoading={loadingState}
//       />
//     <StatusBar backgroundColor='#161622'style='light'></StatusBar>
//     </View>
//   );
// }
