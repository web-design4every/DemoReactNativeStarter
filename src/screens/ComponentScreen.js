import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentScreen = () => {
    const name = 'Tung Lam';

    return (
        <View>
            <Text style={styles.textStyle}>Getting start with react-native</Text>
            <Text style={styles.subHeader}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeader: {
        fontSize: 30
    }
});

export default ComponentScreen;