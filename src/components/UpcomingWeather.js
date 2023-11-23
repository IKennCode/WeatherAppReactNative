import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, View} from "react-native";
import {Feather} from '@expo/vector-icons';

const DATA = [
    {
        dt_txt: "2022-08-30 16:00:00",
        main: {
          temp_min: 296,
          temp_max: 298,
        },
        weather: [
            {
              main: "Rain"
            }
          ]
    },
    {
          dt_txt: "2022-09-31 17:00:00",
          main: {
            temp_min: 77,
            temp_max: 88,
          },
          weather: [
              {
                main: "Clouds"
              }
            ]
        },
        {
            dt_txt: "2022-10-1 18:00:00",
            main: {
              temp_min: 89,
              temp_max: 90,
            },
            weather: [
                {
                  main: "Sunny"
                }
              ]
        }
]
//Initiaze component Item for rendering dt_txt,min,max and condition
const Item = (props) => {
    const {dt_txt, temp_max, temp_min, condition} = props
    return (
        <View>
            <Feather name={'sun'} size={50} color={"white"}/>
            <Text>{dt_txt}</Text>
            <Text>{temp_max}</Text>
            <Text>{temp_min}</Text>
            <Text>{condition}</Text>
        </View>
    )
}

//Initialize Upcomingweather for flatlist
const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <Item   condition={item.weather[0].main}
                dt_txt={item.dt_txt}
                temp_min={item.main.temp_min}
                temp_max={item.main.temp_max}
        />
    )


    return (
        <SafeAreaView style={styles.container}>
            <Text>UpcomingWeather</Text>
            <FlatList data={DATA} renderItem={renderItem}/>
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
