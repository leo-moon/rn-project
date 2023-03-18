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

// import RegistrationScreen from './Screens/RegistrationScreen';
// import FontsProject from './FontsProject'


const initialState = {
  login: '',
  email: '',
  password: '',
}

const portraitFlag = () => {
    const widthScreen = Dimensions.get('window').width;
    const heightScreen = Dimensions.get('window').height;
    if (heightScreen > widthScreen) { console.log('88'); return true }
    console.log('77');
    return false
};

let portrait = portraitFlag();
console.log(portrait);

SplashScreen.preventAutoHideAsync();
  
export default function RegistrationScreen() {
  console.log('1', state, portrait)
  
  const [state, setState] = useState(initialState)
  const [reset, setReset] = useState(false)
  const [isShowKeyboard, setIsShowKeyboard] = useState(false)
  const [dimensions, setDimensions] = useState(Dimensions.get('window').width)


  useEffect(() => {
    const onChange = () => {
      const widthScreen = Dimensions.get('window').width;
      const heightScreen = Dimensions.get('window').height;
        // portrait = async () => {
        //     if (heightScreen > widthScreen & !portrait) {
        //     await portraitFlag}
        // };
        portrait = heightScreen > widthScreen ? true : false;
        
        console.log('width', widthScreen, 'heightScreen', heightScreen, portrait);
    }
    Dimensions.addEventListener('change', onChange)
      return( () => {
          console.log('5', state, portrait);
          Dimensions.removeEventListener('change', onChange);
    })
  },[])

  const {login, email, password} = state
    console.log('2',state, portrait)

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Inter-Medium": require("../../assets/fonts/Inter-Medium.ttf"),  
  });
  
  const onLayoutRootView = useCallback(async () => {
  if (fontsLoaded) {
    await SplashScreen.hideAsync();
    console.log('3',state, portrait)
  }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log('4',state)
    
    return null;
  }

//  let portrait = portraitFlag();

  const keyboardHide = () => {
    setIsShowKeyboard(false);
          Keyboard.dismiss();
      if (reset) setState(initialState);
        portrait = portraitFlag();
    }

 
    console.log(portrait);

  return (
    <>
      <TouchableWithoutFeedback onPress={keyboardHide} > 
        <View style={styles.container}  onLayout={onLayoutRootView}>

          <ImageBackground
            style={styles.image}
            source={require('../../assets/images/mountains.jpg')}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios ' ? 'padding' : ''}
            >
              <View style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 0 : (Dimensions.get('window').height > Dimensions.get('window').width) ? 80 : 16,
              }}>
                <View style={styles.register}>
                                  
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>  Register  </Text>
                        {/* <Text style={{ fontFamily: 'Inter-Medium', fontSize: 30 }}>Inter Black</Text>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 30 }}>Inter Black</Text>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 30 }}>Inter Black</Text> */}
                    </View> 
                    <View style={{...styles.inputFields,
                    marginBottom: isShowKeyboard ? 32  : Dimensions.get('window').height > Dimensions.get('window').width ? 43 : 16, 
                    
                    } }>
                        <View>
                        {/* <Text style={styles.inputTitle}>Login</Text> */}
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
                        {/* <Text style={styles.inputTitle}>Email</Text> */}
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
                        {/* <Text style={styles.inputTitle}>Password</Text> */}
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
                    </View>
                    {!isShowKeyboard && <><TouchableOpacity
                                        activeOpacity={0.75}
                                        onPress={() => { 
                                            setReset(true);
                                            keyboardHide()
                                        }}
                                        style={styles.btn}>
                                        <Text style={styles.btnTitle}>SIGN IN</Text>
                                        </TouchableOpacity>
                    
                                                
                                    <TouchableOpacity
                                        activeOpacity={0.75}
                                        onPress={() => {
                                            setReset(true);
                                            keyboardHide()
                                        }}
                                        style={styles.in}>
                                        <Text style={styles.inTitle}>Have account? Login</Text>
                                      </TouchableOpacity>
                                      </>
                     }                 
                </View>

              </View>
            </KeyboardAvoidingView>
            
          </ImageBackground>
        </View>  
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: '#61dafb',
    fontFamily: 'Roboto'
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
      paddingHorizontal: 16,
      backgroundColor: '#FFF',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingTop: 92
    // marginBottom: 32,
    },
  register: {
    //   backgroundColor: '#FFF',
          //   borderRadius:25,
    //   
        
  },

 header: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    marginBottom: 32-16,
    color: '#212121',
    },
    inputFields: {
      
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
    height: 50,
    marginTop:16, 
    color: '#212121',
    padding: 16,
    // fontStyle: normal,
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    },
  
  // input, focus: {
  //   borderColor: '#FF6C00'
  // },
//   inputTitle: {
//     margin: 5,
//     fontSize: 16,
//   },
  btn: {
    height: 40,
    borderRadius: 20,
    borderWidth: 1, 
    // marginBotton: 46,
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
    },

in: {marginTop:16,
    justifyContent: 'center',
    alignItems: 'center',
        color: '#1B4371', 
    },
inTitle: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371'
    },
});
 