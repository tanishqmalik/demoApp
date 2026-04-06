// import { useEffect } from 'react';
// import { navigate } from '../node_modules/@react-navigation/routers/lib/module/CommonActions';
// import React from "react";
// import {View, Text} from 'react-native';
// import Style from '../node_modules/fbjs/lib/Style';
// import flex from '../node_modules/inline-style-prefixer/es/plugins/flex';




// export default function SplashScreen({navigation}){
//     useEffect(() => {
//         setTimeout(()=>{
//             navigation.replace('Login');
//         }, 1000)
//     }, []);
    

//     return (
//         <View style ={{
//             flex:1,
//             justifyContent:'center',
//             alignItems:'center',
//             backgroundColor: '#ffff'
//         }}>
//             dwjek
//         </View>
//     )
// }



import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 1500); // 1.5 sec better
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")} // 👈 your logo path
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 120,
    height: 120,
  },
});

