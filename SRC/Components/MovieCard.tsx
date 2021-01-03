import * as React from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {MovieImagePath, Colors} from '../constants'
interface MovieCardProps {
    title: string;
    date: string;
    overview: string;
    poster: string;
    isLocal?: boolean
}

const MovieCard = (props: MovieCardProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=>Linking.openURL(`https://www.youtube.com/results?search_query=${props.title}`)}>
            <Image source={{uri : props.isLocal? props.poster : (props.poster? (MovieImagePath + props.poster) : 'https://reelcinemas.ae/Images/Movies/not-found/no-poster.jpg')}} style={styles.poster}/>
            <View style={{justifyContent:'flex-start', height:'100%', width:'65%' }}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.date}>{props.date}</Text>
                <Text style={styles.overView}>{props.overview}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MovieCard;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        padding: 12,
        borderRadius: 20,
        shadowRadius:20,
        shadowOffset:{
            width: 4,
            height:0
        },
        backgroundColor:'white',
        shadowColor: 'grey',
        shadowOpacity:0.7,
        elevation:6,
        marginHorizontal:12,
        minHeight:200,
        marginBottom:12,
        alignItems:'flex-start'
    },
    poster:{
        height:'100%',
        width: '30%',
        marginEnd: 16,
        resizeMode:'contain',
        borderRadius:10
    },
    title:{
        color: Colors.mainColorRed,
        fontSize:20, 
        fontWeight:'bold'
    },
    date:{
        color: 'black',
        fontSize:16,
        fontWeight:'800'
    },
    overView:{
        color:'#5C5C5C',
        fontSize:12,
        textAlign:'justify'
    }
});
