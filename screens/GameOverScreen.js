import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, ScrollView } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.screen}>
                    <TitleText>The Game is Over!</TitleText>
                    <View style={styles.imageContainer}>
                        <Image
                            // source={require('../assets/success.png')}
                            source={{ uri: 'http://mathematics-in-europe.eu/wp-content/uploads/2016/02/GuessMyNumber.png' }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.resultContainer}>
                        <BodyText style={styles.resultText}>
                            Your phoen needed {' '}
                            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess
                    the number {' '}
                            <Text style={styles.highlight}>{props.userNumber}</Text>.</BodyText>
                    </View>
                    <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 40,
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
});

export default GameOverScreen;