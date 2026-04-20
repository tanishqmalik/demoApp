import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function AddFriendScreen({ navigation }) {
  const [countryCode] = useState("(+44)");
  const [phoneInput, setPhoneInput] = useState("");

  const contacts = [
    {
      id: 1,
      name: "David Wayne",
      phone: "50 9285 3022",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Edward Mint",
      phone: "50 9285 2090",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "May HG. Kang",
      phone: "50 9285 2214",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 4,
      name: "Lily Dare",
      phone: "50 9285 5530",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 5,
      name: "Dennis Dang",
      phone: "50 9285 2225",
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      id: 6,
      name: "Cayla Raiji",
      phone: "50 9285 2529",
      avatar: "https://randomuser.me/api/portraits/women/31.jpg",
    },
    {
      id: 7,
      name: "Erin Turcotte",
      phone: "50 9285 1559",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 8,
      name: "Bob Walter",
      phone: "50 9285 2355",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  const normalize = (text) => text.replace(/\s+/g, "").trim();

  const filteredContacts = useMemo(() => {
    if (!phoneInput.trim()) return contacts;

    const search = normalize(phoneInput);

    return contacts.filter((item) =>
      normalize(item.phone).includes(search)
    );
  }, [phoneInput]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerCard}>
        <TouchableOpacity
          style={styles.backCircle}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={28} color="#666666" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Friend</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.searchBox}>
          <View style={styles.flagRow}>
            <Text style={styles.flag}>🇬🇧</Text>
            <Feather name="chevron-down" size={22} color="#2F3142" />
          </View>

          <Text style={styles.countryCode}>{countryCode}</Text>

          <TextInput
            style={styles.searchInput}
            value={phoneInput}
            onChangeText={setPhoneInput}
            placeholder="50 9285"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
          />
        </View>

        {filteredContacts.map((item) => (
          <View key={item.id} style={styles.contactRow}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />

            <View style={styles.contactBody}>
              <Text style={styles.contactName}>{item.name}</Text>
              <Text style={styles.contactPhone}>
                {countryCode} {item.phone}
              </Text>
            </View>

            <TouchableOpacity style={styles.addBtn}>
              <Feather name="user-plus" size={24} color="#045D82" />
            </TouchableOpacity>
          </View>
        ))}

        {filteredContacts.length === 0 ? (
          <Text style={styles.noResult}>No contacts found.</Text>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
  },

  headerCard: {
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    paddingTop: 18,
    paddingBottom: 22,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  backCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 1.2,
    borderColor: "#1F1F1F",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#8C8C8C",
  },

  headerSpacer: {
    width: 72,
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 30,
  },

  searchBox: {
    height: 96,
    borderWidth: 1.2,
    borderColor: "#D9DDE3",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 24,
    backgroundColor: "#FFFFFF",
  },

  flagRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14,
  },

  flag: {
    fontSize: 36,
    marginRight: 8,
  },

  countryCode: {
    fontSize: 16,
    color: "#8E8EAE",
    fontWeight: "500",
    marginRight: 14,
  },

  searchInput: {
    flex: 1,
    fontSize: 18,
    color: "#2F3142",
    fontWeight: "500",
  },

  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },

  contactBody: {
    flex: 1,
  },

  contactName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#2F3142",
    marginBottom: 6,
  },

  contactPhone: {
    fontSize: 14,
    color: "#6E7093",
    fontWeight: "600",
  },

  addBtn: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },

  noResult: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 15,
    color: "#8E8EAE",
  },
});