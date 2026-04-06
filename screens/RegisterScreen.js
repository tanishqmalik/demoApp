// import React, { useState } from 'react';
// import { View, Text, Touchable, TouchableOpacity } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

// export default function RegisterScreen({navigation}) {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');


//   return (
//     <View style={{
//         flex:1,
//         justifyContent:'center',
//         padding:20,
//         backgroundColor:'#fff'
//     }} >

//         <Text style={{
//             fontSize:32,
//             fontWeight:'bold',
//             marginBottom:30,
//             textAlign: 'center'
//         }}
//         >
//             Create Account
//         </Text>

//         <TextInput placeholder='Name' value={name} onChangeText={setName} style={styles.input}/> 
//         <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
//         <TextInput placeholder="Password"  value={password} onChangeText={setPassword} style={styles.input} />


//         <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>Register</Text>
//         </TouchableOpacity>


//               <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.link}>
//           Already have an account? Login
//         </Text>
//       </TouchableOpacity>
      
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



// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Alert,
//   SafeAreaView,
// } from "react-native";
// import { Feather, AntDesign } from "@expo/vector-icons";

// export default function RegisterScreen({ navigation }) {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [birthDate, setBirthDate] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleRegister = () => {
//     if (
//       !fullName.trim() ||
//       !email.trim() ||
//       !birthDate.trim() ||
//       !phone.trim() ||
//       !password.trim()
//     ) {
//       Alert.alert("Error", "Please fill all fields");
//       return;
//     }

//     navigation.replace("Home");
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.inner}>
//         <View style={styles.logoRow}>
//           <Image
//             source={require("../assets/logo.png")}
//             style={styles.logo}
//             resizeMode="contain"
//           />
//           <Text style={styles.logoText}>
//             Association of Innovative{"\n"}Educational Research
//           </Text>
//         </View>

//         <Text style={styles.title}>Sign up</Text>
//         <Text style={styles.subtitle}>Create an account to continue!</Text>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Full Name</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Association Exec"
//             placeholderTextColor="#9CA3AF"
//             value={fullName}
//             onChangeText={setFullName}
//             autoCapitalize="words"
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Email</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="abc@gmail.com"
//             placeholderTextColor="#9CA3AF"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Birth of date</Text>
//           <View style={styles.iconInput}>
//             <TextInput
//               style={styles.iconInputText}
//               placeholder="DD/MM/YYYY"
//               placeholderTextColor="#9CA3AF"
//               value={birthDate}
//               onChangeText={setBirthDate}
//               keyboardType="numbers-and-punctuation"
//             />
//             <AntDesign name="calendar" size={22} color="#A8B0B7" />
//           </View>
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Phone Number</Text>
//           <View style={styles.phoneBox}>
//             <View style={styles.flagBox}>
//               <Text style={styles.flag}>🇬🇧</Text>
//               <Feather name="chevron-down" size={18} color="#6F7780" />
//             </View>

//             <TextInput
//               style={styles.phoneInput}
//               placeholder="(+44) 20 1234 5629"
//               placeholderTextColor="#9CA3AF"
//               value={phone}
//               onChangeText={setPhone}
//               keyboardType="phone-pad"
//             />
//           </View>
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Set Password</Text>
//           <View style={styles.iconInput}>
//             <TextInput
//               style={styles.iconInputText}
//               placeholder="*******"
//               placeholderTextColor="#9CA3AF"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!showPassword}
//             />
//             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//               <Feather
//                 name={showPassword ? "eye" : "eye-off"}
//                 size={24}
//                 color="#A8B0B7"
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
//           <Text style={styles.registerButtonText}>Register</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.loginRow}
//           onPress={() => navigation.navigate("Login")}
//         >
//           <Text style={styles.loginText}>Already have an account? </Text>
//           <Text style={styles.loginLink}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },

//   inner: {
//     flex: 1,
//     paddingHorizontal: 24,
//     paddingTop: 18,
//     paddingBottom: 18,
//     justifyContent: "center",
//   },

//   logoRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 22,
//   },

//   logo: {
//     width: 84,
//     height: 84,
//     marginRight: 12,
//   },

//   logoText: {
//     flex: 1,
//     fontSize: 16,
//     lineHeight: 22,
//     fontWeight: "700",
//     color: "#0B5E7A",
//   },

//   title: {
//     fontSize: 34,
//     fontWeight: "800",
//     color: "#111",
//     marginBottom: 8,
//   },

//   subtitle: {
//     fontSize: 15,
//     color: "#747A84",
//     marginBottom: 26,
//   },

//   inputGroup: {
//     marginBottom: 16,
//   },

//   label: {
//     fontSize: 15,
//     color: "#6F6F6F",
//     marginBottom: 8,
//     fontWeight: "500",
//   },

//   input: {
//     height: 58,
//     borderWidth: 1.3,
//     borderColor: "#D9DDE3",
//     borderRadius: 16,
//     paddingHorizontal: 18,
//     fontSize: 16,
//     color: "#111",
//   },

//   iconInput: {
//     height: 58,
//     borderWidth: 1.3,
//     borderColor: "#D9DDE3",
//     borderRadius: 16,
//     paddingHorizontal: 18,
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   iconInputText: {
//     flex: 1,
//     fontSize: 16,
//     color: "#111",
//   },

//   phoneBox: {
//     height: 58,
//     borderWidth: 1.3,
//     borderColor: "#D9DDE3",
//     borderRadius: 16,
//     flexDirection: "row",
//     alignItems: "center",
//     overflow: "hidden",
//   },

//   flagBox: {
//     width: 106,
//     height: "100%",
//     borderRightWidth: 1.3,
//     borderRightColor: "#D9DDE3",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 4,
//   },

//   flag: {
//     fontSize: 28,
//   },

//   phoneInput: {
//     flex: 1,
//     height: "100%",
//     paddingHorizontal: 16,
//     fontSize: 16,
//     color: "#111",
//   },

//   registerButton: {
//     height: 64,
//     borderRadius: 18,
//     backgroundColor: "#0B5E7A",
//     borderWidth: 1.5,
//     borderColor: "#4B63FF",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 12,
//     marginBottom: 26,
//   },

//   registerButtonText: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     fontWeight: "600",
//   },

//   loginRow: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   loginText: {
//     fontSize: 15,
//     color: "#6F6F6F",
//   },

//   loginLink: {
//     fontSize: 15,
//     color: "#3F7AF8",
//     fontWeight: "600",
//   },
// });









// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Alert,
//   SafeAreaView,
// } from "react-native";
// import { Feather, AntDesign } from "@expo/vector-icons";

// export default function RegisterScreen({ navigation }) {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [birthDate, setBirthDate] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleRegister = () => {
//     if (
//       !fullName.trim() ||
//       !email.trim() ||
//       !birthDate.trim() ||
//       !phone.trim() ||
//       !password.trim()
//     ) {
//       Alert.alert("Error", "Please fill all fields");
//       return;
//     }

//     navigation.replace("Home");
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.inner}>
//         <View style={styles.logoRow}>
//           <Image
//             source={require("../assets/logo.png")}
//             style={styles.logo}
//             resizeMode="contain"
//           />
//           <Text style={styles.logoText}>
//             Association of Innovative{"\n"}Educational Research
//           </Text>
//         </View>

//         <Text style={styles.title}>Sign up</Text>
//         <Text style={styles.subtitle}>Create an account to continue!</Text>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Full Name</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Association Exec"
//             placeholderTextColor="#9CA3AF"
//             value={fullName}
//             onChangeText={setFullName}
//             autoCapitalize="words"
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Email</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="AssocExec@gmail.com"
//             placeholderTextColor="#9CA3AF"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Birth of date</Text>
//           <View style={styles.iconInput}>
//             <TextInput
//               style={styles.iconInputText}
//               placeholder="18/03/2024"
//               placeholderTextColor="#9CA3AF"
//               value={birthDate}
//               onChangeText={setBirthDate}
//               keyboardType="numbers-and-punctuation"
//             />
//             <AntDesign name="calendar" size={20} color="#A8B0B7" />
//           </View>
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Phone Number</Text>
//           <View style={styles.phoneBox}>
//             <View style={styles.flagBox}>
//               <Text style={styles.flag}>🇬🇧</Text>
//               <Feather name="chevron-down" size={16} color="#6F7780" />
//             </View>

//             <TextInput
//               style={styles.phoneInput}
//               placeholder="(+44) 20 1234 5629"
//               placeholderTextColor="#9CA3AF"
//               value={phone}
//               onChangeText={setPhone}
//               keyboardType="phone-pad"
//             />
//           </View>
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Set Password</Text>
//           <View style={styles.iconInput}>
//             <TextInput
//               style={styles.iconInputText}
//               placeholder="*******"
//               placeholderTextColor="#9CA3AF"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!showPassword}
//             />
//             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//               <Feather
//                 name={showPassword ? "eye" : "eye-off"}
//                 size={22}
//                 color="#A8B0B7"
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
//           <Text style={styles.registerButtonText}>Register</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.loginRow}
//           onPress={() => navigation.navigate("Login")}
//         >
//           <Text style={styles.loginText}>Already have an account? </Text>
//           <Text style={styles.loginLink}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },

//   inner: {
//     flex: 1,
//     paddingHorizontal: 24,
//     paddingTop: 10,
//     paddingBottom: 12,
//     justifyContent: "center",
//   },

//   logoRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 14,
//   },

//   logo: {
//     width: 76,
//     height: 76,
//     marginRight: 10,
//   },

//   logoText: {
//     flex: 1,
//     fontSize: 15,
//     lineHeight: 20,
//     fontWeight: "700",
//     color: "#0B5E7A",
//   },

//   title: {
//     fontSize: 31,
//     fontWeight: "800",
//     color: "#111",
//     marginBottom: 6,
//   },

//   subtitle: {
//     fontSize: 14,
//     color: "#747A84",
//     marginBottom: 18,
//   },

//   inputGroup: {
//     marginBottom: 12,
//   },

//   label: {
//     fontSize: 14,
//     color: "#6F6F6F",
//     marginBottom: 6,
//     fontWeight: "500",
//   },

//   input: {
//     height: 52,
//     borderWidth: 1.2,
//     borderColor: "#D9DDE3",
//     borderRadius: 15,
//     paddingHorizontal: 16,
//     fontSize: 15,
//     color: "#111",
//   },

//   iconInput: {
//     height: 52,
//     borderWidth: 1.2,
//     borderColor: "#D9DDE3",
//     borderRadius: 15,
//     paddingHorizontal: 16,
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   iconInputText: {
//     flex: 1,
//     fontSize: 15,
//     color: "#111",
//   },

//   phoneBox: {
//     height: 52,
//     borderWidth: 1.2,
//     borderColor: "#D9DDE3",
//     borderRadius: 15,
//     flexDirection: "row",
//     alignItems: "center",
//     overflow: "hidden",
//   },

//   flagBox: {
//     width: 98,
//     height: "100%",
//     borderRightWidth: 1.2,
//     borderRightColor: "#D9DDE3",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   flag: {
//     fontSize: 24,
//     marginRight: 4,
//   },

//   phoneInput: {
//     flex: 1,
//     height: "100%",
//     paddingHorizontal: 14,
//     fontSize: 15,
//     color: "#111",
//   },

//   registerButton: {
//     height: 58,
//     borderRadius: 16,
//     backgroundColor: "#0B5E7A",
//     borderWidth: 1.4,
//     borderColor: "#4B63FF",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 8,
//     marginBottom: 18,
//   },

//   registerButtonText: {
//     color: "#FFFFFF",
//     fontSize: 17,
//     fontWeight: "600",
//   },

//   loginRow: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   loginText: {
//     fontSize: 14,
//     color: "#6F6F6F",
//   },

//   loginLink: {
//     fontSize: 14,
//     color: "#3F7AF8",
//     fontWeight: "600",
//   },
// });








// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Alert,
//   SafeAreaView,
//   Platform,
// } from "react-native";
// import { Feather, AntDesign } from "@expo/vector-icons";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { CountryPicker } from "react-native-country-codes-picker";
// import { Platform } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// export default function RegisterScreen({ navigation }) {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [birthDate, setBirthDate] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   // const [showDatePicker, setShowDatePicker] = useState(false);

//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [dateObj, setDateObj] = useState(new Date());

//   const [showCountryPicker, setShowCountryPicker] = useState(false);
//   const [countryCode, setCountryCode] = useState("+91");
//   const [countryFlag, setCountryFlag] = useState("🇮🇳");

// const formatDate = (date) => {
//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// };

// const onChangeDate = (event, selectedDate) => {
//   setShowDatePicker(false);

//   if (selectedDate) {
//     setDateObj(selectedDate);
//     setBirthDate(formatDate(selectedDate));
//   }
// };
  

//   const handleConfirmDate = (date) => {
//   setBirthDate(formatDate(date));
//   setShowDatePicker(false);
// };

// const handleCancelDate = () => {
//   setShowDatePicker(false);
// };

//   // const onChangeDate = (event, selectedDate) => {
//   //   if (Platform.OS === "android") {
//   //     setShowDatePicker(false);
//   //   }

//   //   if (selectedDate) {
//   //     setDateObj(selectedDate);
//   //     setBirthDate(formatDate(selectedDate));
//   //   }
//   // };

//   const handleRegister = () => {
//     if (
//       !fullName.trim() ||
//       !email.trim() ||
//       !birthDate.trim() ||
//       !phone.trim() ||
//       !password.trim()
//     ) {
//       Alert.alert("Error", "Please fill all fields");
//       return;
//     }

//     navigation.replace("Home");
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.inner}>
//         <View style={styles.logoRow}>
//           <Image
//             source={require("../assets/logo.png")}
//             style={styles.logo}
//             resizeMode="contain"
//           />
//           <Text style={styles.logoText}>
//             Association of Innovative{"\n"}Educational Research
//           </Text>
//         </View>

//         <Text style={styles.title}>Sign up</Text>
//         <Text style={styles.subtitle}>Create an account to continue!</Text>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Full Name</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Association Exec"
//             placeholderTextColor="#9CA3AF"
//             value={fullName}
//             onChangeText={setFullName}
//             autoCapitalize="words"
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Email</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="AssocExec@gmail.com"
//             placeholderTextColor="#9CA3AF"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//         </View>

// <View style={styles.inputGroup}>
//   <Text style={styles.label}>Birth date</Text>

//   {Platform.OS === "web" ? (
//     <TextInput
//       style={styles.input}
//       placeholder="DD/MM/YYYY"
//       placeholderTextColor="#9CA3AF"
//       value={birthDate}
//       onChangeText={setBirthDate}
//       keyboardType="numbers-and-punctuation"
//     />
//   ) : (
//     <>
//       <TouchableOpacity
//         activeOpacity={0.8}
//         style={styles.iconInput}
//         onPress={() => setShowDatePicker(true)}
//       >
//         <Text
//           style={[
//             styles.iconInputText,
//             !birthDate && { color: "#9CA3AF" },
//           ]}
//         >
//           {birthDate || "18/03/2024"}
//         </Text>
//         <AntDesign name="calendar" size={20} color="#A8B0B7" />
//       </TouchableOpacity>

//       {showDatePicker && (
//         <DateTimePicker
//           value={dateObj}
//           mode="date"
//           display="default"
//           maximumDate={new Date()}
//           onChange={onChangeDate}
//         />
//       )}
//     </>
//   )}
// </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Phone Number</Text>
//           <View style={styles.phoneBox}>
//             <TouchableOpacity
//               style={styles.flagBox}
//               onPress={() => setShowCountryPicker(true)}
//             >
//               <Text style={styles.flag}>{countryFlag}</Text>
//               <Text style={styles.callingCode}>{countryCode}</Text>
//               <Feather name="chevron-down" size={16} color="#6F7780" />
//             </TouchableOpacity>

//             <TextInput
//               style={styles.phoneInput}
//               placeholder="Enter phone number"
//               placeholderTextColor="#9CA3AF"
//               value={phone}
//               onChangeText={setPhone}
//               keyboardType="phone-pad"
//             />
//           </View>
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Set Password</Text>
//           <View style={styles.iconInput}>
//             <TextInput
//               style={styles.passwordInput}
//               placeholder="*******"
//               placeholderTextColor="#9CA3AF"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!showPassword}
//             />
//             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//               <Feather
//                 name={showPassword ? "eye" : "eye-off"}
//                 size={22}
//                 color="#A8B0B7"
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
//           <Text style={styles.registerButtonText}>Register</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.loginRow}
//           onPress={() => navigation.navigate("Login")}
//         >
//           <Text style={styles.loginText}>Already have an account? </Text>
//           <Text style={styles.loginLink}>Login</Text>
//         </TouchableOpacity>

// <DateTimePickerModal
//   isVisible={showDatePicker}
//   mode="date"
//   maximumDate={new Date()}
//   onConfirm={handleConfirmDate}
//   onCancel={handleCancelDate}
// />

//         <CountryPicker
//           show={showCountryPicker}
//           pickerButtonOnPress={(item) => {
//             setCountryFlag(item.flag);
//             setCountryCode(item.dial_code);
//             setShowCountryPicker(false);
//           }}
//           onBackdropPress={() => setShowCountryPicker(false)}
//           style={{
//             modal: {
//               height: 500,
//             },
//             textInput: {
//               height: 50,
//               borderRadius: 12,
//               borderColor: "#D9DDE3",
//               borderWidth: 1,
//               paddingHorizontal: 12,
//             },
//             countryButtonStyles: {
//               height: 52,
//             },
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },

//   inner: {
//     flex: 1,
//     paddingHorizontal: 24,
//     paddingTop: 10,
//     paddingBottom: 12,
//     justifyContent: "center",
//   },

//   logoRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 14,
//   },

//   logo: {
//     width: 76,
//     height: 76,
//     marginRight: 10,
//   },

//   logoText: {
//     flex: 1,
//     fontSize: 15,
//     lineHeight: 20,
//     fontWeight: "700",
//     color: "#0B5E7A",
//   },

//   title: {
//     fontSize: 31,
//     fontWeight: "800",
//     color: "#111",
//     marginBottom: 6,
//   },

//   subtitle: {
//     fontSize: 14,
//     color: "#747A84",
//     marginBottom: 18,
//   },

//   inputGroup: {
//     marginBottom: 12,
//   },

//   label: {
//     fontSize: 14,
//     color: "#6F6F6F",
//     marginBottom: 6,
//     fontWeight: "500",
//   },

//   input: {
//     height: 52,
//     borderWidth: 1.2,
//     borderColor: "#D9DDE3",
//     borderRadius: 15,
//     paddingHorizontal: 16,
//     fontSize: 15,
//     color: "#111",
//   },

//   iconInput: {
//     height: 52,
//     borderWidth: 1.2,
//     borderColor: "#D9DDE3",
//     borderRadius: 15,
//     paddingHorizontal: 16,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },

//   iconInputText: {
//     fontSize: 15,
//     color: "#111",
//   },

//   passwordInput: {
//     flex: 1,
//     fontSize: 15,
//     color: "#111",
//   },

//   phoneBox: {
//     height: 52,
//     borderWidth: 1.2,
//     borderColor: "#D9DDE3",
//     borderRadius: 15,
//     flexDirection: "row",
//     alignItems: "center",
//     overflow: "hidden",
//   },

//   flagBox: {
//     minWidth: 120,
//     height: "100%",
//     borderRightWidth: 1.2,
//     borderRightColor: "#D9DDE3",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingHorizontal: 8,
//   },

//   flag: {
//     fontSize: 20,
//     marginRight: 6,
//   },

//   callingCode: {
//     fontSize: 15,
//     color: "#111",
//     marginRight: 4,
//   },

//   phoneInput: {
//     flex: 1,
//     height: "100%",
//     paddingHorizontal: 14,
//     fontSize: 15,
//     color: "#111",
//   },

//   registerButton: {
//     height: 58,
//     borderRadius: 16,
//     backgroundColor: "#0B5E7A",
//     borderWidth: 1.4,
//     borderColor: "#4B63FF",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 8,
//     marginBottom: 18,
//   },

//   registerButtonText: {
//     color: "#FFFFFF",
//     fontSize: 17,
//     fontWeight: "600",
//   },

//   loginRow: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   loginText: {
//     fontSize: 14,
//     color: "#6F6F6F",
//   },

//   loginLink: {
//     fontSize: 14,
//     color: "#3F7AF8",
//     fontWeight: "600",
//   },
// });











// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Alert,
//   SafeAreaView,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from "react-native";
// import { Feather } from "@expo/vector-icons";

// const countries = [
//   { name: "India", code: "IN", dial: "+91", flag: "🇮🇳" },
//   { name: "United Kingdom", code: "GB", dial: "+44", flag: "🇬🇧" },
//   { name: "United States", code: "US", dial: "+1", flag: "🇺🇸" },
//   { name: "Canada", code: "CA", dial: "+1", flag: "🇨🇦" },
//   { name: "Australia", code: "AU", dial: "+61", flag: "🇦🇺" },
//   { name: "Germany", code: "DE", dial: "+49", flag: "🇩🇪" },
//   { name: "France", code: "FR", dial: "+33", flag: "🇫🇷" },
//   { name: "Italy", code: "IT", dial: "+39", flag: "🇮🇹" },
//   { name: "Spain", code: "ES", dial: "+34", flag: "🇪🇸" },
//   { name: "UAE", code: "AE", dial: "+971", flag: "🇦🇪" },
//   { name: "Singapore", code: "SG", dial: "+65", flag: "🇸🇬" },
//   { name: "Japan", code: "JP", dial: "+81", flag: "🇯🇵" },
// ];

// export default function RegisterScreen({ navigation }) {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [birthDate, setBirthDate] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const [countryModalVisible, setCountryModalVisible] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(countries[0]);

//   const handleRegister = () => {
//     if (
//       !fullName.trim() ||
//       !email.trim() ||
//       !birthDate.trim() ||
//       !phone.trim() ||
//       !password.trim()
//     ) {
//       Alert.alert("Error", "Please fill all fields");
//       return;
//     }

//     navigation.replace("Home");
//   };

//   const selectCountry = (country) => {
//     setSelectedCountry(country);
//     setCountryModalVisible(false);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//   <KeyboardAvoidingView
//     style={{ flex: 1 }}
//     behavior={Platform.OS === "ios" ? "padding" : "height"}
//     keyboardVerticalOffset={20}
//   >
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.inner}>
//         <View style={styles.logoRow}>
//           <Image
//             source={require("../assets/logo.png")}
//             style={styles.logo}
//             resizeMode="contain"
//           />
//           <Text style={styles.logoText}>
//             Association of Innovative{"\n"}Educational Research
//           </Text>
//         </View>

//         <Text style={styles.title}>Sign up</Text>
//         <Text style={styles.subtitle}>Create an account to continue!</Text>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Full Name</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Association Exec"
//             placeholderTextColor="#9CA3AF"
//             value={fullName}
//             onChangeText={setFullName}
//             autoCapitalize="words"
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Email</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="AssocExec@gmail.com"
//             placeholderTextColor="#9CA3AF"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Birth date</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="DD/MM/YYYY"
//             placeholderTextColor="#9CA3AF"
//             value={birthDate}
//             onChangeText={setBirthDate}
//             keyboardType="numbers-and-punctuation"
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Phone Number</Text>
//           <View style={styles.phoneBox}>
//             <TouchableOpacity
//               style={styles.flagBox}
//               onPress={() => setCountryModalVisible(true)}
//             >
//               <Text style={styles.flag}>{selectedCountry.flag}</Text>
//               <Text style={styles.callingCode}>{selectedCountry.dial}</Text>
//               <Feather name="chevron-down" size={16} color="#6F7780" />
//             </TouchableOpacity>

//             <TextInput
//               style={styles.phoneInput}
//               placeholder="Enter phone number"
//               placeholderTextColor="#9CA3AF"
//               value={phone}
//               onChangeText={setPhone}
//               keyboardType="phone-pad"
//             />
//           </View>
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Set Password</Text>
//           <View style={styles.iconInput}>
//             <TextInput
//               style={styles.passwordInput}
//               placeholder="*******"
//               placeholderTextColor="#9CA3AF"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!showPassword}
//             />
//             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//               <Feather
//                 name={showPassword ? "eye" : "eye-off"}
//                 size={22}
//                 color="#A8B0B7"
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
//           <Text style={styles.registerButtonText}>Register</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.loginRow}
//           onPress={() => navigation.navigate("Login")}
//         >
//           <Text style={styles.loginText}>Already have an account? </Text>
//           <Text style={styles.loginLink}>Login</Text>
//         </TouchableOpacity>
//       </View>
//                   </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>


//       <Modal
//         visible={countryModalVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={() => setCountryModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Select Country</Text>

//             <FlatList
//               data={countries}
//               keyExtractor={(item) => item.code}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.countryItem}
//                   onPress={() => selectCountry(item)}
//                 >
//                   <Text style={styles.countryText}>
//                     {item.flag}  {item.name} ({item.dial})
//                   </Text>
//                 </TouchableOpacity>
//               )}
//             />

//             <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setCountryModalVisible(false)}
//             >
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
        
//       </Modal>
      
      
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },

//   inner: {
//     flex: 1,
//     paddingHorizontal: 24,
//     paddingTop: 10,
//     paddingBottom: 12,
//     justifyContent: "center",
//   },

//   logoRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 14,
//   },

//   logo: {
//     width: 76,
//     height: 76,
//     marginRight: 10,
//   },

//   logoText: {
//     flex: 1,
//     fontSize: 15,
//     lineHeight: 20,
//     fontWeight: "700",
//     color: "#0B5E7A",
//   },

//   title: {
//     fontSize: 31,
//     fontWeight: "800",
//     color: "#111",
//     marginBottom: 6,
//   },

//   subtitle: {
//     fontSize: 14,
//     color: "#747A84",
//     marginBottom: 18,
//   },

//   inputGroup: {
//     marginBottom: 12,
//   },

//   label: {
//     fontSize: 14,
//     color: "#6F6F6F",
//     marginBottom: 6,
//     fontWeight: "500",
//   },

//   input: {
//     height: 52,
//     borderWidth: 1.2,
//     borderColor: "#D9DDE3",
//     borderRadius: 15,
//     paddingHorizontal: 16,
//     fontSize: 15,
//     color: "#111",
//   },

//   iconInput: {
//     height: 52,
//     borderWidth: 1.2,
//     borderColor: "#D9DDE3",
//     borderRadius: 15,
//     paddingHorizontal: 16,
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   passwordInput: {
//     flex: 1,
//     fontSize: 15,
//     color: "#111",
//   },

//   phoneBox: {
//     height: 52,
//     borderWidth: 1.2,
//     borderColor: "#D9DDE3",
//     borderRadius: 15,
//     flexDirection: "row",
//     alignItems: "center",
//     overflow: "hidden",
//   },

//   flagBox: {
//     minWidth: 120,
//     height: "100%",
//     borderRightWidth: 1.2,
//     borderRightColor: "#D9DDE3",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingHorizontal: 8,
//   },

//   flag: {
//     fontSize: 20,
//     marginRight: 6,
//   },

//   callingCode: {
//     fontSize: 15,
//     color: "#111",
//     marginRight: 4,
//   },

//   phoneInput: {
//     flex: 1,
//     height: "100%",
//     paddingHorizontal: 14,
//     fontSize: 15,
//     color: "#111",
//   },

//   registerButton: {
//     height: 58,
//     borderRadius: 16,
//     backgroundColor: "#0B5E7A",
//     borderWidth: 1.4,
//     borderColor: "#4B63FF",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 8,
//     marginBottom: 18,
//   },

//   registerButtonText: {
//     color: "#FFFFFF",
//     fontSize: 17,
//     fontWeight: "600",
//   },

//   loginRow: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   loginText: {
//     fontSize: 14,
//     color: "#6F6F6F",
//   },

//   loginLink: {
//     fontSize: 14,
//     color: "#3F7AF8",
//     fontWeight: "600",
//   },

//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.35)",
//     justifyContent: "flex-end",
//   },

//   modalContent: {
//     backgroundColor: "#FFFFFF",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 20,
//     maxHeight: "65%",
//   },

//   modalTitle: {
//     fontSize: 18,
//     fontWeight: "700",
//     marginBottom: 16,
//     color: "#111",
//   },

//   countryItem: {
//     paddingVertical: 14,
//     borderBottomWidth: 1,
//     borderBottomColor: "#EEEEEE",
//   },

//   countryText: {
//     fontSize: 15,
//     color: "#111",
//   },

//   closeButton: {
//     marginTop: 16,
//     backgroundColor: "#0B5E7A",
//     borderRadius: 12,
//     paddingVertical: 14,
//     alignItems: "center",
//   },

//   closeButtonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });







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
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const countries = [
  { name: "India", code: "IN", dial: "+91", flag: "🇮🇳" },
  { name: "United Kingdom", code: "GB", dial: "+44", flag: "🇬🇧" },
  { name: "United States", code: "US", dial: "+1", flag: "🇺🇸" },
  { name: "Canada", code: "CA", dial: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "AU", dial: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "DE", dial: "+49", flag: "🇩🇪" },
  { name: "France", code: "FR", dial: "+33", flag: "🇫🇷" },
  { name: "Italy", code: "IT", dial: "+39", flag: "🇮🇹" },
  { name: "Spain", code: "ES", dial: "+34", flag: "🇪🇸" },
  { name: "UAE", code: "AE", dial: "+971", flag: "🇦🇪" },
  { name: "Singapore", code: "SG", dial: "+65", flag: "🇸🇬" },
  { name: "Japan", code: "JP", dial: "+81", flag: "🇯🇵" },
];

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleRegister = () => {
    if (
      !fullName.trim() ||
      !email.trim() ||
      !birthDate.trim() ||
      !phone.trim() ||
      !password.trim()
    ) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    navigation.replace("Home");
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setCountryModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
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

            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.subtitle}>Create an account to continue!</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Association Exec"
                placeholderTextColor="#9CA3AF"
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
              />
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
              <Text style={styles.label}>Birth date</Text>
              <TextInput
                style={styles.input}
                placeholder="DD/MM/YYYY"
                placeholderTextColor="#9CA3AF"
                value={birthDate}
                onChangeText={setBirthDate}
                keyboardType="numbers-and-punctuation"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number</Text>
              <View style={styles.phoneBox}>
                <TouchableOpacity
                  style={styles.flagBox}
                  onPress={() => setCountryModalVisible(true)}
                >
                  <Text style={styles.flag}>{selectedCountry.flag}</Text>
                  <Text style={styles.callingCode}>{selectedCountry.dial}</Text>
                  <Feather name="chevron-down" size={16} color="#6F7780" />
                </TouchableOpacity>

                <TextInput
                  style={styles.phoneInput}
                  placeholder="Enter phone number"
                  placeholderTextColor="#9CA3AF"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Set Password</Text>
              <View style={styles.iconInput}>
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
                    size={22}
                    color="#A8B0B7"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}
            >
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginRow}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.loginText}>Already have an account? </Text>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <Modal
        visible={countryModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCountryModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Country</Text>

            <FlatList
              data={countries}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => selectCountry(item)}
                >
                  <Text style={styles.countryText}>
                    {item.flag} {item.name} ({item.dial})
                  </Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setCountryModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  keyboardContainer: {
    flex: 1,
  },

  inner: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 24,
    justifyContent: "center",
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
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

  title: {
    fontSize: 31,
    fontWeight: "800",
    color: "#111",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: "#747A84",
    marginBottom: 18,
  },

  inputGroup: {
    marginBottom: 12,
  },

  label: {
    fontSize: 14,
    color: "#6F6F6F",
    marginBottom: 6,
    fontWeight: "500",
  },

  input: {
    height: 52,
    borderWidth: 1.2,
    borderColor: "#D9DDE3",
    borderRadius: 15,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#111",
  },

  iconInput: {
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
    fontSize: 15,
    color: "#111",
  },

  phoneBox: {
    height: 52,
    borderWidth: 1.2,
    borderColor: "#D9DDE3",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },

  flagBox: {
    minWidth: 120,
    height: "100%",
    borderRightWidth: 1.2,
    borderRightColor: "#D9DDE3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },

  flag: {
    fontSize: 20,
    marginRight: 6,
  },

  callingCode: {
    fontSize: 15,
    color: "#111",
    marginRight: 4,
  },

  phoneInput: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#111",
  },

  registerButton: {
    height: 58,
    borderRadius: 16,
    backgroundColor: "#0B5E7A",
    borderWidth: 1.4,
    borderColor: "#4B63FF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 18,
  },

  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    fontSize: 14,
    color: "#6F6F6F",
  },

  loginLink: {
    fontSize: 14,
    color: "#3F7AF8",
    fontWeight: "600",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "flex-end",
  },

  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: "65%",
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
    color: "#111",
  },

  countryItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },

  countryText: {
    fontSize: 15,
    color: "#111",
  },

  closeButton: {
    marginTop: 16,
    backgroundColor: "#0B5E7A",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },

  closeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});