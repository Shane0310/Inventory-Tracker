import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

const CustomButton = ({ title, onPress, isLoading = false }) => {
  return (
    <TouchableOpacity 
      className="bg-indigo-700 w-full h-12 justify-center items-center rounded-md my-4" 
      onPress={onPress}
      disabled={isLoading} // Disable button when loading
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text className="text-white text-lg font-semibold">{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
