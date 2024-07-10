import { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert } from "react-native";
import { createRecord } from "../../lib/appwrite";
import { CustomButton, FormField } from "../../components";

const Create = () => {

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    user: "",
    email: "",
    description: "",
  });

  const submit = async () => {
    if (form.user === "" || form.email === "" || form.description === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {
      await createRecord(form);
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
        setForm({
            user: "",
            email: "",
            description: "",
        });
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 1000,
          }}
        >
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Create a new record
          </Text>

          <FormField
            title="User"
            value={form.user}
            handleChangeText={(e) => setForm({ ...form, user: e })}
            otherStyles="mt-10"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="description"
            value={form.description}
            handleChangeText={(e) => setForm({ ...form, description: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Create"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
