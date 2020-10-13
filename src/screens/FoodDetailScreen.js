import React,{useState, useEffect} from 'react'
import {Text,View, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../api/yelp'

 const FoodDetailScreen = ({route}) => {
const [result, setResult] = useState(null)
const id = route.params.id;


        const getResult = async(id) => {
            const response = await yelp.get(`/${id}`)
            setResult(response.data)
        }

        useEffect(() => {
            getResult(id)
        }, [])

        if(!result){
            return null
        }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
            data={result.photos}
            renderItem={({item}) => {
                return <Image style={styles.pic} source={{uri: item}} />
            }}
            keyExtractor={photo => photo}
            />
        </View>
    )
}


const styles = StyleSheet.create({
pic: {
    width: 300,
    height:200
}
})

export default FoodDetailScreen
