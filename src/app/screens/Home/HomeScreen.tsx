// src/app/screen/Home/HomeScreen.tsx
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../../App'; // adjust if App.tsx path differs
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
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

  const openDatePicker = () => setShowPicker(true);

  // Correct typing here: use DateTimePickerEvent
  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date | undefined) => {
    // On Android the picker returns an event.type: 'set' | 'dismissed'
    // On iOS the event may behave slightly different; selectedDate can be undefined when dismissed
    if (Platform.OS === 'android') {
      // close the picker on Android regardless of set/dismissed
      setShowPicker(false);
      if (event.type === 'set' && selectedDate) {
        setDate(selectedDate);
      }
      // if dismissed, do nothing
    } else {
      // iOS: keep open if you want (common pattern: iOS inline spinner), but here we close only if needed
      if (selectedDate) setDate(selectedDate);
      // keep showPicker as true for iOS if you want inline; here we leave it true so the component can remain visible on iOS
      // If you prefer to close on iOS after selection, uncomment:
      // setShowPicker(false);
    }
  };

  const onSearch = () => {
    if (!source || !destination || !date) {
      Alert.alert('Missing fields', 'Please choose Source, Destination and Date.');
      return;
    }

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

        {/* 4 car placeholders row */}
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
