import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_KEY } from "@env";
import { TextInput } from 'react-native-web';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';



const HomeScreen = () => { 

    const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image 
        style ={{
            width: 100, height:100, resizeMode: 'contain'
        }}
            source={{
                
                uri: "https://links.papareact.com/gzs",
            }}
        />
        <GooglePlacesAutocomplete 
        placeholder='Your Location?'
        styles={{container: {
            flex:0,
        },
        textInput: {
            fontSize: 18,
        },}}

        minLength={2}

        onPress = {(data, details = null) => {
            dispatch(
                setOrigin({
                location: details.geometry.location,
                description: data.description,
            }));
            dispatch(setDestination(null))
        }}
        fetchDetails = {true}
        enablePoweredByContainer={false}
        query={{
            key: API_KEY,
            language:'en'
        }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
