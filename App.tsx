/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//Pooja
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  console.log(isDarkMode);
  return (
 
    <View style={styles1.main}>
      <Text style={isDarkMode ? styles.whiteText:styles.darkText}>Prayas</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  whiteText: {
    color: 'white'
  },
  darkText: {
    color: 'black'
  }

})

const styles1=StyleSheet.create({
  main:{
    backgroundColor: 'grey',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})

export default App;
