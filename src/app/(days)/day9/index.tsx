import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    
    <SafeAreaView edges={['bottom']} style={{flex:1}}>
        <Stack.Screen options={{title: 'Day 9: Auth'}}/>
      <Text>On animation screen</Text>
      <Link href={'/day9/Protected'} asChild>
        <Button title='Go to protedted page'/>
      </Link>
    </SafeAreaView>
  )
}

export default index