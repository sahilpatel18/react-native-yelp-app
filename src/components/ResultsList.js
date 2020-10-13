import React from 'react'
import {View, Text, StyleSheet, FlatList,TouchableOpacity} from 'react-native'
import { withNavigation } from '@react-navigation/compat';
import ResultsDetail from '../components/ResultsDetail'

const ResultsList = ({title, results,navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            renderItem={({item}) => {
            return( 
            <TouchableOpacity onPress={() => navigation.navigate('Details',{ id: item.id})}>
                <ResultsDetail result={item} />
            </TouchableOpacity>

            )
            }}
            keyExtractor={result => result.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10,
    },
})

export default withNavigation(ResultsList)