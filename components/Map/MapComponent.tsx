import React from 'react';
import { Platform, View } from 'react-native';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import MapView from 'react-native-maps';

const MapComponent = ({ location }) => {
  if (Platform.OS === 'web') {
    // Renderiza o mapa usando react-leaflet na web
    return (
      <Map center={[location.latitude || 0, location.longitude || 0]} zoom={15} style={{ height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {location.latitude !== null && location.longitude !== null && (
          <Marker position={[location.latitude, location.longitude]}>
            <Popup>Você está aqui.</Popup>
          </Marker>
        )}
      </Map>
    );
  }

  // Renderiza o mapa usando react-native-maps em dispositivos móveis
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location.latitude || 0,
          longitude: location.longitude || 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location.latitude !== null && location.longitude !== null && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Sua Localização"
            description="Você está aqui."
          />
        )}
      </MapView>
    </View>
  );
};

export default MapComponent;
