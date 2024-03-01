import { StatusBar } from 'expo-status-bar';
import {  FlatList, StyleSheet, View } from 'react-native';
import DayListItem from '@components/DayListItem';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
const days= [...Array(24)].map((val,index)=>index+1);

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <FlatList 
        data={days}
        numColumns={2}
        columnWrapperStyle={styles.column}
        contentContainerStyle={styles.content}
        renderItem={({ item }) =>(
          <DayListItem day={item}/>
          )}
          // horizontal
      />
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  column:{gap:10},
  content:{gap: 10, padding:10},
  
});
