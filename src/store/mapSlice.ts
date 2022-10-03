import { createSlice } from '@reduxjs/toolkit';
import { Region, LatLng } from 'react-native-maps';
import type { RootState } from './store';

interface IMarker {
    type: 'cat' | 'dog';
    coordinate: LatLng;
    imageUrl: string;
}

interface MapState {
    initialRegion: Region;
    markers: IMarker[];
};

const initialState: MapState = {
    initialRegion: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    },
    markers: [
        {
            type: 'cat',
            coordinate: {
                latitude: 37.78825,
                longitude: -122.4324,
            },
            imageUrl: 'https://cdn-icons-png.flaticon.com/128/6855/6855215.png'
        }
    ]
};

export const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {

    },
})

export const { } = mapSlice.actions

export const selectInitialRegion = (state: RootState) => state.map.initialRegion;
export const selectMarkers = (state: RootState) => state.map.markers;

export default mapSlice.reducer