import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const index = () => {
  return (
    <View>
        <Stack.Screen options={{title: 'Day 2: Onboarding'}}/>
      <Text>On detail screen</Text>
      <Link href={'/day2/onboarding'} asChild>
        <Button title='Go to onboarding'/>
      </Link>
    </View>
  )
}

export default index