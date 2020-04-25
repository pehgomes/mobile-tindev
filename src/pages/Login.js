import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';
// import { Container } from './styles';

export default function Login({navigation}) {
    const [user, setUser] = useState('');
    function handleLogin () {
        console.log('asd');
        navigation.navigate('Main');
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS == 'ios'}
            style={styles.container}>
            <Image source={logo}></Image>

            <TextInput
                autoCapitalize="none"
                autoCorrect="false"
                placeholder="Digite seu usuário no git"
                placeholderTextColor="#999" style={styles.input}
                value={user}
                onChangeText={setUser}></TextInput>

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        padding: 30
    }, input: {
        height: 46,
        alignSelf: "stretch",
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15
    }, button: {
        height: 46,
        alignSelf: "stretch",
        backgroundColor: "#df4723",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        marginTop: 10
    }, buttonText: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 16
    }
});
