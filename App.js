//First thing to do when creating a component is to import React from react
//Trivia: SafeAreaView is used to make your application responsive for different devices
import React from "react";

//import core component for react native
import { View, Text, SafeAreaView, StyleSheet } from "react-native";


const App = () => {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <Text>Current Weather ffsdfsdfsdfsd</Text>
      </View>
    </SafeAreaView>
    
  )

}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    
    paddingTop: Platform.OS === 'android' ? 50 : 0
},
  container: {
    backgroundColor: "pink",
    flex: 1,
    alignItems: "center"
  }
})

export default App;