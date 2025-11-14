import React, { useMemo } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './ResultsScreen.styles';
import vehicles from '../../data/vehicles.json';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../../App'; // <-- root App

type Props = NativeStackScreenProps<RootStackParamList, 'Results'>;

const ResultRow: React.FC<{ item: any; onSelect: (id: string) => void }> = ({ item, onSelect }) => {
  const photos: string[] = item.photos || [];
  return (
    <TouchableOpacity style={styles.row} onPress={() => onSelect(item.id)} activeOpacity={0.85}>
      <View style={styles.photoWrap}>
        <Image source={{ uri: photos[0] }} style={styles.photo} />
      </View>

      <View style={styles.infoWrap}>
        <Text style={styles.carName}>{item.name}</Text>
        <Text style={styles.model}>{item.model}</Text>

        <View style={styles.metaRow}>
          <Text style={styles.rating}>⭐ {item.rating.toFixed(1)}</Text>
          <Text style={styles.seats}>{item.seats} seats</Text>
          <Text style={styles.price}>₹{item.pricePerKm}/km</Text>
        </View>

        <Text numberOfLines={1} style={styles.serving}>
          Serves: {item.servingCities.join(', ')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const ResultsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { source, destination, date } = route.params;

  // Simple filter: show vehicles that serve the source OR destination city
  const filtered = useMemo(() => {
    const sName = source?.name || '';
    const dName = destination?.name || '';
    return (vehicles as any[]).filter((v) =>
      v.servingCities.some((c: string) => c === sName || c === dName)
    );
  }, [source, destination]);

  const onSelect = (vehicleId: string) => {
    navigation.navigate('Booking', { vehicleId, bookingMeta: { source, destination, date } });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Available Cars</Text>
        <Text style={styles.headerSub}>{source?.name} → {destination?.name} • {date}</Text>
      </View>

      <FlatList
        data={filtered.length ? filtered : (vehicles as any[])}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <ResultRow item={item} onSelect={onSelect} />}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        contentContainerStyle={{ padding: 12, paddingBottom: 30 }}
      />
    </View>
  );
};

export default ResultsScreen;
