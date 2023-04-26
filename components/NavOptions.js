import { Text, View } from 'react-native'
import React from 'react'
import { FlatList, Image, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';



const data = [
    {
        id:"000",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen",
    },
    {
        id:"001",
        title:"Order food",
        image:"https://links.papareact.com/28w",
        screen:"EatScreen",
    }
];

const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
      <FlatList 
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
          <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-8 bg-gray-200 m-2 w-40`}
          onPress={() => navigation.navigate(item.screen)}>
              <View style={tw`${!origin && 'opacity-20'}`}>
                <Image 
                style = {{ width:120, height: 120, resizeMode: "contain"}}
                source={{uri:item.image}}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}> {item.title}</Text>
                <Icon
                name='arrowright'
                type='antdesign'
                color='white'
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                />
              </View>
          </TouchableOpacity>
      )}
      />
    );
  };

export default NavOptions;
