import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons as MCI,
} from "@expo/vector-icons";

export default function MembershipScreen({ navigation }) {
  const learningIconsTop = [
    <Feather name="book-open" size={34} color="#3E3E46" />,
    <Ionicons name="school-outline" size={38} color="#3E3E46" />,
    <Feather name="book" size={34} color="#3E3E46" />,
    <MCI name="alphabetical-variant" size={38} color="#3E3E46" />,
    <Ionicons name="bookmark-outline" size={34} color="#3E3E46" />,
  ];

  const learningIconsBottom = [
    <Ionicons name="basketball-outline" size={34} color="#3E3E46" />,
    <MCI name="baseball-bat" size={34} color="#3E3E46" />,
    <FontAwesome5 name="football-ball" size={30} color="#3E3E46" />,
    <MCI name="golf" size={34} color="#3E3E46" />,
    <MCI name="ticket-confirmation-outline" size={34} color="#3E3E46" />,
    <MCI name="pool" size={34} color="#3E3E46" />,
  ];

  const benefitIcons = [
    <MCI name="storefront-outline" size={38} color="#111" />,
    <MCI name="ticket-percent-outline" size={38} color="#111" />,
    <MCI name="wallet-outline" size={38} color="#111" />,
    <MCI name="truck-fast-outline" size={38} color="#111" />,
    <MCI name="watch-variant" size={38} color="#111" />,
    <MCI name="camera-outline" size={38} color="#111" />,
    <MCI name="usb-flash-drive-outline" size={38} color="#111" />,
    <MCI name="shape-outline" size={38} color="#111" />,
    <MCI name="brush-variant" size={38} color="#111" />,
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={26} color="#003B57" />
          </TouchableOpacity>

          <Text style={styles.topTitle}>Membership</Text>

          <TouchableOpacity>
            <Feather name="menu" size={28} color="#003B57" />
          </TouchableOpacity>
        </View>

        <View style={styles.whiteSection}>
          <Text style={styles.dueText}>
            <Text style={styles.dueLight}>Due. </Text>
            Today, Monday 17
          </Text>

          <Text style={styles.helloTitle}>Hello, Association Exec</Text>
          <Text style={styles.helloDesc}>
            Welcome back. This is your place to manage your membership, access
            benefits, manage our learning and more.
          </Text>
        </View>

        <View style={styles.blueSection}>
          <Text style={styles.sectionTitle}>Membership Status</Text>

          <View style={styles.membershipHeaderRow}>
            <Text style={styles.membershipDate}>01/01/2027</Text>

            <View style={styles.pillWrap}>
              <View style={styles.percentPill}>
                <Text style={styles.percentText}>48%</Text>
              </View>
              <View style={styles.pillTriangle} />
            </View>

            <Text style={styles.membershipDate}>31/08/2026</Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
            <View style={styles.progressThumbOuter}>
              <View style={styles.progressThumbInner} />
            </View>
          </View>
        </View>

        <View style={styles.whiteSection}>
          <Text style={styles.sectionTitle}>Renew your Membership</Text>

          <TouchableOpacity style={styles.renewBtn}>
            <Text style={styles.renewBtnText}>Renew Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.blueSection}>
          <Text style={styles.sectionTitle}>Learning Path</Text>

          <View style={styles.learningTopRow}>
            {learningIconsTop.map((icon, index) => (
              <View
                key={index}
                style={[
                  styles.learningIconBox,
                  index === 1 && styles.learningIconActive,
                ]}
              >
                {icon}
              </View>
            ))}
          </View>

          <View style={styles.learningPointerWrap}>
            <View style={styles.learningPointer} />
          </View>

          <View style={styles.learningBottomRow}>
            {learningIconsBottom.map((icon, index) => (
              <View
                key={index}
                style={[
                  styles.learningIconBox,
                  index === 1 && styles.learningIconActive,
                ]}
              >
                {icon}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.whiteSection}>
          <Text style={styles.sectionTitle}>Access Benefits</Text>

          <View style={styles.benefitsGrid}>
            {benefitIcons.map((icon, index) => (
              <View
                key={index}
                style={[
                  styles.benefitCard,
                  index === 4 && styles.benefitCardActive,
                ]}
              >
                {icon}
              </View>
            ))}
          </View>

          <Text style={styles.benefitDesc}>
            Explore the narrative behind our platform, where we seamlessly blend
            the worlds of events and memberships to foster excellence. Dive into
            our history of over 14 years, dedicated to providing unparalleled
            opportunities for growth, networking, and community building.
          </Text>
        </View>
      </ScrollView>

      {/* <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="home-outline" size={24} color="#151515" />
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
          <Feather name="more-horizontal" size={22} color="#A5A0B2" />
          <Text style={styles.bottomNavText}>More</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
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

  topBar: {
    height: 76,
    backgroundColor: "#DDF0F5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },

  topTitle: {
    fontSize: 18,
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

  dueText: {
    fontSize: 14,
    color: "#6B6B78",
    marginBottom: 20,
  },

  dueLight: {
    color: "#C0BFC4",
  },

  helloTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#23232A",
    marginBottom: 10,
  },

  helloDesc: {
    fontSize: 16,
    lineHeight: 22,
    color: "#2E2E34",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#202020",
    marginBottom: 22,
  },

  membershipHeaderRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  membershipDate: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111111",
  },

  pillWrap: {
    alignItems: "center",
  },

  percentPill: {
    backgroundColor: "#045D82",
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 999,
  },

  percentText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },

  pillTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#045D82",
    marginTop: -1,
  },

  progressTrack: {
    height: 14,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    position: "relative",
  },

  progressFill: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "48%",
    borderRadius: 999,
    backgroundColor: "#045D82",
  },

  progressThumbOuter: {
    position: "absolute",
    left: "48%",
    top: -8,
    marginLeft: -18,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#6EA8C1",
    alignItems: "center",
    justifyContent: "center",
  },

  progressThumbInner: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    borderWidth: 3,
    borderColor: "#045D82",
  },

  renewBtn: {
    height: 78,
    borderRadius: 16,
    backgroundColor: "#045D82",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },

  renewBtnText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },

  learningTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  learningBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 14,
  },

  learningIconBox: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
  },

  learningIconActive: {
    backgroundColor: "#F4F4F4",
  },

  learningPointerWrap: {
    alignItems: "center",
    marginBottom: -2,
  },

  learningPointer: {
    width: 0,
    height: 0,
    borderLeftWidth: 16,
    borderRightWidth: 16,
    borderBottomWidth: 16,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#F4F4F4",
  },

  benefitsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 16,
    marginBottom: 26,
  },

  benefitCard: {
    width: "30.5%",
    aspectRatio: 1,
    backgroundColor: "#E7E7E7",
    alignItems: "center",
    justifyContent: "center",
  },

  benefitCardActive: {
    backgroundColor: "#DDF0F5",
  },

  benefitDesc: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 22,
    color: "#111111",
    paddingHorizontal: 12,
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