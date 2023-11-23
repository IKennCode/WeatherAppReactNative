//First thing to do when creating a component is to import React from react
//Trivia: SafeAreaView is used to make your application responsive for different devices
import React from "react";

//import core component for react native
import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";


const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
       
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
          <View style={styles.highLowWrapper}>
              <Text style={styles.highLow}>High: 8</Text>
              <Text style={styles.highLow}>Low: 4</Text>
          </View>
      </View>
          <View style={styles.bodyWrapper}>
            <Text style={styles.description}>It's Sunny</Text>
            <Text  style={styles.message}>It's Perfect t-shirt weather</Text>
          </View>
      
    </SafeAreaView>
    
  )

}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    alignItems: "center"
  },
  temp: {
    color: "black",
    fontSize: 48

  },
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    backgroundColor: "yellow"
  },
  feels : {
    fontSize: 30,
    color: "black"
  },
  highLow : {
  fontSize: 20,
  color: "black"
  },
  highLowWrapper: {
    flexDirection : "row "
  },
  bodyWrapper : {
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  description : {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default App;