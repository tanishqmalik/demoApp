// import React, { use, useState } from 'react';
// // import { View, Text, TouchableOpacity } from 'react-native';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   Alert,
// } from "react-native";

// import { Ionicons, FontAwesome, AntDesign, Feather } from "@expo/vector-icons";


// // import { TextInput } from 'react-native-gesture-handler';
// // import { navigate } from '../node_modules/@react-navigation/routers/lib/module/CommonActions';

// export default function LoginScreen({navigation}) {

//     const [email, setEmail ] = useState("");
//     const [password, setPassword] = useState("");
//     const [rememberMe, setRememberMe] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);

//     const handleLogin = () =>{
//       if(!email.trim() || !password.trim()) {
//         Alert.alert("Missing Fields", "Please enter email and password.");
//         return;
//       }

//       navigation.replace("Home")
//     }


//   return (
//     <View style={{
//         flex:1,
//         justifyContent:'center',
//         padding:20,
//         backgroundColor: '#fff'
//     }}>

//         <Text style= {{
//             fontSize:32, 
//             fontWeight:'bold',
//             marginBottom:30,
//             textAlign:'center'
//         }}>
//         Welcome Back
//         </Text>

//             <TextInput
//                 placeholder="Email"
//                 value = {email}
//                 onChangeText={setEmail}
//                 style={styles.input}
//             />

//             <TextInput
//             placeholder='Password'
//             value={password}
//             onChangeText={setPassword}
//             style={styles.input}
            
//             />

//             <TouchableOpacity style={styles.button}>
//                 <Text style={styles.buttonText}>Login</Text>

//             </TouchableOpacity>


//             <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
//                 <Text style={styles.link}>
//                     Don't have an account? Register
//                 </Text>
//             </TouchableOpacity>
//     </View>
//   );
// }



// const styles = {
//   input: {
//     borderWidth:1,
//     borderColor:'#ccc',
//     padding:15,
//     borderRadius:8,
//     marginBottom:15
//   },
//   button: {
//     backgroundColor:'#4A90E2',
//     padding:15,
//     borderRadius:8,
//     marginTop:10
//   },
//   buttonText: {
//     color:'#fff',
//     textAlign:'center',
//     fontWeight:'bold'
//   },
//   link: {
//     marginTop:20,
//     textAlign:'center',
//     color:'#4A90E2'
//   }
// };

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { Feather, Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    navigation.replace("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={20}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.inner}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.logoRow}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.logoText}>
                Association of Innovative{"\n"}Educational Research
              </Text>
            </View>

            {/* LEFT ALIGNED TEXT */}
            <Text style={styles.title}>Get Started now</Text>
            <Text style={styles.subtitle}>
              Create an account or log in to explore about our app
            </Text>

            <View style={styles.tabWrapper}>
              <TouchableOpacity style={styles.activeTab}>
                <Text style={styles.activeTabText}>Log In</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.inactiveTab}
                onPress={() => navigation.navigate("Register")}
              >
                <Text style={styles.inactiveTabText}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="AssocExec@gmail.com"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordBox}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="*******"
                  placeholderTextColor="#9CA3AF"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Feather
                    name={showPassword ? "eye" : "eye-off"}
                    size={24}
                    color="#9A9A9A"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={styles.rememberRow}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <View style={styles.checkbox}>
                  {rememberMe && (
                    <Ionicons name="checkmark" size={16} color="#0B5E7A" />
                  )}
                </View>
                <Text style={styles.rememberText}>Remember me</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            <View style={styles.orRow}>
              <View style={styles.line} />
              <Text style={styles.orText}>Or login with</Text>
              <View style={styles.line} />
            </View>

            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.socialBtn}>
                <AntDesign name="google" size={28} color="#000" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialBtn}>
                <FontAwesome name="facebook" size={30} color="#1877F2" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialBtn}>
                <AntDesign name="apple1" size={28} color="#000" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialBtn}>
                <Feather name="smartphone" size={26} color="#000" />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },


  inner: {
  flexGrow: 1,
  paddingHorizontal: 26,
  paddingTop: 22,
  paddingBottom: 24,
  justifyContent: "center",
},

title: {
  textAlign: "left",
  fontSize: 31, // 👈 reduced from 34
  fontWeight: "800",
  color: "#111",
  marginBottom: 6,
},

subtitle: {
  textAlign: "left",
  fontSize: 14,
  color: "#747A84",
  marginBottom: 18,
},

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

logo: {
  width: 76,
  height: 76,
  marginRight: 10,
},

logoText: {
  flex: 1,
  fontSize: 15,
  lineHeight: 20,
  fontWeight: "700",
  color: "#0B5E7A",
},

  tabWrapper: {
    flexDirection: "row",
    backgroundColor: "#F1F1F4",
    borderRadius: 14,
    padding: 4,
    marginBottom: 22,
  },

activeTab: {
  flex: 1,
  backgroundColor: "#FFFFFF",
  borderRadius: 12,
  paddingVertical: 12, // 👈 reduced
  alignItems: "center",
},

inactiveTab: {
  flex: 1,
  paddingVertical: 12,
  alignItems: "center",
},

  inactiveTab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: "center",
  },

  activeTabText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  inactiveTabText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#8A8A8A",
  },

  inputGroup: {
    marginBottom: 16,
  },

label: {
  fontSize: 14,
  color: "#6F6F6F",
  marginBottom: 6,
  fontWeight: "500",
},

input: {
  height: 52, // 👈 reduced from 58
  borderWidth: 1.2,
  borderColor: "#D9DDE3",
  borderRadius: 15,
  paddingHorizontal: 16,
  fontSize: 15,
  color: "#111",
},

passwordBox: {
  height: 52,
  borderWidth: 1.2,
  borderColor: "#D9DDE3",
  borderRadius: 15,
  paddingHorizontal: 16,
  flexDirection: "row",
  alignItems: "center",
},

  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: "#111",
  },

  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 22,
  },

  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: "#2D2D2D",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  rememberText: {
    fontSize: 14,
    color: "#111",
  },

  forgotText: {
    fontSize: 14,
    color: "#3F7AF8",
    fontWeight: "500",
  },

loginButton: {
  height: 58, // 👈 reduced from 64
  borderRadius: 16,
  backgroundColor: "#0B5E7A",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 8,
  marginBottom: 18,
},

loginButtonText: {
  color: "#FFFFFF",
  fontSize: 17,
  fontWeight: "600",
},

  orRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D9D9D9",
  },

  orText: {
    marginHorizontal: 14,
    fontSize: 14,
    color: "#7C7C7C",
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

socialBtn: {
  width: 64,
  height: 64,
  borderWidth: 1.2,
  borderColor: "#D9D9D9",
  borderRadius: 14,
  alignItems: "center",
  justifyContent: "center",
},
});