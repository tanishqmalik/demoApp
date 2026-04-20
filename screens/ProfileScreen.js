// import React from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from "react-native";
// import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// export default function ProfileScreen({ navigation }) {
//   const handleLogout = () => {
//     navigation.reset({
//       index: 0,
//       routes: [{ name: "Login" }],
//     });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         <View style={styles.topHeader}>
//           <View style={styles.topRow}>
//             <TouchableOpacity onPress={() => navigation.goBack()}>
//               <Feather name="arrow-left" size={26} color="#1F2230" />
//             </TouchableOpacity>

//             <View style={styles.logoRow}>
//               <Image
//                 source={require("../assets/logo.png")}
//                 style={styles.logo}
//                 resizeMode="contain"
//               />
//               <Text style={styles.logoText}>
//                 Association of Innovative{"\n"}Educational Research
//               </Text>
//             </View>

//             <View style={{ width: 26 }} />
//           </View>
//         </View>

//         <View style={styles.content}>
//           <View style={styles.avatarWrap}>
//             <Image
//               source={{
//                 uri: "https://randomuser.me/api/portraits/men/32.jpg",
//               }}
//               style={styles.avatar}
//             />
//             <TouchableOpacity style={styles.editCircle}>
//              <Feather name="edit-2" size={16} color="#FFFFFF" />
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.name}>Association Exec</Text>

//           <View style={styles.infoList}>
//             <InfoRow label="Phone" value="(+44) 20 1234 5689" />
//             <InfoRow label="Gender" value="Male" />
//             <InfoRow label="Birthday" value="12/01/1997" />
//             <InfoRow label="Email" value="AssocExec@gmail.com" />
//           </View>

//           <TouchableOpacity style={styles.editBtn}>
//             <Feather name="edit-2" size={20} color="#FFFFFF" />
//             <Text style={styles.editBtnText}>Edit Profile</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
//             <Feather name="log-out" size={18} color="#555555" />
//             <Text style={styles.logoutText}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>

//       <View style={styles.bottomNav}>
//         <TouchableOpacity
//           style={styles.bottomNavItem}
//           onPress={() => navigation.navigate("Home")}
//         >
//           <Ionicons name="home-outline" size={24} color="#A5A0B2" />
//           <Text style={styles.bottomNavText}>Home</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.bottomNavItem}
//           onPress={() => navigation.navigate("Courses")}
//         >
//           <MaterialCommunityIcons name="school-outline" size={24} color="#A5A0B2" />
//           <Text style={styles.bottomNavText}>Courses</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.bottomNavItem}>
//           <Feather name="user" size={22} color="#151515" />
//           <Text style={styles.bottomNavTextActive}>Profile</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.bottomNavItem}>
//           <Feather name="more-horizontal" size={22} color="#A5A0B2" />
//           <Text style={styles.bottomNavText}>More</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// function InfoRow({ label, value }) {
//   return (
//     <View style={styles.infoRow}>
//       <View style={styles.infoTextWrap}>
//         <Text style={styles.infoLabel}>{label} :</Text>
//         <Text style={styles.infoValue}>{value}</Text>
//       </View>
//       <TouchableOpacity>
//         <Feather name="copy" size={18} color="#343645" />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },

//   scrollContent: {
//     paddingBottom: 120,
//   },

//   topHeader: {
//     backgroundColor: "#FFFFFF",
//     paddingHorizontal: 22,
//     paddingTop: 16,
//     paddingBottom: 10,
//   },

//   topRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },

//   logoRow: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     marginLeft: 14,
//   },

//   logo: {
//     width: 70,
//     height: 70,
//     marginRight: 10,
//   },

//   logoText: {
//     flex: 1,
//     fontSize: 15,
//     lineHeight: 20,
//     fontWeight: "700",
//     color: "#0B5E7A",
//   },

//   content: {
//     paddingHorizontal: 24,
//     paddingTop: 20,
//   },

//   avatarWrap: {
//     alignSelf: "center",
//     position: "relative",
//     marginBottom: 20,
//   },

//   avatar: {
//   width: 160,
//   height: 160,
//   borderRadius: 80,
//     backgroundColor: "#E9E9EE",
//   },

//   editCircle: {
//     position: "absolute",
//     right: 6,
//     top: 10,
//   width: 44,
//   height: 44,
//   borderRadius: 22,
//     backgroundColor: "#43B7F1",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   name: {
//     textAlign: "center",
//   fontSize: 22,
//   fontWeight: "700",
//   marginBottom: 24,
//     color: "#2D3040",
//     // marginBottom: 34,
//   },

//   infoList: {
//     marginBottom: 24,
//   },

//   infoRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//    marginBottom: 16,
//   },

//   infoTextWrap: {
//     flexDirection: "row",
//     alignItems: "center",
//     flexWrap: "wrap",
//     flex: 1,
//     marginRight: 12,
//   },

//   infoLabel: {
//   fontSize: 14,
//   color: "#73759A",
//     marginRight: 8,
//     fontWeight: "500",
//   },

//   infoValue: {
//   fontSize: 14,
//   color: "#2E3140",
//     fontWeight: "500",
//   },

//   editBtn: {
//     height: 54,
//     borderRadius: 16,
//     backgroundColor: "#045D82",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 22,
//   },

//   editBtnText: {
//     color: "#FFFFFF",
//     fontSize: 15,
//     fontWeight: "700",
//     marginLeft: 12,
//   },

//   logoutBtn: {
//     height: 54,
//     borderRadius: 16,
//     backgroundColor: "#D9D9D9",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   logoutText: {
//     color: "#555555",
//     fontSize: 15,
//     fontWeight: "700",
//     marginLeft: 12,
//   },

//   bottomNav: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 80,
//     backgroundColor: "#FFFFFF",
//     borderTopWidth: 1,
//     borderTopColor: "#EAEAEA",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     paddingBottom: 10,
//   },

//   bottomNavItem: {
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   bottomNavTextActive: {
//     marginTop: 6,
//     fontSize: 13,
//     fontWeight: "700",
//     color: "#151515",
//   },

//   bottomNavText: {
//     marginTop: 6,
//     fontSize: 13,
//     fontWeight: "600",
//     color: "#A5A0B2",
//   },
// });

import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {
  const [profile, setProfile] = useState({
    name: "Association Exec",
    phoneCode: "(+44)",
    phone: "20 1234 5689",
    gender: "Male",
    birthday: "12/01/1997",
    email: "AssocExec@gmail.com",
  });

  const [editVisible, setEditVisible] = useState(false);

  const [editName, setEditName] = useState(profile.name);
  const [editPhoneCode, setEditPhoneCode] = useState(profile.phoneCode);
  const [editPhone, setEditPhone] = useState(profile.phone);
  const [editGender, setEditGender] = useState(profile.gender);
  const [editBirthday, setEditBirthday] = useState(profile.birthday);
  const [editEmail, setEditEmail] = useState(profile.email);

  const openEditModal = () => {
    setEditName(profile.name);
    setEditPhoneCode(profile.phoneCode);
    setEditPhone(profile.phone);
    setEditGender(profile.gender);
    setEditBirthday(profile.birthday);
    setEditEmail(profile.email);
    setEditVisible(true);
  };

  const handleSave = () => {
    setProfile({
      name: editName,
      phoneCode: editPhoneCode,
      phone: editPhone,
      gender: editGender,
      birthday: editBirthday,
      email: editEmail,
    });
    setEditVisible(false);
  };

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.topHeader}>
          <View style={styles.topRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={24} color="#1F2230" />
            </TouchableOpacity>

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

            <View style={{ width: 24 }} />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.avatarWrap}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
              style={styles.avatar}
            />

            <TouchableOpacity style={styles.editCircle} onPress={openEditModal}>
              <Feather name="edit-2" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <Text style={styles.name}>{profile.name}</Text>

          <View style={styles.infoList}>
            <InfoRow label="Phone" value={`${profile.phoneCode} ${profile.phone}`} />
            <InfoRow label="Gender" value={profile.gender} />
            <InfoRow label="Birthday" value={profile.birthday} />
            <InfoRow label="Email" value={profile.email} />
          </View>

          <TouchableOpacity style={styles.editBtn} onPress={openEditModal}>
            <Feather name="edit-2" size={18} color="#FFFFFF" />
            <Text style={styles.editBtnText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Feather name="log-out" size={18} color="#555555" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="home-outline" size={24} color="#A5A0B2" />
          <Text style={styles.bottomNavText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => navigation.navigate("Courses")}
        >
          <MaterialCommunityIcons name="school-outline" size={24} color="#A5A0B2" />
          <Text style={styles.bottomNavText}>Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>
          <Feather name="user" size={20} color="#151515" />
          <Text style={styles.bottomNavTextActive}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>
          <Feather name="more-horizontal" size={22} color="#A5A0B2" />
          <Text style={styles.bottomNavText}>More</Text>
        </TouchableOpacity>
      </View>

      {/* <Modal
        visible={editVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setEditVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <KeyboardAvoidingView
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={{ flex: 1 }}
></KeyboardAvoidingView>
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 20 }}
    keyboardShouldPersistTaps="handled"
  ></ScrollView>
          <View style={styles.sheet}>
            <View style={styles.dragHandle} />

            <Text style={styles.sheetTitle}>Edit Profile</Text>

            <View style={styles.sheetField}>
              <Text style={styles.sheetLabel}>Name</Text>
              <TextInput
                style={styles.sheetInput}
                value={editName}
                onChangeText={setEditName}
                placeholder="Enter name"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <View style={styles.sheetField}>
              <Text style={styles.sheetLabel}>Phone Number</Text>
              <View style={styles.phoneRow}>
                <TextInput
                  style={styles.phoneCodeInput}
                  value={editPhoneCode}
                  onChangeText={setEditPhoneCode}
                  placeholder="(+44)"
                  placeholderTextColor="#9CA3AF"
                />
                <TextInput
                  style={styles.phoneInput}
                  value={editPhone}
                  onChangeText={setEditPhone}
                  placeholder="20 1234 5689"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            <View style={styles.sheetField}>
              <Text style={styles.sheetLabel}>Gender</Text>
              <TextInput
                style={styles.sheetInput}
                value={editGender}
                onChangeText={setEditGender}
                placeholder="Gender"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <View style={styles.sheetField}>
              <Text style={styles.sheetLabel}>Birthday</Text>
              <TextInput
                style={styles.sheetInput}
                value={editBirthday}
                onChangeText={setEditBirthday}
                placeholder="12/01/1997"
                placeholderTextColor="#9CA3AF"
                keyboardType="numbers-and-punctuation"
              />
            </View>

            <View style={styles.sheetField}>
              <Text style={styles.sheetLabel}>Email</Text>
              <TextInput
                style={styles.sheetInput}
                value={editEmail}
                onChangeText={setEditEmail}
                placeholder="Enter email"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.sheetBtnRow}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setEditVisible(false)}
              >
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                <Text style={styles.saveBtnText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> */}

      <Modal
  visible={editVisible}
  transparent
  animationType="slide"
  onRequestClose={() => setEditVisible(false)}
>
  <View style={styles.modalOverlay}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ width: "100%" }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: "flex-end", flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.sheet}>
          <View style={styles.dragHandle} />

          <Text style={styles.sheetTitle}>Edit Profile</Text>

          <View style={styles.sheetField}>
            <Text style={styles.sheetLabel}>Name</Text>
            <TextInput
              style={styles.sheetInput}
              value={editName}
              onChangeText={setEditName}
              placeholder="Enter name"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={styles.sheetField}>
            <Text style={styles.sheetLabel}>Phone Number</Text>
            <View style={styles.phoneRow}>
              <TextInput
                style={styles.phoneCodeInput}
                value={editPhoneCode}
                onChangeText={setEditPhoneCode}
                placeholder="(+44)"
                placeholderTextColor="#9CA3AF"
              />
              <TextInput
                style={styles.phoneInput}
                value={editPhone}
                onChangeText={setEditPhone}
                placeholder="20 1234 5689"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={styles.sheetField}>
            <Text style={styles.sheetLabel}>Gender</Text>
            <TextInput
              style={styles.sheetInput}
              value={editGender}
              onChangeText={setEditGender}
              placeholder="Gender"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={styles.sheetField}>
            <Text style={styles.sheetLabel}>Birthday</Text>
            <TextInput
              style={styles.sheetInput}
              value={editBirthday}
              onChangeText={setEditBirthday}
              placeholder="12/01/1997"
              placeholderTextColor="#9CA3AF"
              keyboardType="numbers-and-punctuation"
            />
          </View>

          <View style={styles.sheetField}>
            <Text style={styles.sheetLabel}>Email</Text>
            <TextInput
              style={styles.sheetInput}
              value={editEmail}
              onChangeText={setEditEmail}
              placeholder="Enter email"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.sheetBtnRow}>
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => setEditVisible(false)}
            >
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
              <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </View>
</Modal>
    </SafeAreaView>
  );
}

function InfoRow({ label, value }) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoTextWrap}>
        <Text style={styles.infoLabel}>{label} :</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
      <TouchableOpacity>
        <Feather name="copy" size={18} color="#343645" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContent: {
    paddingBottom: 120,
  },

  topHeader: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 10,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logoRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 14,
  },

  logo: {
    width: 70,
    height: 70,
    marginRight: 10,
  },

  logoText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "700",
    color: "#0B5E7A",
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  avatarWrap: {
    alignSelf: "center",
    position: "relative",
    marginBottom: 18,
  },

  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#E9E9EE",
  },

  editCircle: {
    position: "absolute",
    right: 4,
    top: 8,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#43B7F1",
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    color: "#2D3040",
    marginBottom: 24,
  },

  infoList: {
    marginBottom: 20,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  infoTextWrap: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    flex: 1,
    marginRight: 12,
  },

  infoLabel: {
    fontSize: 14,
    color: "#73759A",
    marginRight: 8,
    fontWeight: "500",
  },

  infoValue: {
    fontSize: 14,
    color: "#2E3140",
    fontWeight: "500",
  },

  editBtn: {
    height: 54,
    borderRadius: 16,
    backgroundColor: "#045D82",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  editBtnText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 10,
  },

  logoutBtn: {
    height: 54,
    borderRadius: 16,
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  logoutText: {
    color: "#555555",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 10,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EAEAEA",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 10,
  },

  bottomNavItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  bottomNavTextActive: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "700",
    color: "#151515",
  },

  bottomNavText: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "600",
    color: "#A5A0B2",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(18, 21, 35, 0.45)",
    justifyContent: "flex-end",
  },

  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 26,
  },

  dragHandle: {
    alignSelf: "center",
    width: 108,
    height: 6,
    borderRadius: 99,
    backgroundColor: "#D0D0D0",
    marginBottom: 20,
  },

  sheetTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
    color: "#2A2A2A",
    marginBottom: 20,
  },

  sheetField: {
    marginBottom: 16,
  },

  sheetLabel: {
    fontSize: 14,
    color: "#73759A",
    marginBottom: 8,
    fontWeight: "500",
  },

  sheetInput: {
    height: 56,
    borderWidth: 1.2,
    borderColor: "#D9DDE3",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#2E3140",
  },

  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  phoneCodeInput: {
    width: 90,
    height: 56,
    borderWidth: 1.2,
    borderColor: "#D9DDE3",
    borderRadius: 14,
    paddingHorizontal: 12,
    fontSize: 15,
    color: "#2E3140",
  },

  phoneInput: {
    flex: 1,
    height: 56,
    borderWidth: 1.2,
    borderColor: "#D9DDE3",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#2E3140",
  },

  sheetBtnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },

  cancelBtn: {
    width: "46%",
    height: 56,
    borderRadius: 16,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
  },

  cancelBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#555555",
  },

  saveBtn: {
    width: "46%",
    height: 56,
    borderRadius: 16,
    backgroundColor: "#045D82",
    alignItems: "center",
    justifyContent: "center",
  },

  saveBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});