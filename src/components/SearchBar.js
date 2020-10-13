import React from 'react'
import {TextInput,View, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({onTermChange, term, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name="search" size={30} color="black" />
            <TextInput 
            value={term} 
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={onTermChange}
            style={styles.inputStyle} 
            placeholder='Search'
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#C6C3C2',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop:15,
        flexDirection: "row",
        
    },
    inputStyle:{
        flex:1 ,
        fontSize: 18,
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
})

export default SearchBar