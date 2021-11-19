import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import advancedData from "../../Data/AdvancedData";

export default function Advanced({ navigation }) {
  return (
    <View>
      <AdvancedText />
      <AdvancedCourse navigation={navigation} />
    </View>
  );
}

const AdvancedText = () => (
  <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
    Advanced
  </Text>
);

const AdvancedCourse = ({ navigation }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {advancedData.map((course, index) => (
        <TouchableOpacity
          onPress={() => navigation.push(course.screenName)}
          style={{
            marginTop: 15,
            marginRight: 28,
            shadowColor: "#000",
            shadowOffset: { width: -10, height: 15 },
            shadowRadius: 10,
            elevation: 10,
            shadowOpacity: 0.8,
          }}
          key={index}
        >
          <View
            style={{
              width: 164,
              height: 148,
              backgroundColor: "#fff",
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{
                uri: course.imgUrl,
              }}
              style={{ width: 70, height: 70, borderRadius: 100 }}
            />
            <Text style={{ fontSize: 25, marginTop: 5, fontWeight: "900" }}>
              {course.langName}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);
