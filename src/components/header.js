 // Import libraries for making a component
 import React from 'react';
 import { Text, View } from 'react-native';

 // Make a component
 const Header =() => {
   const { textStyle, viewStyle } = styles;

   return (
       <View style={viewStyle}>
         <Text style={textStyle}>This is a header!</Text>
       </View>
       );
   };

 const styles = {
   textStyle: {
     fontSize: 20
   },
   viewStyle: {
     backgroundColor: '#f8f8f8'
   }
 };

 // Make the component available to the rest of the app
export default Header;
 