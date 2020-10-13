import React from 'react'
import {Text,View, StyleSheet} from 'react-native'


 const FoodDetailScreen = ({route}) => {
    const id = route.params.id;
    console.log(id);
    return (
        <View>
            <Text>Details page</Text>
        </View>
    )
}


const styles = StyleSheet.create({

})

export default FoodDetailScreen
