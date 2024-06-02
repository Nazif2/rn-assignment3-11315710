import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Frame1() {
    return (
        <View style={styles.header}>
            <View style={styles.HContainer}>
                <Text style={styles.hello}>Hello, Developers!</Text>
                <Text>Tasks Completed: 14</Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={require('../Images/image2.jpg')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    hello: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    imgContainer: {
        backgroundColor: '#fff',
        borderRadius: 35,
        padding: 5,
        elevation: 5,
    },
    HContainer: {
        alignItems: 'flex-start',
    },
});
