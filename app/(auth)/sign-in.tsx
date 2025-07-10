import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Button
        title="Sign In"
        onPress={() => {
          // Handle sign-in logic here
          router.push('/(auth)/signUp')
        }}
      />
    </View>
  )
}

export default SignIn