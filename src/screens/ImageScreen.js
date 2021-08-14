import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="forest"
                imageSource={require('../../assets/download.png')}
                score={1}
            />
            <ImageDetail
                title="beach"
                imageSource={require('../../assets/favicon.png')}
                score={2}
            />
            <ImageDetail
                title="moutain"
                imageSource={require('../../assets/download.png')}
                score={3}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;