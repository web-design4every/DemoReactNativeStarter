import React, { useState, useReducer } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}/>
            <View style={styles.viewTwoParent}>
            <View style={styles.viewTwoStyle}/>
            </View>
            <View style={styles.viewThreeStyle}/>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 200
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: 'flex-start',
        flex: 3
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: 'center',
        position: 'absolute',
        fontSize: 18,
        top: 100,
        flex: 3
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: 'flex-end',
        flex: 3,
        ...StyleSheet.absoluteFillObject
    },
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoParent: {
        height: 100,
        justifyContent: 'flex-end'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        top: 50
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    }
});

export default BoxScreen;