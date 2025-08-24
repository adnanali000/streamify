import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { getSavedMovies, removeMovie } from '@/utils/storage';
import { useFocusEffect } from "@react-navigation/native";
import { router } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const Saved = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMovies = async () => {
    setLoading(true)
    const data = await getSavedMovies();
    setMovies(data);
    setLoading(false)
  };

  useFocusEffect(
    useCallback(() => {
      loadMovies();
    }, [])
  );

  const handleRemove = async (id: number) => {
    await removeMovie(id);
    loadMovies();
  };

  return (
    <View className='bg-primary flex-1'>
      <View className='flex-1 bg-primary'>
        <Image
          source={images.bg}
          className='flex-1 absolute w-full z-0'
          resizeMode='cover'
        />

        <FlatList
          data={movies}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <MovieCard {...item} />}
          keyExtractor={(item) => item?.id?.toString()}
          className='px-5'
          numColumns={3}
          columnWrapperStyle={{
            // justifyContent: 'center',
            gap: 16,
            marginVertical: 16
          }}
          ListEmptyComponent={
              <View className='mt-10 px-5'>
                <Text className='text-center text-gray-500'>
                  No Saved Movie Found
                </Text>
              </View>
          }
          contentContainerStyle={{ paddingBottom: 100 }}
          ListHeaderComponent={
            <>
              <View className='w-full flex-row justify-center mt-20 items-center'>
                <Image source={icons.logo} className='w-12 h-10' />
              </View>

              <View className='my-5'>
                <SearchBar onPress={() => {
                  router.push("/search");
                }}
                  placeholder='Search for a movie' />
              </View>

              {movies?.length > 0 && <View>
                <Text className='text-lg text-white font-bold mb-3'>Saved Movies</Text>
              </View>}
            </>
          }
        />
      </View>
    </View>
  )
}

export default Saved

const styles = StyleSheet.create({})