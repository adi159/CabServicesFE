import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../../App'; // <-- App.tsx is at project root
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import styles from './HomeScreen.styles';
import LocalAutocomplete from '../../components/LocalAutocomplete/LocalAutocomplete';

type City = { name: string; lat?: number; lng?: number };

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [source, setSource] = useState<City | null>(null);
  const [destination, setDestination] = useState<City | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [refund, setRefund] = useState(false);

  // Show picker for selecting date
  const openDatePicker = () => setShowPicker(true);

  const onChangeDate = (event: Event, selected?: Date) => {
    // On Android, pressing cancel returns 'dismissed' event; selected may be undefined
    setShowPicker(Platform.OS === 'ios'); // keep open on iOS, close on Android
    if (selected) setDate(selected);
  };

  const onSearch = () => {
    if (!source || !destination || !date) {
      Alert.alert('Missing fields', 'Please choose Source, Destination and Date.');
      return;
    }

    // navigate to Results
    navigation.navigate('Results', {
      source,
      destination,
      date: date.toISOString().slice(0, 10),
      refund,
    });
  };

  return (
    <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        <Text style={styles.title}>Book a Cab</Text>

        {/* 4 car placeholders row (same as before) */}
        <View style={styles.carsRow}>
          <View style={styles.carItem}><View style={styles.carCircle} /></View>
          <View style={{ width: 12 }} />
          <View style={styles.carItem}><View style={styles.carCircle} /></View>
          <View style={{ width: 12 }} />
          <View style={styles.carItem}><View style={styles.carCircle} /></View>
          <View style={{ width: 12 }} />
          <View style={styles.carItem}><View style={styles.carCircle} /></View>
        </View>

        {/* Booking form */}
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Source</Text>
          <LocalAutocomplete
            placeholder="Enter pickup city"
            value={source ? source.name : ''}
            onSelect={(c) => setSource(c)}
            onClear={() => setSource(null)}
          />

          <Text style={[styles.inputLabel, { marginTop: 12 }]}>Destination</Text>
          <LocalAutocomplete
            placeholder="Enter drop city"
            value={destination ? destination.name : ''}
            onSelect={(c) => setDestination(c)}
            onClear={() => setDestination(null)}
          />

          <Text style={[styles.inputLabel, { marginTop: 12 }]}>Date</Text>

          <TouchableOpacity style={styles.inputTouchable} onPress={openDatePicker} activeOpacity={0.8}>
            <Text style={styles.inputTouchableText}>
              {date ? date.toISOString().slice(0, 10) : 'Select date'}
            </Text>
          </TouchableOpacity>

          {/* Show native picker */}
          {showPicker && (
            <DateTimePicker
              value={date ?? new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
              onChange={onChangeDate}
              minimumDate={new Date()} // prevent past dates
            />
          )}

          <View style={styles.refundRow}>
            <TouchableOpacity
              style={[styles.checkbox, refund && styles.checkboxChecked]}
              onPress={() => setRefund((s) => !s)}
              activeOpacity={0.8}
            >
              {refund && <View style={styles.checkboxInner} />}
            </TouchableOpacity>

            <View style={styles.refundTextWrap}>
              <Text style={styles.refundTextBold}>Get full refund on cancellation</Text>
              <Text style={styles.refundNoteSmall}>charges applicable</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.searchBtn} onPress={onSearch} activeOpacity={0.85}>
            <Text style={styles.searchBtnText}>Search Car</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
