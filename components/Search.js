import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";

export default function CustomSearch() {
    return (
        <View style={styles.search}>
            <TextInput placeholder='🔍 Search' style={styles.searchBox} />
            <Image source={require('../Images/image3.jpg')} style={styles.filterIcon} />
        </View>
    );
}

const styles = StyleSheet.create({
    searchBox: {
        backgroundColor: '#F2F2F2',
        color: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        fontSize: 16,
        flex: 1,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        elevation: 5,
    },
    filterIcon: {
        marginLeft: 10,
        width: 24,
        height: 24,
        tintColor: 'black',
    },
});
