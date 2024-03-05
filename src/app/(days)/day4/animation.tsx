import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';
import { Stack } from 'expo-router';
const animation = () => {
    const animation = useRef(null);
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center',backgroundColor:'black'}}>
      <Stack.Screen options={{headerShown: 'false'}}/>
        <LottieView
        autoPlay
        ref={animation}
        style={{
          width: '80%',
          height: 200
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../../../assets/lottie/Animation - 1709485279771.json')}
      />
     
    </View>
  )
}

export default animation

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      buttonContainer: {
        paddingTop: 20,
      },
})