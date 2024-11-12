import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants"; // Ensure icons are correctly imported

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {/* Label */}
      <Text className="text-base text-gray-800 font-medium">{title}</Text>
      
      {/* Input Container */}
      <View className="w-full h-14 px-4 bg-white rounded-xl border-2 border-gray-300 flex flex-row items-center">
        
        {/* TextInput Field */}
        <TextInput
          className="flex-1 text-black font-regular text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        
        {/* Show/Hide Password Icon */}
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6 tint-gray-600"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
