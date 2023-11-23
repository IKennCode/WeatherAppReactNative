//First thing to do when creating a component is to import React from react
//Trivia: SafeAreaView is used to make your application responsive for different devices
import React from "react";

//import core component for react native
import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";


const App = () => {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text>Feel like 5</Text>
        <Text>High: 8 Low: 4</Text>
      </View>
    </SafeAreaView>
    
  )

}

const styles = StyleSheet.create({
 
  container: {
    backgroundColor: "pink",
    flex: 1,
    alignItems: "center"
  },
  temp: {
    color: "black",
    fontSize: 48

  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 0
  }
})

export default App;