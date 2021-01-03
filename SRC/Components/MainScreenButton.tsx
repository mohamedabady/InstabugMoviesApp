import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../constants';

interface MainScreenButtonProps {
    title: string;
    backgroundImage: string;
    containerStyle?: {};
    onPress: ()=>void;
}

const MainScreenButton = (props: MainScreenButtonProps) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[{ ...props.containerStyle }, styles.container]}>
            <Image source={{ uri: props.backgroundImage }} style={styles.backgroundImage} />
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default MainScreenButton;

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 300,
        shadowOpacity: 0.7,
        shadowColor: 'grey',
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 2,
        borderRadius: 20,
        alignItems:'center'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius:20
    },
    buttonText:{
        fontSize:32,
        color: 'white',
        fontWeight:'800',
        marginTop:'-42%',
        zIndex:1000
    }
});
