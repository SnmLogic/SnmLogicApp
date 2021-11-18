import React from "react";
import { View, Image } from "react-native";

export default function WelcomeImage() {
  return (
    <View>
      <Image
        source={{
          uri: "https://yt3.ggpht.com/6_figlFTuVcThrBr7hbsML9eXhOf7RrrOUCP61jfLAG1pSFnpBD9fMMa_Oy72JfjQ4Tga3f2eg=s88-c-k-c0x00ffffff-no-rj-mo",
        }}
        style={{ width: 150, height: 150, borderRadius: 100 }}
      />
    </View>
  );
}
