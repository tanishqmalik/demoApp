import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function EventsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* TOP BAR */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={26} color="#003B57" />
          </TouchableOpacity>

          <Text style={styles.title}>Events</Text>

          <TouchableOpacity>
            <Feather name="menu" size={26} color="#003B57" />
          </TouchableOpacity>
        </View>

        {/* TABS */}
        <View style={styles.tabBar}>
          <View style={[styles.tabItem, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeText]}>Upcoming</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={styles.tabText}>Registered</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={styles.tabText}>New</Text>
          </View>
        </View>

        {/* CALENDAR (STATIC UI) */}
        <View style={styles.calendarBox}>
          <Text style={styles.month}>Sep 2026</Text>

          <View style={styles.daysRow}>
            {["MO","TU","WE","TH","FR","SA","SU"].map(d => (
              <Text key={d} style={styles.dayLabel}>{d}</Text>
            ))}
          </View>

          <View style={styles.dateGrid}>
            {[...Array(30)].map((_, i) => (
              <View key={i} style={styles.dateItem}>
                <Text style={styles.dateText}>{i+1}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* EVENTS GRID */}
        <View style={styles.eventGrid}>
          {[1,2,3,4].map((item) => (
            <View key={item} style={styles.eventCard}>
              <View style={styles.eventImg} />
              <Text style={styles.eventText}>Event {item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* FIXED NAVBAR */}
      {/* <View style={styles.bottomNav}>
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

        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => navigation.navigate("Profile")}
        >
          <Feather name="user" size={22} color="#A5A0B2" />
          <Text style={styles.bottomNavText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>
          <Feather name="more-horizontal" size={22} color="#A5A0B2" />
          <Text style={styles.bottomNavText}>More</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { paddingBottom: 120 },

  topBar: {
    height: 80,
    backgroundColor: "#DDF0F5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#003B57",
  },

  tabBar: {
    flexDirection: "row",
    margin: 20,
    backgroundColor: "#F1F1F5",
    borderRadius: 14,
  },

  tabItem: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  activeTab: {
    backgroundColor: "#045D82",
    borderRadius: 14,
  },

  tabText: {
    fontSize: 14,
    color: "#A5A0B2",
  },

  activeText: {
    color: "#fff",
  },

  calendarBox: {
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
  },

  month: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  daysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  dayLabel: {
    fontSize: 12,
    color: "#888",
  },

  dateGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  dateItem: {
    width: "14%",
    paddingVertical: 8,
    alignItems: "center",
  },

  dateText: {
    fontSize: 13,
  },

  eventGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },

  eventCard: {
    width: "48%",
    marginBottom: 16,
  },

  eventImg: {
    height: 100,
    backgroundColor: "#E5E5E5",
    borderRadius: 12,
    marginBottom: 6,
  },

  eventText: {
    fontSize: 14,
    fontWeight: "600",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  bottomNavItem: {
    alignItems: "center",
  },

  bottomNavText: {
    fontSize: 12,
    color: "#A5A0B2",
  },
});