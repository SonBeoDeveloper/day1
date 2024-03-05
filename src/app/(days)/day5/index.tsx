import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    
    <SafeAreaView edges={['bottom']} style={{flex:1}}>
        <Stack.Screen options={{title: 'Day 5: AirBNB'}}/>
      <Text>On animation screen</Text>
      <Link href={'/day5/Map'} asChild>
        <Button title='Go to map'/>
      </Link>
    </SafeAreaView>
  )
}

export default index