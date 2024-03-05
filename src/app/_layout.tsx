import { SplashScreen, Stack } from "expo-router";
import {AmaticSC_700Bold,AmaticSC_400Regular,Inter} from '@expo-google-fonts/amatic-sc'
import { useEffect } from 'react';
import { useFonts, Inter_400Regular,Inter_700Bold,Inter_600SemiBold, Inter_900Black } from '@expo-google-fonts/inter';

export default function RootLayout(){
    const [fontsLoaded, fontError] =useFonts({
        Inter: Inter_400Regular,
        InterBold: Inter_700Bold,
        InterBlack: Inter_900Black,
        InterSemi: Inter_600SemiBold,
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