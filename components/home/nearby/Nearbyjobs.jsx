import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './nearbyjobs.style'

const Nearbyjobs = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text><TouchableOpacity><Text>Show all</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Nearbyjobs