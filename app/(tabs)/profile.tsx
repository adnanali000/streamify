import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 bg-primary">
    <ScrollView  contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View className="items-center mt-20 p-6">
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          className="w-28 h-28 rounded-full border-4"
        />
        <Text className="mt-4 text-2xl font-bold text-white">Adnan Musil</Text>
        <Text className="text-sm text-gray-400">Premium Member</Text>
        <Text className="mt-2 text-center text-gray-300">
          🎥 Movie Buff | Sci-Fi & Thriller Lover
        </Text>
      </View>

      {/* Stats */}
      <View className="flex-row justify-around bg-gray-900 py-4 rounded-2xl mx-6 mt-4">
        <View className="items-center">
          <Text className="text-xl font-bold text-white">56</Text>
          <Text className="text-gray-400 text-sm">Watched</Text>
        </View>
        <View className="items-center">
          <Text className="text-xl font-bold text-white">12</Text>
          <Text className="text-gray-400 text-sm">Watchlist</Text>
        </View>
        <View className="items-center">
          <Text className="text-xl font-bold text-white">8</Text>
          <Text className="text-gray-400 text-sm">Reviews</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="flex-row justify-center mt-6 gap-2">
        <TouchableOpacity className="bg-[#ab8bff] px-6 py-3 rounded-full">
          <Text className="text-white font-semibold">Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-800 px-6 py-3 rounded-full">
          <Text className="text-white font-semibold">Settings</Text>
        </TouchableOpacity>
      </View>

      {/* My Movies Section */}
      <View className="mt-8 px-6">
        <Text className="text-xl font-bold text-white mb-4">My Collection</Text>
        <View className="flex-row flex-wrap justify-between">
          {[
            "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg", 
            "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg", 
            "https://image.tmdb.org/t/p/w500/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg", 
            "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", 
          ].map((poster, index) => (
            <Image
              key={index}
              source={{ uri: poster }}
              className="w-[30%] h-40 rounded-xl mb-4"
            />
          ))}
        </View>
      </View>
    </ScrollView>
    </View>
  );
}
