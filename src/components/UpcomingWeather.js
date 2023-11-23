import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const UpcomingWeather = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>UpcomingWeather</Text>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 50 : 0
    }
})
export default UpcomingWeather;
