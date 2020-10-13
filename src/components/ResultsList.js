import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text>Results: 
            </Text>
            <FlatList 
            horizontal
            data={results}
            renderItem={({item}) => {
            return <Text>{item.name}</Text>
            }}
            keyExtractor={result => result.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ResultsList