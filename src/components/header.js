 // Import libraries for making a component
 import React from 'react';
 import { Text, View } from 'react-native';

 // Make a component
 const Header =(props) => {
   const { textStyle, viewStyle } = styles;

   return (
       <View style={viewStyle}>
         <Text style={textStyle}>{props.headerText}</Text>
       </View>
       );
   };

 const styles = {
   textStyle: {
     fontSize: 20
   },
   viewStyle: {
     backgroundColor: '#f8f8f8',
     justifyContent: 'center',
     alignItems: 'center',
     height: 60,
     paddingTop: 15,
     shadowColor: '#000',
     shadowOffset: {
       width: 0,
       height: 4
     },
     shadowOpacity: 0.2,
     elevation: 2,
     position: 'relative'
   }
 };

 // Make the component available to the rest of the app
export default Header;
 