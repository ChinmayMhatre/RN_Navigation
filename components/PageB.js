import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

const PageB = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate("PageA")} >
                <Text style={styles.text}>Go to PageA</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    }
})

export default PageB
