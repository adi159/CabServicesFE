import React, { useMemo } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styles from './BookingScreen.styles';
import vehicles from '../../data/vehicles.json';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../../App'; // <-- root App

type Props = NativeStackScreenProps<RootStackParamList, 'Booking'>;

const BookingScreen: React.FC<Props> = ({ route }) => {
  const { vehicleId, bookingMeta } = route.params;
  const vehicle = useMemo(() => (vehicles as any[]).find(v => v.id === vehicleId), [vehicleId]);

  if (!vehicle) {
    return (
      <View style={styles.screen}>
        <Text style={styles.err}>Vehicle not found.</Text>
      </View>
    );
  }

  const onProceed = () => {
    // In real app: call backend to create booking, then go to payment/ride screen
    Alert.alert('Proceeding', `Booking ${vehicle.name} on ${bookingMeta?.date}\nFrom: ${bookingMeta?.source?.name}\nTo: ${bookingMeta?.destination?.name}`);
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      <Image source={{ uri: vehicle.photos[0] }} style={styles.hero} />

      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.title}>{vehicle.name}</Text>
          <Text style={styles.price}>₹{vehicle.pricePerKm}/km</Text>
        </View>

        <Text style={styles.model}>{vehicle.model} • {vehicle.seats} seats</Text>
        <Text style={styles.rating}>⭐ {vehicle.rating.toFixed(1)}</Text>

        <Text style={styles.sectionTitle}>Serves</Text>
        <Text style={styles.serving}>{vehicle.servingCities.join(', ')}</Text>

        <Text style={styles.sectionTitle}>Photos</Text>
        <View style={styles.photosRow}>
          {vehicle.photos.map((p: string, i: number) => (
            <Image key={i} source={{ uri: p }} style={styles.smallPhoto} />
          ))}
        </View>

        <TouchableOpacity style={styles.bookBtn} onPress={onProceed} activeOpacity={0.85}>
          <Text style={styles.bookBtnText}>Proceed to Ride Booking</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BookingScreen;
