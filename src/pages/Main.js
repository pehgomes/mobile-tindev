import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function Main() {
    return (
        <View style={style.container}>
            <Text style={style.input}> Olá, bem vindo !</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        padding: 30
    },
    input: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold"
    },
});
