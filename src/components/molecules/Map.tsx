import React from 'react';
import MapView, { Region } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { SCREEN_SIZE } from '../../utils/screenSize';

interface IProps {
    initialRegion: Region;
    children: React.ReactNode;
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: SCREEN_SIZE.sHeight,
        width: SCREEN_SIZE.sWidth,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

const Map: React.FC<IProps> = ({ initialRegion, children }) => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={initialRegion}
            >
                {children}
            </MapView>
        </View>
    );
};

export default Map;