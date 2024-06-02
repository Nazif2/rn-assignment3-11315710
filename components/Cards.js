import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Cards({ name, taskno, image }) {
    return (
        <View style={styles.cards}>
            <Image style={styles.img} resizeMode="cover" source={image} />
            <View style={styles.badge}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.taskNoText}>Task: {taskno}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cards: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    badge: {
        marginTop: 10,
        alignItems: 'center',
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    taskNoText: {
        fontSize: 14,
        color: 'gray',
    },
});
