import React, { useMemo, useState, useEffect } from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Keyboard,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import styles from './LocalAutocomplete.styles';
import cities from '../../data/cities.json';

type City = {
  name: string;
  lat?: number;
  lng?: number;
};

type Props = {
  placeholder?: string;
  value?: string;
  onSelect: (city: City) => void;
  onClear?: () => void;
  maxSuggestions?: number;
};

const LocalAutocomplete: React.FC<Props> = ({ placeholder = 'Search', value = '', onSelect, onClear, maxSuggestions = 8 }) => {
  const [q, setQ] = useState<string>(value);
  const [showList, setShowList] = useState<boolean>(false);

  useEffect(() => {
    setQ(value);
  }, [value]);

  const suggestions = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return [];
    return (cities as City[])
      .filter(c => c.name.toLowerCase().includes(t))
      .slice(0, maxSuggestions);
  }, [q, maxSuggestions]);

  const onSelectItem = (item: City) => {
    setQ(item.name);
    setShowList(false);
    Keyboard.dismiss();
    onSelect(item);
  };

  const onFocus = () => setShowList(true);
  const onBlur = () => {
    // keep list for a short time if needed — hide immediately to avoid flicker
    setTimeout(() => setShowList(false), 120);
  };

  const onClearPress = () => {
    setQ('');
    onClear && onClear();
    setShowList(false);
  };

  const onSubmitEditing = (_e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    // if exact match exists, select it
    const exact = (cities as City[]).find(c => c.name.toLowerCase() === q.trim().toLowerCase());
    if (exact) onSelectItem(exact);
    else setShowList(false);
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={q}
          onChangeText={setQ}
          onFocus={onFocus}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          returnKeyType="search"
        />
        {q.length > 0 && (
          <TouchableOpacity onPress={onClearPress} style={styles.clearBtn} activeOpacity={0.7}>
            <Text style={styles.clearText}>×</Text>
          </TouchableOpacity>
        )}
      </View>

      {showList && suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(i) => i.name}
          keyboardShouldPersistTaps="handled"
          style={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => onSelectItem(item)}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default LocalAutocomplete;
