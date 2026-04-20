import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

export default function CoursesScreen({ navigation }) {
  const courseCards = [
    {
      title: "Item title",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "Item title",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "Item title",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop",
    },
  ];

  const progressCourses = [
    {
      title: "Transforming Problematic Caregiver\nPatterns",
      progress: 0.08,
      action: "Start",
    },
    {
      title: "Understanding and Supporting\nClients with Brain Injury and\nConcussion",
      progress: 0.22,
      action: "Continue",
    },
    {
      title: "Staying Objective in Couples\nCounselling",
      progress: 0.42,
      action: "Continue",
    },
    {
      title: "BCACC Training, Course, or Seminar\nwith Exam...",
      progress: 0.72,
      action: "Continue",
    },
    {
      title: "Business Administration",
      progress: 0.96,
      action: "Restart",
    },
  ];

  const summaryCards = [
    { title: "Courses", count: 3, bg: "#E9ECFF" },
    { title: "Events", count: 2, bg: "#EDF6F8" },
    { title: "CPD pts", count: 1, bg: "#FBF8F2" },
    { title: "Support", count: 0, bg: "#FBEFF0" },
  ];

  const purchasedCourses = [
    {
      price: "$1,600",
      date: "01/01/2026",
      title: "Course 2",
      subtitle: "BCACC Training, Course, or Seminar\nwith Exam...",
    },
    {
      price: "$300",
      date: "01/01/2026",
      title: "Course 3",
      subtitle: "Staying Objective in Couples Counselling",
    },
    {
      price: "$800",
      date: "01/01/2026",
      title: "Course 4",
      subtitle:
        "Understanding and Supporting Clients\nwith Brain Injury and Concussion",
    },
    {
      price: "$135",
      date: "01/01/2026",
      title: "Course 5",
      subtitle: "Transforming Problematic Caregiver\nPatterns",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
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
        </View>

        <View style={styles.topBlueBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={28} color="#003B57" />
          </TouchableOpacity>

          <Text style={styles.barTitle}>Courses</Text>

          <TouchableOpacity>
            <Feather name="menu" size={30} color="#003B57" />
          </TouchableOpacity>
        </View>

        <View style={styles.whiteSection}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: "#045D82" }]}>Courses</Text>
            <TouchableOpacity style={styles.moreWrap}>
              <Text style={styles.moreText}>More</Text>
              <Feather name="chevron-right" size={22} color="#AAA1B2" />
            </TouchableOpacity>
          </View>

          <View style={styles.tabBar}>
            <TouchableOpacity style={[styles.tabItem, styles.tabItemActive]}>
              <Text style={[styles.tabText, styles.tabTextActive]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
              <Text style={styles.tabText}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
              <Text style={styles.tabText}>Recommended</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.courseRow}>
            {courseCards.map((item, index) => (
              <View key={index} style={styles.courseCard}>
                <View style={styles.courseImageWrap}>
                  <Image source={{ uri: item.image }} style={styles.courseImage} />
                  <View style={styles.courseBadge}>
                    <Text style={styles.courseBadgeText}>Start</Text>
                  </View>
                </View>
                <Text style={styles.courseTitle}>{item.title}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.blueSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Course Progress Dashboard</Text>
            <TouchableOpacity style={styles.moreWrap}>
              <Text style={styles.moreText}>More</Text>
              <Feather name="chevron-right" size={22} color="#AAA1B2" />
            </TouchableOpacity>
          </View>

          {progressCourses.map((course, index) => (
            <View key={index} style={styles.progressItem}>
              <View style={styles.progressTextWrap}>
                <Text style={styles.progressTitle}>{course.title}</Text>
                <View style={styles.progressBarBg}>
                  <View
                    style={[
                      styles.progressBarFill,
                      { width: `${Math.max(course.progress * 100, 8)}%` },
                    ]}
                  />
                  <View
                    style={[
                      styles.progressThumb,
                      { left: `${Math.min(course.progress * 100, 96)}%` },
                    ]}
                  />
                </View>
              </View>

              <TouchableOpacity style={styles.progressBtn}>
                <Text style={styles.progressBtnText}>{course.action}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.whiteSection}>
          <View style={styles.summaryGrid}>
            {summaryCards.map((item) => (
              <View key={item.title} style={[styles.summaryCard, { backgroundColor: item.bg }]}>
                <View style={styles.summaryIconBox}>
                  <Ionicons name="document-text-outline" size={16} color="#FFFFFF" />
                </View>
                <Text style={styles.summaryCount}>{item.count}</Text>
                <Text style={styles.summaryLabel}>{item.title}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.blueSection}>
          {purchasedCourses.map((course, index) => (
            <View key={index} style={styles.purchaseCard}>
              <View style={styles.purchaseTopRow}>
                <View style={styles.pricePill}>
                  <Text style={styles.pricePillText}>{course.price}</Text>
                </View>
                <Text style={styles.purchaseDate}>{course.date}</Text>
                <TouchableOpacity style={styles.moreDots}>
                  <Entypo name="dots-three-vertical" size={18} color="#D4DCF6" />
                </TouchableOpacity>
              </View>

              <Text style={styles.purchaseTitle}>{course.title}</Text>
              <Text style={styles.purchaseSubtitle}>{course.subtitle}</Text>
            </View>
          ))}
        </View>

        <View style={styles.whiteSection}>
          <View style={styles.creditsRow}>
            <View style={styles.creditTextBlock}>
              <Text style={styles.creditTitle}>CE Credits</Text>
              <Text style={styles.creditDesc}>No approved CE Credits found.</Text>
            </View>
            <DonutLabel />
          </View>

          <View style={styles.creditsRow}>
            <View style={styles.creditTextBlock}>
              <Text style={styles.creditTitle}>Under Review CE Credits</Text>
              <Text style={styles.creditDesc}>No CE credits under review.</Text>
            </View>
            <DonutLabel />
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => navigation.replace("Home")}
        >
          <Ionicons name="home-outline" size={24} color="#A5A0B2" />
          <Text style={styles.bottomNavTextActive}>Home</Text>
        </TouchableOpacity>

<TouchableOpacity style={styles.bottomNavItem}>
  <MaterialCommunityIcons name="school" size={24} color="#151515" />
  <Text style={styles.bottomNavTextActiveC}>Courses</Text>
</TouchableOpacity>

        {/* <TouchableOpacity style={styles.bottomNavItem}>
          <Feather name="user" size={22} color="#A5A0B2" />
          <Text style={styles.bottomNavText}>Profile</Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity
  style={styles.bottomNavItem}
  onPress={() => navigation.navigate("Profile")}
>
  <Feather name="user" size={22} color="#A5A0B2" />
  <Text style={styles.bottomNavText}>Profile</Text>
</TouchableOpacity> */}

<TouchableOpacity
  style={styles.bottomNavItem}
  onPress={() => navigation.navigate("Profile")}
>
  <Feather name="user" size={22} color="#A5A0B2" />
  <Text style={styles.bottomNavText}>Profile</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.bottomNavItem}
  onPress={() => navigation.navigate("Chats")}
>
  <Feather name="more-horizontal" size={22} color="#A5A0B2" />
  <Text style={styles.bottomNavText}>More</Text>
</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function DonutLabel() {
  return (
    <View style={styles.donutWrap}>
      <View style={styles.donutOuter}>
        <View style={styles.donutGapTop} />
        <View style={styles.donutInner}>
          <Text style={styles.donutZero}>0</Text>
          <Text style={styles.donutText}>CE Credits</Text>
        </View>
      </View>
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

  topWhite: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 16,
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
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

  topBlueBar: {
    height: 86,
    backgroundColor: "#DDF0F5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },

  barTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#003B57",
  },

  whiteSection: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 26,
  },

  blueSection: {
    backgroundColor: "#DDF0F5",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 26,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#202020",
  },

  moreWrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  moreText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#AAA1B2",
    marginRight: 2,
  },

  tabBar: {
    flexDirection: "row",
    backgroundColor: "#F0F1F6",
    borderRadius: 16,
    padding: 4,
    marginBottom: 22,
  },

  tabItem: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },

  tabItemActive: {
    backgroundColor: "#045D82",
  },

  tabText: {
    fontSize: 14,
    color: "#A09BAD",
    fontWeight: "600",
  },

  tabTextActive: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  courseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  courseCard: {
    width: "31%",
  },

  courseImageWrap: {
    backgroundColor: "#F3F4F7",
    borderRadius: 18,
    padding: 10,
    marginBottom: 10,
  },

  courseImage: {
    width: "100%",
    height: 86,
    borderRadius: 12,
  },

  courseBadge: {
    position: "absolute",
    left: 14,
    top: 14,
    backgroundColor: "#0998E6",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  courseBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },

  courseTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#0B5E7A",
  },

  progressItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
  },

  progressTextWrap: {
    flex: 1,
    marginRight: 18,
  },

  progressTitle: {
    fontSize: 15,
    lineHeight: 18,
    color: "#5D5C68",
    fontWeight: "700",
    marginBottom: 12,
  },

  progressBarBg: {
    height: 10,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    position: "relative",
    overflow: "visible",
  },

  progressBarFill: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    borderRadius: 999,
    backgroundColor: "#045D82",
  },

  progressThumb: {
    position: "absolute",
    top: -7,
    marginLeft: -10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 5,
    borderColor: "#045D82",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  progressBtn: {
    width: 118,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#045D82",
    alignItems: "center",
    justifyContent: "center",
  },

  progressBtnText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  summaryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 16,
  },

  summaryCard: {
    width: "48%",
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 18,
  },

  summaryIconBox: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: "#2E6DFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  summaryCount: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111",
    marginBottom: 4,
  },

  summaryLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
  },

  purchaseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
  },

  purchaseTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  pricePill: {
    backgroundColor: "#045D82",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginRight: 14,
  },

  pricePillText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  purchaseDate: {
    fontSize: 14,
    fontWeight: "800",
    color: "#111111",
  },

  moreDots: {
    marginLeft: "auto",
    paddingLeft: 10,
  },

  purchaseTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1F2230",
    marginBottom: 4,
  },

  purchaseSubtitle: {
    fontSize: 14,
    lineHeight: 18,
    color: "#5C5D6A",
    fontWeight: "700",
  },

  creditsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 34,
  },

  creditTextBlock: {
    width: "48%",
  },

  creditTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#202020",
    marginBottom: 18,
  },

  creditDesc: {
    fontSize: 15,
    lineHeight: 22,
    color: "#2C2C2C",
  },

  donutWrap: {
    width: 170,
    alignItems: "center",
    justifyContent: "center",
  },

  donutOuter: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 16,
    borderColor: "#124E78",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  donutGapTop: {
    position: "absolute",
    top: -16,
    width: 58,
    height: 32,
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },

  donutInner: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  donutZero: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111",
    marginBottom: 2,
  },

  donutText: {
    fontSize: 12,
    color: "#7B7B7B",
    fontWeight: "600",
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

    bottomNavTextActiveC: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "700",
    color: "#111",
  },

  bottomNavText: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "600",
    color: "#A5A0B2",
  },
});