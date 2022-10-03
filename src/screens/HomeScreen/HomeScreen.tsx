import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Marker } from 'react-native-maps';
import Map from '../../components/molecules/Map';
import Page from '../../components/molecules/Page';
import { useAppSelector } from '../../hooks/storeHooks';
import AddMarkerModal from '../../modals/AddMarkerModal';
import { selectInitialRegion, selectMarkers } from '../../store/mapSlice';
import { MagicModalPortal, magicModal } from 'react-native-magic-modal';

export const HomeScreen: React.FC = () => {
    const [isOpenAddModal, setIsOpenAddModal] = useState(false);
    const navigation = useNavigation();
    const initialRegion = useAppSelector(selectInitialRegion);
    const markers = useAppSelector(selectMarkers);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Карта'
        })
    }, []);

    const handleMarkerPress = () => {
        // TODO: open modal with marker info
    }

    const handleOpenAddModal = async () => {
        // We can call it with or without props, depending on the requirements of the modal.
        const result = await magicModal.show(AddMarkerModal);

    };

    return (
        <Page style={styles.container}>
            <Map initialRegion={initialRegion}>
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        image={{ uri: marker.imageUrl }}
                        onPress={() => handleMarkerPress()}
                    />
                ))}
            </Map>
            <TouchableOpacity onPress={handleOpenAddModal} style={styles.addIcon} />
        </Page>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    addIcon: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'red'
    }
})