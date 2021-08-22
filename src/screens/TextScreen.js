import React, { useState, useReducer } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPasswod] = useState('');
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>Enter password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                secureTextEntry={true}
                onChangeText={(newValue) => setPasswod(newValue)}
            />
            <Text>My name is {name}</Text>
            {password.length < 4 ? <Text>Password must be 4 character</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'orange',
        borderWidth: 3
    }
});

export default TextScreen;