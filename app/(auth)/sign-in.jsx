import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Logo */}
      <Image 
        source={require('../../assets/images/logo.png')} // Ensure this path is correct
        style={styles.logo} 
      />
      <Text style={styles.appName}>Inventory Tracker</Text>
      
      {/* Login Text */}
      <Text style={styles.loginText}>Login to your Account</Text>
      
      {/* Email Input */}
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address" 
        autoCapitalize="none"
      />

      {/* Password Input with Show/Hide Icon */}
      <View style={styles.passwordContainer}>
        <TextInput 
          style={styles.passwordInput} 
          placeholder="Password" 
          secureTextEntry={!showPassword} 
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image 
            source={
              showPassword 
                ? require('../../assets/icons/hide.png') 
                : require('../../assets/icons/show.png')
            }
            style={styles.eyeIcon} 
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password Link */}
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={() => router.push('/home')}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* Social Media Login */}
      <Text style={styles.orText}>Or sign in with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image 
            source={require('../../assets/icons/google.png')}
            style={styles.socialIcon} 
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            source={require('../../assets/icons/facebook.png')}
            style={styles.socialIcon} 
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            source={require('../../assets/icons/twitter.png')}
            style={styles.socialIcon} 
          />
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <TouchableOpacity onPress={() => router.push('/sign-up')}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

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
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d1d57',
    marginBottom: 20,
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#E6E6FA',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#E6E6FA',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  passwordInput: {
    flex: 1,
    
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#333333',
  },
  forgotPasswordText: {
    color: '#b375d9',
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  signInButton: {
    backgroundColor: '#333399',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: '#333333',
    marginVertical: 5,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  signupText: {
    color: '#333333',
  },
  signupLink: {
    color: '#b375d9',
    fontWeight: 'bold',
  },
});


// import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import { Text, View, Image, TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";
// import FormField from "../../FormField"; 
// import CustomButton from "../../CustomButton"; 

// export default function App() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <View className="flex-1 bg-[#FFFAFF] px-6 justify-center items-center">
//       <StatusBar style="auto" />
      
//       <Image
//         source={require("../../assets/images/logo.png")} // Ensure this path is correct
//         className="w-[300px] h-[100px] mb-4"
//         resizeMode="contain"
//       />
//       <Text className="text-2xl font-bold text-[#2d1d57] mb-5">Inventory Tracker</Text>
      
//       <Text className="text-lg font-semibold text-[#333333] mb-5">Login to your Account</Text>
      
//       <FormField
//         title="Email"
//         value={email}
//         placeholder="Email"
//         handleChangeText={(text) => setEmail(text)}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />

//       <FormField
//         title="Password"
//         value={password}
//         placeholder="Password"
//         handleChangeText={(text) => setPassword(text)}
//         secureTextEntry
//       />

//       <TouchableOpacity>
//         <Text className="text-[#b375d9] mt-2 self-end">Forgot Password?</Text>
//       </TouchableOpacity>

//       <CustomButton
//         title="Sign In"
//         onPress={() => router.push("/home")}
//         buttonStyle="bg-[#333399] w-full h-12 justify-center items-center rounded-lg mt-5 mb-5"
//         textStyle="text-white text-lg font-bold"
//       />

//       <Text className="text-[#333333] mb-2">Or sign in with</Text>
//       <View className="flex-row justify-between w-2/3 my-3">
//         <TouchableOpacity>
//           <Image
//             source={require("../../assets/icons/google.png")}
//             className="w-10 h-10"
//           />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Image
//             source={require("../../assets/icons/facebook.png")}
//             className="w-10 h-10"
//           />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Image
//             source={require("../../assets/icons/twitter.png")}
//             className="w-10 h-10"
//           />
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity onPress={() => router.push("/sign-up")}>
//         <Text className="text-[#333333]">
//           Don't have an account? <Text className="text-[#b375d9] font-bold">Sign up</Text>
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
