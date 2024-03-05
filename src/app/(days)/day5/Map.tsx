import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import MapView,{ PROVIDER_GOOGLE} from 'react-native-maps';
import { Stack } from 'expo-router';
import apartments from '@assets/data/day5/apartments.json'
import CustomMarker from '@/components/day5/CustomMarker';
import ApartmentListItem from '@/components/day5/ApartmentListItem';
import BottomSheet, { BottomSheetFlatList,BottomSheetView ,useGestureEventsHandlersDefault} from '@gorhom/bottom-sheet';
import {Gesture, GestureHandlerRootView} from 'react-native-gesture-handler'
const Map = () => {
    const [selectedApartment, setSelectedApartment] = useState(null)
const snapPoints = useMemo(()=>['9%','50%','90%'],[])
const [mapRegion, setMapRegion] = useState({
  latitude:  21.0285,
  longitude: 105.8542,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
})
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>
        <Stack.Screen options={{headerShown:false}}/>
    <MapView style={styles.map} 
    provider={PROVIDER_GOOGLE}
    //  initialRegion={mapRegion}
     region={mapRegion}>
       {apartments.map(apartment =>(
        <CustomMarker 
          key={apartment.id} 
          apartment={apartment} 
          onPress={()=>setSelectedApartment(apartment)}
        />
       ))}
      </MapView>
      {selectedApartment && (
        <View style={{}}>
      <ApartmentListItem apartment={selectedApartment} 
      containerStyle={{ 
        position:'absolute',
        bottom: typeof snapPoints[0] === 'number' ? snapPoints[0] + 10 : 100,
        left: 10,
        right: 10,
        }}/>
        </View>
      )}
       <BottomSheet
        snapPoints={snapPoints}
        index={0}>
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.listTitle}>Over {apartments.length} places</Text>
          <BottomSheetFlatList
          contentContainerStyle={{gap:10, padding:10}}
          data={apartments} 
          renderItem={({item})=><ApartmentListItem apartment={item}/>}/>
        </BottomSheetView>
      </BottomSheet>
  </View>
  </GestureHandlerRootView>
  )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        width: '100%',
        height: '100%',
      },
      contentContainer: {
        flex: 1,
      },
      listTitle:{
        textAlign:'center',
        fontFamily:'InterBold',
        fontSize:16,
        marginVertical: 5,
        marginBottom:20
      }
})