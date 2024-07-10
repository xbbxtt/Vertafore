import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton } from "../components";

const Welcome = () => {


  return (
    <SafeAreaView className="bg-primary h-full">

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Text className="text-3xl text-white font-bold text-center text-secondary-200">Vertafore</Text>

          <Image
            source={images.empty}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover with{" "}
              <Text className="text-secondary-200">Vertafore</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[226px] h-[10px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <CustomButton
            title="Let's start!"
            handlePress={() => router.push("/home")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
