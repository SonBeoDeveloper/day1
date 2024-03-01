import { SplashScreen, Stack } from "expo-router";
import {AmaticSC_700Bold,AmaticSC_400Regular} from '@expo-google-fonts/amatic-sc'
import { useEffect } from 'react';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function RootLayout(){
    const [fontsLoaded, fontError] =useFonts({
        Inter: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold
       });
     useEffect(()=>{
       if ( fontsLoaded || fontError) {
         SplashScreen.hideAsync()
        }
     },[fontsLoaded || fontError])
      if(!fontsLoaded && !fontError){
       return null
      }
    return <Stack screenOptions={{headerStyle: {backgroundColor: 'red'}}}>
        <Stack.Screen name="index" options={{title: 'Devembers'}}/>
    </Stack>
}