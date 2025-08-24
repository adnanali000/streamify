import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "savedMovies";

export const saveMovie = async (movie: any) => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    const movies = json ? JSON.parse(json) : [];

    // Prevent duplicates
    const exists = movies.some((m: any) => m.id === movie.id);
    if (!exists) {
      movies.push(movie);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
    }
  } catch (error) {
    console.error("Error saving movie", error);
  }
};

export const getSavedMovies = async () => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  } catch (error) {
    console.error("Error loading saved movies", error);
    return [];
  }
};

export const removeMovie = async (id: number) => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    let movies = json ? JSON.parse(json) : [];
    movies = movies.filter((m: any) => m.id !== id);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  } catch (error) {
    console.error("Error removing movie", error);
  }
};

export const isMovieSaved = async (id: number) => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    const movies = json ? JSON.parse(json) : [];
    return movies.some((m: any) => m.id === id);
  } catch (error) {
    console.error("Error checking movie", error);
    return false;
  }
};