import { useState, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';

import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen'
// import FontsProject from './FontsProject'


// const initialState = {
//   login: '',
//   email: '',
//   password: '',
// }

// let portrait = true;

// SplashScreen.preventAutoHideAsync();
  
export default function App() {
  // console.log('1', state)
  
  // const [state, setState] = useState(initialState)
  // const [reset, setReset] = useState(false)
  // const [isShowKeyboard, setIsShowKeyboard] = useState(false)
  // const [dimensions, setDimensions] = useState(Dimensions.get('window').width)


  // useEffect(() => {
  //   const onChange = () => {
  //     const widthScreen = Dimensions.get('window').width;
  //     const heightScreen = Dimensions.get('window').height;
  //     if (heightScreen > widthScreen) { portrait = true }
  //     else {portrait = false}
  //     console.log('width',widthScreen, 'heightScreen',heightScreen,portrait)
  //   }
  //   Dimensions.addEventListener('change', onChange)
  //   return () => {
  //     Dimensions.removeEventListener('change', onChange)
  //   }
  // },[])

  // const {login, email, password} = state
  //   console.log('2',state)

  // const [fontsLoaded] = useFonts({
  //   "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  //   "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  //   "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  // });
  
  // const onLayoutRootView = useCallback(async () => {
  // if (fontsLoaded) {
  //   await SplashScreen.hideAsync();
  //   console.log('3',state)
  // }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   console.log('4',state)
    
  //   return null;
  // }



  // const keyboardHide = () => {
  //   setIsShowKeyboard(false);
  //   Keyboard.dismiss();
  //   if (reset) {setState(initialState)}
  // }



  return (
    <>
      {/* <TouchableWithoutFeedback onPress={keyboardHide} > 
        <View style={styles.container}  onLayout={onLayoutRootView}>

          <ImageBackground
            style={styles.image}
            source={require('./assets/images/mountains.jpg')}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios ' ? 'padding' : ''}
            > */}
              <LoginScreen
                // state={state}
                // initialState={initialState}
                // reset={reset}
              />

              {/* <View style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 32 : portrait ? 80 : 16
              }}>
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>  Register  </Text>

                  <Text style={{ fontFamily: 'Inter-Medium', fontSize: 30 }}>Inter Black</Text>
                  <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 30 }}>Inter Black</Text>
                  <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 30 }}>Inter Black</Text>
                  
      


                </View>
                
                <View>
                  <Text style={styles.inputTitle}>Login</Text>
                  <TextInput
                    style={styles.input}
                    textAlign={'left'}
                    placeholder="Login"
                    value={login}
                    onFocus={() => {
                      setIsShowKeyboard(true)
                      // borderColor: '#FF6C00'
                    }}
                    onChangeText={(value) => setState((prevState) =>
                      ({ ...prevState, login: value }))} />
                  
                </View>
                <View>
                  <Text style={styles.inputTitle}>Email</Text>
                  <TextInput
                    style={styles.input}
                    textAlign={'left'}
                    placeholder="Email"
                    value={email}
                    onFocus={() => setIsShowKeyboard(true) }
                    onChangeText={(value) => setState((prevState) =>
                      ({ ...prevState, email: value }))}/>
                </View>
                <View>
                  <Text style={styles.inputTitle}>Password</Text>
                  <TextInput
                    style={styles.input}
                    textAlign={'left'}
                    placeholder="Password"
                    value={password}
                    onFocus={() => setIsShowKeyboard(true)}
                    onChangeText={(value) => setState((prevState) =>
                      ({ ...prevState, password: value }))}
                    secureTextEntry={true} />
                </View>
                <TouchableOpacity
                  activeOpacity={0.75}
                  onPress={() => {
                    setReset(true)
                    keyboardHide()
                  }}
                  style={styles.btn}>
                  <Text style={styles.btnTitle}>SIGN IN</Text>
                </TouchableOpacity>

              </View>
            </KeyboardAvoidingView>
            
          </ImageBackground>
        </View>  
      </TouchableWithoutFeedback> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61dafb',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: 'center',
    justifyContent: 'flex-end',
    // alignItems: 'center'
  },
// })




 
  form: {
    marginHorizontal: 16,
    // marginBottom: 32,
  },

 header: {
alignItems: 'center'
  },
  headerTitle: {
    fontSize: 30,
    marginBottom: 32
 },
  input: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    borderRadius: 5,
    height: 50,
    color: '#f0f8ff',
    padding: 15,
    fontFamily: 'Roboto',
    // fontStyle: normal,
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  // input, focus: {
  //   borderColor: '#FF6C00'
  // },
  inputTitle: {
    margin: 5,
    fontSize: 16,
  },
  btn: {
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
    backgroundColor: 'transparent',
    borderColor: '#f0f8ff',
      },
      android: {
    backgroundColor: '#FF6C00',
    borderColor: 'transparent',
      }
    })
  },
  btnTitle: {
    fontSize: 16,
    color: Platform.OS === 'ios' ? '#4169e1': '#FFFFFF',
  }
});
