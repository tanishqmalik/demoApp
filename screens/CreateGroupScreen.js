// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import { Feather } from "@expo/vector-icons";

// export default function CreateGroupScreen({ navigation }) {
//   const [groupName, setGroupName] = useState("");

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.headerCard}>
//         <TouchableOpacity
//           style={styles.backCircle}
//           onPress={() => navigation.goBack()}
//         >
//           <Feather name="arrow-left" size={28} color="#666666" />
//         </TouchableOpacity>

//         <Text style={styles.headerTitle}>Create Group</Text>
//         <View style={styles.headerSpacer} />
//       </View>

//       <View style={styles.content}>
//         <View style={styles.fieldWrap}>
//           <Text style={styles.label}>Name Group</Text>
//           <TextInput
//             style={styles.input}
//             value={groupName}
//             onChangeText={setGroupName}
//             placeholder="Enter Name Group"
//             placeholderTextColor="#C0C0C8"
//           />
//         </View>

//         <View style={styles.fieldWrap}>
//           <Text style={styles.label}>Members</Text>

//           <TouchableOpacity style={styles.addMembersBox}>
//             <Feather name="plus" size={32} color="#045D82" />
//             <Text style={styles.addMembersText}>Add members to group</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.createBtn}>
//           <Text style={styles.createBtnText}>Create Group</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FDFDFD",
//   },

//   headerCard: {
//     backgroundColor: "#FFFFFF",
//     borderBottomLeftRadius: 26,
//     borderBottomRightRadius: 26,
//     paddingTop: 18,
//     paddingBottom: 22,
//     paddingHorizontal: 22,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     shadowColor: "#000",
//     shadowOpacity: 0.04,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 3 },
//     elevation: 2,
//   },

//   backCircle: {
//     width: 72,
//     height: 72,
//     borderRadius: 36,
//     borderWidth: 1.2,
//     borderColor: "#1F1F1F",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#FFFFFF",
//   },

//   headerTitle: {
//     fontSize: 18,
//     fontWeight: "800",
//     color: "#8C8C8C",
//   },

//   headerSpacer: {
//     width: 72,
//   },

//   content: {
//     flex: 1,
//     paddingHorizontal: 24,
//     paddingTop: 26,
//   },

//   fieldWrap: {
//     marginBottom: 28,
//   },

//   label: {
//     fontSize: 14,
//     color: "#6E7093",
//     fontWeight: "500",
//     marginBottom: 12,
//   },

//   input: {
//     height: 94,
//     borderWidth: 1.2,
//     borderColor: "#D9DDE3",
//     borderRadius: 18,
//     paddingHorizontal: 20,
//     fontSize: 18,
//     color: "#2F3142",
//     backgroundColor: "#FFFFFF",
//   },

//   addMembersBox: {
//     height: 96,
//     borderRadius: 16,
//     backgroundColor: "#DDF0F5",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   addMembersText: {
//     marginLeft: 16,
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#045D82",
//   },

//   footer: {
//     paddingHorizontal: 24,
//     paddingBottom: 26,
//   },

//   createBtn: {
//     height: 72,
//     borderRadius: 22,
//     backgroundColor: "#045D82",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   createBtnText: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     fontWeight: "800",
//   },
// });


import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  ScrollView,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const CONTACTS = [
  {
    id: 1,
    name: "David Wayne",
    phone: "(+44) 50 9285 3022",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Edward Mint",
    phone: "(+44) 50 9285 2090",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "May HG. Kang",
    phone: "(+44) 50 9285 2214",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "Lily Dare",
    phone: "(+44) 50 9285 5530",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "Dennis Dang",
    phone: "(+44) 50 9285 2225",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    id: 6,
    name: "Cayla Raiji",
    phone: "(+44) 50 9285 2529",
    avatar: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    id: 7,
    name: "Erin Turcotte",
    phone: "(+44) 50 9285 1559",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 8,
    name: "Bob Walter",
    phone: "(+44) 50 9285 2355",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

export default function CreateGroupScreen({ navigation }) {
  const [groupName, setGroupName] = useState("");
  const [memberModalVisible, setMemberModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);

  const filteredContacts = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    if (!query) return CONTACTS;

    return CONTACTS.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.phone.toLowerCase().includes(query)
    );
  }, [searchText]);

  const isSelected = (id) => selectedMembers.some((item) => item.id === id);

  const toggleMember = (contact) => {
    if (isSelected(contact.id)) {
      setSelectedMembers((prev) => prev.filter((item) => item.id !== contact.id));
    } else {
      setSelectedMembers((prev) => [...prev, contact]);
    }
  };

  const removeMember = (id) => {
    setSelectedMembers((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddMembers = () => {
    setMemberModalVisible(false);
    setSearchText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerCard}>
        <TouchableOpacity
          style={styles.backCircle}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={28} color="#666666" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Create Group</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.fieldWrap}>
          <Text style={styles.label}>Name Group</Text>
          <TextInput
            style={styles.input}
            value={groupName}
            onChangeText={setGroupName}
            placeholder="Enter Name Group"
            placeholderTextColor="#C0C0C8"
          />
        </View>

        <View style={styles.fieldWrap}>
          <Text style={styles.label}>Members</Text>

          <TouchableOpacity
            style={styles.addMembersBox}
            onPress={() => setMemberModalVisible(true)}
          >
            <Feather name="plus" size={32} color="#045D82" />
            <Text style={styles.addMembersText}>Add members to group</Text>
          </TouchableOpacity>
        </View>

        {selectedMembers.map((member) => (
          <View key={member.id} style={styles.memberRow}>
            <Image source={{ uri: member.avatar }} style={styles.avatar} />

            <View style={styles.memberBody}>
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberPhone}>{member.phone}</Text>
            </View>

            <TouchableOpacity onPress={() => removeMember(member.id)}>
              <Feather name="x" size={28} color="#F04B3A" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.createBtn}>
          <Text style={styles.createBtnText}>Create Group</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={memberModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setMemberModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.memberSheet}>
            <View style={styles.dragHandle} />

            <Text style={styles.sheetTitle}>Add members to group</Text>

            <View style={styles.searchBox}>
              <Feather name="search" size={28} color="#B8B8B8" />
              <TextInput
                style={styles.searchInput}
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Search"
                placeholderTextColor="#B8B8B8"
              />
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.memberList}
            >
              {filteredContacts.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.contactRow}
                  onPress={() => toggleMember(item)}
                  activeOpacity={0.8}
                >
                  <Image source={{ uri: item.avatar }} style={styles.avatar} />

                  <View style={styles.contactBody}>
                    <Text style={styles.contactName}>{item.name}</Text>
                    <Text style={styles.contactPhone}>{item.phone}</Text>
                  </View>

                  <View
                    style={[
                      styles.checkbox,
                      isSelected(item.id) && styles.checkboxActive,
                    ]}
                  >
                    {isSelected(item.id) ? (
                      <Feather name="check" size={18} color="#FFFFFF" />
                    ) : null}
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.sheetBtnRow}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setMemberModalVisible(false)}
              >
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.addBtn} onPress={handleAddMembers}>
                <Text style={styles.addBtnText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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

  content: {
    paddingHorizontal: 24,
    paddingTop: 26,
    paddingBottom: 140,
  },

  fieldWrap: {
    marginBottom: 28,
  },

  label: {
    fontSize: 14,
    color: "#6E7093",
    fontWeight: "500",
    marginBottom: 12,
  },

  input: {
    height: 94,
    borderWidth: 1.2,
    borderColor: "#D9DDE3",
    borderRadius: 18,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#2F3142",
    backgroundColor: "#FFFFFF",
  },

  addMembersBox: {
    height: 96,
    borderRadius: 16,
    backgroundColor: "#DDF0F5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  addMembersText: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: "700",
    color: "#045D82",
  },

  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },

  memberBody: {
    flex: 1,
  },

  memberName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#2F3142",
    marginBottom: 6,
  },

  memberPhone: {
    fontSize: 14,
    color: "#6E7093",
    fontWeight: "600",
  },

  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 26,
  },

  createBtn: {
    height: 72,
    borderRadius: 22,
    backgroundColor: "#045D82",
    alignItems: "center",
    justifyContent: "center",
  },

  createBtnText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(18,21,35,0.18)",
    justifyContent: "flex-end",
  },

  memberSheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 24,
    maxHeight: "88%",
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
    marginBottom: 22,
  },

  searchBox: {
    height: 96,
    borderWidth: 1.2,
    borderColor: "#D9DDE3",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginBottom: 18,
    backgroundColor: "#FFFFFF",
  },

  searchInput: {
    flex: 1,
    marginLeft: 14,
    fontSize: 18,
    color: "#2F3142",
  },

  memberList: {
    paddingBottom: 10,
  },

  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
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

  checkbox: {
    width: 34,
    height: 34,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#CFCFDC",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  checkboxActive: {
    backgroundColor: "#045D82",
    borderColor: "#045D82",
  },

  sheetBtnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  cancelBtn: {
    width: "46%",
    height: 72,
    borderRadius: 22,
    backgroundColor: "#DDF0F5",
    alignItems: "center",
    justifyContent: "center",
  },

  cancelBtnText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#045D82",
  },

  addBtn: {
    width: "46%",
    height: 72,
    borderRadius: 22,
    backgroundColor: "#045D82",
    alignItems: "center",
    justifyContent: "center",
  },

  addBtnText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FFFFFF",
  },
});