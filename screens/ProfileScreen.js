import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {
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
              <Feather name="arrow-left" size={26} color="#1F2230" />
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

            <View style={{ width: 26 }} />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.avatarWrap}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/32.jpg",
              }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editCircle}>
             <Feather name="edit-2" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <Text style={styles.name}>Association Exec</Text>

          <View style={styles.infoList}>
            <InfoRow label="Phone" value="(+44) 20 1234 5689" />
            <InfoRow label="Gender" value="Male" />
            <InfoRow label="Birthday" value="12/01/1997" />
            <InfoRow label="Email" value="AssocExec@gmail.com" />
          </View>

          <TouchableOpacity style={styles.editBtn}>
            <Feather name="edit-2" size={20} color="#FFFFFF" />
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
          <Feather name="user" size={22} color="#151515" />
          <Text style={styles.bottomNavTextActive}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>
          <Feather name="more-horizontal" size={22} color="#A5A0B2" />
          <Text style={styles.bottomNavText}>More</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
  },

  avatar: {
  width: 160,
  height: 160,
  borderRadius: 80,
    backgroundColor: "#E9E9EE",
  },

  editCircle: {
    position: "absolute",
    right: 6,
    top: 10,
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
  marginBottom: 24,
    color: "#2D3040",
    // marginBottom: 34,
  },

  infoList: {
    marginBottom: 24,
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
    marginBottom: 22,
  },

  editBtnText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 12,
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
    marginLeft: 12,
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
});