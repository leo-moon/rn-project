import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

function FontsProject() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      console.log('5', state)

    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log('6', state)

    return null;
  }

  return (onLayoutRootView)
}
  
export default FontsProject
//     <View style={styles.container} >
      // <Text style={{ fontFamily: 'Inter-Medium', fontSize: 30 }}>Inter Black</Text>
      // <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 30 }}>Inter Black</Text>

      // <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 30 }}>Inter Black</Text>
      
//       <Text style={{ fontSize: 30 }}>Platform Default</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });