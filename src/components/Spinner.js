import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLOR } from '../config/config';

const Spinner = ({ size, color }) => (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color={color || COLOR.primary} />
    </View>
  );

const styles = {
  spinnerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Spinner;
