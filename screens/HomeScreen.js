// import React from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { Feather } from "@expo/vector-icons";

// export default function HomeScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         <View style={styles.header}>
//           <View>
//             <Text style={styles.greeting}>Hello</Text>
//             <Text style={styles.name}>Welcome Back</Text>
//           </View>

//           <TouchableOpacity style={styles.profileBtn}>
//             <Feather name="user" size={20} color="#0B5E7A" />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.banner}>
//           <Text style={styles.bannerTitle}>Main Home Screen</Text>
//           <Text style={styles.bannerText}>
//             This is your scrollable home screen. We can now match it exactly to
//             your design.
//           </Text>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Featured</Text>

//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>Card 1</Text>
//             <Text style={styles.cardText}>
//               Add your first section content here.
//             </Text>
//           </View>

//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>Card 2</Text>
//             <Text style={styles.cardText}>
//               Add your second section content here.
//             </Text>
//           </View>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Updates</Text>

//           <View style={styles.largeCard}>
//             <Text style={styles.cardTitle}>Latest Update</Text>
//             <Text style={styles.cardText}>
//               This area can hold your news, events, highlights, or anything from
//               the design.
//             </Text>
//           </View>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>More</Text>

//           <View style={styles.row}>
//             <View style={styles.smallCard}>
//               <Text style={styles.smallCardText}>Box 1</Text>
//             </View>
//             <View style={styles.smallCard}>
//               <Text style={styles.smallCardText}>Box 2</Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },

//   scrollContent: {
//     padding: 20,
//     paddingBottom: 30,
//   },

//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 24,
//   },

//   greeting: {
//     fontSize: 14,
//     color: "#6F6F6F",
//   },

//   name: {
//     fontSize: 24,
//     fontWeight: "800",
//     color: "#111",
//     marginTop: 4,
//   },

//   profileBtn: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     backgroundColor: "#F2F6F8",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   banner: {
//     backgroundColor: "#0B5E7A",
//     borderRadius: 20,
//     padding: 20,
//     marginBottom: 24,
//   },

//   bannerTitle: {
//     fontSize: 20,
//     fontWeight: "700",
//     color: "#FFFFFF",
//     marginBottom: 8,
//   },

//   bannerText: {
//     fontSize: 14,
//     lineHeight: 20,
//     color: "#E7F3F8",
//   },

//   section: {
//     marginBottom: 24,
//   },

//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#111",
//     marginBottom: 14,
//   },

//   card: {
//     backgroundColor: "#F8F8F8",
//     borderRadius: 18,
//     padding: 18,
//     marginBottom: 14,
//   },

//   largeCard: {
//     backgroundColor: "#F8F8F8",
//     borderRadius: 18,
//     padding: 18,
//     minHeight: 120,
//   },

//   cardTitle: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#111",
//     marginBottom: 8,
//   },

//   cardText: {
//     fontSize: 14,
//     lineHeight: 20,
//     color: "#6F6F6F",
//   },

//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },

//   smallCard: {
//     width: "48%",
//     backgroundColor: "#F8F8F8",
//     borderRadius: 18,
//     paddingVertical: 24,
//     alignItems: "center",
//   },

//   smallCardText: {
//     fontSize: 15,
//     fontWeight: "600",
//     color: "#111",
//   },
// });



import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Feather, Ionicons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen({navigation}) {
  const [selectedCourseTab, setSelectedCourseTab] = useState("All");
  const [selectedBlogTab, setSelectedBlogTab] = useState("Popular");
  const [forumFilter, setForumFilter] = useState("Select");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribeChecked, setSubscribeChecked] = useState(false);

  const summaryCards = [
    { title: "Courses", count: 3, bg: "#E9ECFF" },
    { title: "Events", count: 2, bg: "#EDF6F8" },
    { title: "CPD pts", count: 1, bg: "#FBF8F2" },
    { title: "Support", count: 0, bg: "#FBEFF0" },
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

  const forumItems = [
    {
      title: "Forum Example Discussion 💎",
      subtitle: "Thanks a bunch! Have a great day! 😊",
      date: "10:25",
      badge: "5",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      stack: 3,
    },
    {
      title: "Forum Example Discussion",
      subtitle: "Great, thanks so much! 💫",
      date: "09/05",
      badge: "12",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      stack: 3,
    },
    {
      title: "Forum Example Discussion ❤️",
      subtitle: "Appreciate it! See you soon! 🚀",
      date: "08/05",
      badge: "1",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      stackLabel: "+10",
    },
    {
      title: "Forum Example Discussion",
      subtitle: "Hooray! 🎉",
      date: "05/05",
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      title: "Forum Example Discussion",
      subtitle: "Your order has been successfully delivered",
      date: "05/05",
      avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
      title: "Forum Example Discussion",
      subtitle: "See you soon!",
      date: "05/05",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      stack: 3,
    },
    {
      title: "Forum Example Discussion",
      subtitle: "New uniforms are ready. 👍",
      date: "02/05",
      avatar: "https://randomuser.me/api/portraits/women/31.jpg",
      stackLabel: "+15",
    },
    {
      title: "Forum Example Discussion",
      subtitle: "Appreciate it! Hope you enjoy it!",
      date: "01/05",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  const blogItems = useMemo(
    () => [
      { title: "Learn joined the group Teaching Ideas", subtitle: "8 months ago" },
      { title: "Added Transforming Problem ....", subtitle: "3 months ago" },
      { title: "Learn posted an update", subtitle: "3rd subtitle" },
      { title: "Diamond became a registered member", subtitle: "4th subtitle" },
      { title: "Fifth List Title", subtitle: "5th subtitle" },
    ],
    []
  );

  const events = [
    {
      title: "Event 1",
      subtitle: "Date • Location • CPD pts",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80&auto=format&fit=crop",
      large: true,
    },
    {
      title: "Event 2",
      subtitle: "Date • Location",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80&auto=format&fit=crop",
      large: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.topHeader}>
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

          <View style={styles.greetingRow}>
            <View style={styles.greetingBlock}>
              <Text style={styles.helloText}>Hello, Association</Text>
              <Text style={styles.dateText}>Friday, 6 February</Text>
            </View>

            <TouchableOpacity style={styles.circleIconBtn}>
              <Feather name="briefcase" size={26} color="#1F1F1F" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.blueSection}>
          <SectionHeader title="Membership Dashboard" more />

          <View style={styles.membershipWrap}>
            <Text style={styles.membershipDate}>01/01/2027</Text>
            <View style={styles.percentPill}>
              <Text style={styles.percentPillText}>48%</Text>
            </View>
            <Text style={styles.membershipDate}>31/08/2026</Text>
          </View>
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
          <SectionHeader title="Course Progress Dashboard" more />

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
          <SectionHeader title="Courses" more colorTitle="#0B5E7A" />

          <View style={styles.tabBar}>
            {["All", "Popular", "Recommended"].map((tab) => {
              const active = selectedCourseTab === tab;
              return (
                <TouchableOpacity
                  key={tab}
                  style={[styles.tabItem, active && styles.tabItemActive]}
                  onPress={() => setSelectedCourseTab(tab)}
                >
                  <Text style={[styles.tabText, active && styles.tabTextActive]}>{tab}</Text>
                </TouchableOpacity>
              );
            })}
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
          <SectionHeader title="Forums" more />

          <TouchableOpacity style={styles.selectBox}>
            <Text style={styles.selectText}>{forumFilter}</Text>
            <Feather name="chevron-down" size={22} color="#9E9AAF" />
          </TouchableOpacity>

          {forumItems.map((item, index) => (
            <View key={index} style={styles.forumItem}>
              <View style={styles.forumAvatarWrap}>
                {item.stackLabel ? (
                  <StackLabel label={item.stackLabel} image={item.avatar} />
                ) : item.stack ? (
                  <AvatarStack image={item.avatar} count={item.stack} />
                ) : (
                  <Image source={{ uri: item.avatar }} style={styles.singleAvatar} />
                )}
              </View>

              <View style={styles.forumBody}>
                <Text style={styles.forumTitle}>{item.title}</Text>
                <Text style={styles.forumSubtitle}>{item.subtitle}</Text>
              </View>

              <View style={styles.forumMeta}>
                <Text style={styles.forumDate}>{item.date}</Text>
                {item.badge ? (
                  <View style={styles.forumBadge}>
                    <Text style={styles.forumBadgeText}>{item.badge}</Text>
                  </View>
                ) : null}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.whiteSection}>
          <SectionHeader title="Blog" more />

          <Text style={styles.blogDesc}>
            Description text about something on this page that can be long or short.
          </Text>

          <View style={styles.tabBar}>
            {["Popular", "Recents", "Relevant"].map((tab) => {
              const active = selectedBlogTab === tab;
              return (
                <TouchableOpacity
                  key={tab}
                  style={[styles.tabItem, active && styles.tabItemActive]}
                  onPress={() => setSelectedBlogTab(tab)}
                >
                  <Text style={[styles.tabText, active && styles.tabTextActive]}>{tab}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {blogItems.map((item, index) => (
            <View key={index} style={styles.blogItem}>
              <Text style={styles.blogTitle}>{item.title}</Text>
              <Text style={styles.blogSubtitle}>{item.subtitle}</Text>
            </View>
          ))}
        </View>

        <View style={styles.blueSection}>
          <SectionHeader title="Events" more />

          <View style={styles.eventsRow}>
            {events.map((event, index) => (
              <View
                key={index}
                style={[styles.eventCard, event.large ? styles.eventLarge : styles.eventSmall]}
              >
                <Image source={{ uri: event.image }} style={styles.eventImage} />
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventSubtitle}>{event.subtitle}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.whiteSection}>
          <Text style={styles.newsletterTitle}>Get great info direct to your inbox</Text>
          <Text style={styles.newsletterText}>
            The latest news, blogs and resources, sent straight to your inbox every month.
          </Text>

          <View style={styles.newsletterRow}>
            <TextInput
              style={styles.newsletterInput}
              placeholder="Email*"
              placeholderTextColor="#9CA3AF"
              value={newsletterEmail}
              onChangeText={setNewsletterEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TouchableOpacity style={styles.newsletterBtn}>
              <Text style={styles.newsletterBtnText}>Button</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.subscribeRow}
            onPress={() => setSubscribeChecked(!subscribeChecked)}
          >
            <View style={styles.subscribeCircle}>
              {subscribeChecked ? <View style={styles.subscribeInner} /> : null}
            </View>
            <Text style={styles.subscribeText}>Subscribe to AIER’s weekly newsletter</Text>
          </TouchableOpacity>

          {/* <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.bottomNavItem}>
              <Ionicons name="home-outline" size={24} color="#151515" />
              <Text style={styles.bottomNavTextActive}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomNavItem}>
              <MaterialCommunityIcons name="school-outline" size={24} color="#A5A0B2" />
              <Text style={styles.bottomNavText}>Courses</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomNavItem}>
              <Feather name="user" size={22} color="#A5A0B2" />
              <Text style={styles.bottomNavText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomNavItem}>
              <Feather name="more-horizontal" size={22} color="#A5A0B2" />
              <Text style={styles.bottomNavText}>More</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>

        <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.bottomNavItem}>
      <Ionicons name="home-outline" size={24} color="#151515" />
      <Text style={styles.bottomNavTextActive}>Home</Text>
    </TouchableOpacity>

    {/* <TouchableOpacity style={styles.bottomNavItem}>
      <MaterialCommunityIcons name="school-outline" size={24} color="#A5A0B2" />
      <Text style={styles.bottomNavText}>Courses</Text>
    </TouchableOpacity> */}

    <TouchableOpacity
  style={styles.bottomNavItem}
  onPress={() => navigation.navigate("Courses")}
>
  <MaterialCommunityIcons name="school-outline" size={24} color="#A5A0B2" />
  <Text style={styles.bottomNavText}>Courses</Text>
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

    <TouchableOpacity style={styles.bottomNavItem}>
      <Feather name="more-horizontal" size={22} color="#A5A0B2" />
      <Text style={styles.bottomNavText}>More</Text>
    </TouchableOpacity>
  </View>
    </SafeAreaView>
  );
}

function SectionHeader({ title, more, colorTitle }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, colorTitle ? { color: colorTitle } : null]}>{title}</Text>
      {more ? (
        <TouchableOpacity style={styles.moreWrap}>
          <Text style={styles.moreText}>More</Text>
          <Feather name="chevron-right" size={22} color="#AAA1B2" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

function AvatarStack({ image, count }) {
  return (
    <View style={styles.avatarStack}>
      {Array.from({ length: count }).map((_, index) => (
        <Image
          key={index}
          source={{ uri: image }}
          style={[styles.stackAvatar, { left: index * 16, zIndex: count - index }]}
        />
      ))}
    </View>
  );
}

function StackLabel({ label, image }) {
  return (
    <View style={styles.stackLabelWrap}>
      <Image source={{ uri: image }} style={[styles.stackAvatar, { left: 0, zIndex: 3 }]} />
      <Image source={{ uri: image }} style={[styles.stackAvatar, { left: 16, zIndex: 2 }]} />
      <View style={styles.stackCountCircle}>
        <Text style={styles.stackCountText}>{label}</Text>
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
  paddingBottom: 120, // 👈 VERY IMPORTANT
},

  topHeader: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 18,
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
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

  greetingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  greetingBlock: {
    flex: 1,
    alignItems: "center",
    marginLeft: 36,
  },

  helloText: {
    fontSize: 16,
    color: "#84819B",
    fontWeight: "600",
    marginBottom: 8,
  },

  dateText: {
    fontSize: 18,
    color: "#111111",
    fontWeight: "800",
  },

  circleIconBtn: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 1.2,
    borderColor: "#D6D6D6",
    alignItems: "center",
    justifyContent: "center",
  },

  blueSection: {
    backgroundColor: "#DDF0F5",
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 26,
  },

  whiteSection: {
    backgroundColor: "#FFFFFF",
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

  membershipWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  membershipDate: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111111",
  },

  percentPill: {
    backgroundColor: "#045D82",
    paddingHorizontal: 26,
    paddingVertical: 12,
    borderRadius: 999,
  },

  percentPillText: {
    color: "#FFFFFF",
    fontSize: 18,
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

  selectBox: {
    height: 58,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  selectText: {
    fontSize: 15,
    color: "#A09BAD",
  },

  forumItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },

  forumAvatarWrap: {
    width: 112,
    justifyContent: "center",
  },

  forumBody: {
    flex: 1,
    paddingRight: 8,
  },

  forumTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#424043",
    marginBottom: 6,
  },

  forumSubtitle: {
    fontSize: 14,
    lineHeight: 18,
    color: "#8F8AA2",
    fontWeight: "600",
  },

  forumMeta: {
    alignItems: "flex-end",
    minWidth: 52,
  },

  forumDate: {
    fontSize: 14,
    color: "#76708B",
    fontWeight: "700",
    marginBottom: 8,
  },

  forumBadge: {
    minWidth: 22,
    height: 24,
    borderRadius: 6,
    backgroundColor: "#35B5F4",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
  },

  forumBadgeText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },

  avatarStack: {
    width: 70,
    height: 44,
    position: "relative",
  },

  stackAvatar: {
    position: "absolute",
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  singleAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  stackLabelWrap: {
    width: 86,
    height: 44,
    position: "relative",
  },

  stackCountCircle: {
    position: "absolute",
    left: 32,
    width: 58,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },

  stackCountText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#555",
  },

  blogDesc: {
    fontSize: 14,
    lineHeight: 22,
    color: "#A09BAD",
    marginBottom: 18,
  },

  blogItem: {
    marginBottom: 24,
  },

  blogTitle: {
    fontSize: 18,
    lineHeight: 24,
    color: "#1F1F1F",
    fontWeight: "800",
    marginBottom: 6,
  },

  blogSubtitle: {
    fontSize: 16,
    color: "#A09BAD",
    fontWeight: "700",
  },

  eventsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  eventCard: {
    backgroundColor: "transparent",
  },

  eventLarge: {
    width: "68%",
  },

  eventSmall: {
    width: "28%",
  },

  eventImage: {
    width: "100%",
    height: 175,
    borderRadius: 22,
    marginBottom: 12,
  },

  eventTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1F1F1F",
    marginBottom: 6,
  },

  eventSubtitle: {
    fontSize: 14,
    lineHeight: 18,
    color: "#A09BAD",
  },

  newsletterTitle: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "800",
    color: "#222222",
    marginBottom: 6,
  },

  newsletterText: {
    textAlign: "center",
    fontSize: 15,
    lineHeight: 24,
    color: "#333333",
    marginBottom: 20,
    paddingHorizontal: 20,
  },

  newsletterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  newsletterInput: {
    width: "68%",
    height: 60,
    backgroundColor: "#DDF0F5",
    borderRadius: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    color: "#111",
  },

  newsletterBtn: {
    width: "24%",
    height: 60,
    backgroundColor: "#045D82",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  newsletterBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  subscribeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
  },

  subscribeCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2.2,
    borderColor: "#045D82",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  subscribeInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#045D82",
  },

  subscribeText: {
    fontSize: 15,
    color: "#232323",
    fontWeight: "700",
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