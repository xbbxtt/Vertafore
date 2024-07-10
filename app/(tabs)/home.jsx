import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, RefreshControl, Text, View } from "react-native";

import useAppwrite from "../../lib/useAppwrite";
import { getAllRecords } from "../../lib/appwrite";
import { EmptyState } from "../../components";

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllRecords);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
            <View className="flex justify-center flex-1 ml-5 gap-y-1">
                <Text className="font-psemibold text-lg text-white"
              numberOfLines={1} >
                {item.user} {"  "} {item.email} {"  "} {item.description}
                </Text>
            </View>
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Shiran
                </Text>
              </View>
            </View>
          </View>
        )}

        ListEmptyComponent={() => (
          <EmptyState
            title="No Record Found"
            subtitle="No record created yet"
          />
        )}

        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

    </SafeAreaView>
  );
};

export default Home;
