import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require('../../assets/images/logo.png')}
        style={styles.logo} 
      />
      <Text style={styles.appName}>Inventory Tracker</Text>
      
      {/* Login Text */}
      <Text style={styles.loginText}>Create Account</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Username" 
        keyboardType="default" 
      />

      {/* Email Input */}
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address" 
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

      {/* Confirm Password Input with Show/Hide Icon */}
      <View style={styles.passwordContainer}>
        <TextInput 
          style={styles.passwordInput} 
          placeholder="Confirm Password" 
          secureTextEntry={!showConfirmPassword} 
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Image 
            source={
              showConfirmPassword 
                ? require('../../assets/icons/hide.png') 
                : require('../../assets/icons/show.png')
            }
            style={styles.eyeIcon} 
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password Button */}
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signInButton} onPress={() => router.push('/sign-in')}>
        <Text style={styles.signInText}>Sign Up</Text>
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
      <TouchableOpacity onPress={() => router.push('/sign-in')}>
        <Text style={styles.signupText}>
          Already have an account? <Text style={styles.signupLink}>Sign in</Text>
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
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 300,
    height: 100,
    marginTop: 30,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d1d57',
    marginBottom: 20
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10
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
    marginVertical: 10
  },
  passwordInput: {
    flex: 1
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
    marginVertical: 10
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  orText: {
    color: '#333333',
    marginVertical: 10
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: 10
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },
  signupText: {
    color: '#333333'
  },
  signupLink: {
    color: '#b375d9',
    fontWeight: 'bold'
  }
});
