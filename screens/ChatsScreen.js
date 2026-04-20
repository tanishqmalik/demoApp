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
  Pressable,
} from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function ChatsScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const chats = [
    {
      id: 1,
      name: "Angela Kelly",
      message: "Appreciate it! See you soon! 🚀",
      time: "10:45",
      date: "08/05",
      unread: 1,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Jean Dare",
      message: "Hooray! 🎉",
      time: "20:10",
      date: "05/05",
      unread: 0,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 3,
      name: "Dennis Borer",
      message: "Your order has been successfully delivered",
      time: "17:02",
      date: "05/05",
      unread: 0,
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      id: 4,
      name: "Cayla Rath",
      message: "See you soon!",
      time: "11:20",
      date: "05/05",
      unread: 0,
      avatar: "https://randomuser.me/api/portraits/women/31.jpg",
    },
    {
      id: 5,
      name: "Erin Turcotte",
      message: "I'm ready to drop off your delivery. 👍",
      time: "19:35",
      date: "02/05",
      unread: 0,
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 6,
      name: "Rodolfo Walter",
      message: "Appreciate it! Hope you enjoy it!",
      time: "07:55",
      date: "01/05",
      unread: 0,
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWhite}>
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

        <View style={styles.topActions}>
          <TouchableOpacity style={styles.iconBtn}>
            <Feather name="search" size={24} color="#B5B5B5" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconBtn, styles.closeBtn]}
            onPress={() => navigation.goBack()}
          >
            <Feather name="x" size={28} color="#B5B5B5" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.chatHeaderRow}>
          <Text style={styles.chatHeader}>Chats</Text>

          <TouchableOpacity
            style={styles.addCircle}
            onPress={() => setMenuVisible(true)}
          >
            <Feather name="plus" size={22} color="#0B5E7A" />
          </TouchableOpacity>
        </View>

        {chats.map((item) => (
          <View key={item.id} style={styles.chatItem}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />

            <View style={styles.chatBody}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatMessage}>{item.message}</Text>
            </View>

            <View style={styles.chatMeta}>
              <Text style={styles.chatMetaText}>
                {item.time} {item.date}
              </Text>

              {item.unread > 0 ? (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadText}>{item.unread}</Text>
                </View>
              ) : null}
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="home-outline" size={24} color="#A5A0B2" />
          <Text style={styles.bottomNavTextActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => navigation.navigate("Courses")}
        >
          <MaterialCommunityIcons
            name="school-outline"
            size={24}
            color="#A5A0B2"
          />
          <Text style={styles.bottomNavText}>Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => navigation.navigate("Profile")}
        >
          <Feather name="user" size={22} color="#A5A0B2" />
          <Text style={styles.bottomNavText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>
          <Feather name="more-horizontal" size={22} color="#151515" />
          <Text style={styles.bottomNavTextActive}>More</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <Pressable style={styles.popupCard}>
            {/* <TouchableOpacity style={styles.popupOption}>
              <Feather name="user-plus" size={28} color="#9797B0" />
              <Text style={styles.popupText}>Add Friend</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
  style={styles.popupOption}
  onPress={() => {
    setMenuVisible(false);
    navigation.navigate("AddFriend");
  }}
>
  <Feather name="user-plus" size={28} color="#9797B0" />
  <Text style={styles.popupText}>Add Friend</Text>
</TouchableOpacity>

            {/* <TouchableOpacity style={styles.popupOption}>
              <Feather name="users" size={28} color="#9797B0" />
              <Text style={styles.popupText}>Create Group</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
  style={styles.popupOption}
  onPress={() => {
    setMenuVisible(false);
    navigation.navigate("CreateGroup");
  }}
>
  <Feather name="users" size={28} color="#9797B0" />
  <Text style={styles.popupText}>Create Group</Text>
</TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  topWhite: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  logo: {
    width: 76,
    height: 76,
    marginRight: 12,
  },

  logoText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    color: "#0B5E7A",
  },

  topActions: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },

  iconBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
  },

  closeBtn: {
    backgroundColor: "#F1F1F1",
    marginLeft: 8,
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 120,
  },

  chatHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  chatHeader: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2D3040",
  },

  addCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 1.2,
    borderColor: "#D9DDE3",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  chatItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },

  chatBody: {
    flex: 1,
    paddingRight: 8,
  },

  chatName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#313443",
    marginBottom: 8,
  },

  chatMessage: {
    fontSize: 14,
    lineHeight: 20,
    color: "#9797B0",
    fontWeight: "600",
  },

  chatMeta: {
    alignItems: "flex-end",
    minWidth: 86,
  },

  chatMetaText: {
    fontSize: 14,
    color: "#6B6D90",
    fontWeight: "700",
    marginBottom: 12,
  },

  unreadBadge: {
    minWidth: 28,
    height: 30,
    borderRadius: 8,
    backgroundColor: "#42B9F5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },

  unreadText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(20,20,30,0.25)",
    paddingHorizontal: 24,
    paddingTop: 110,
  },

  popupCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 18,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  popupOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 16,
    backgroundColor: "#F6F6F8",
    marginBottom: 14,
  },

  popupText: {
    marginLeft: 18,
    fontSize: 16,
    fontWeight: "700",
    color: "#2D3040",
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
    color: "#A5A0B2",
  },

  bottomNavText: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "600",
    color: "#A5A0B2",
  },
});