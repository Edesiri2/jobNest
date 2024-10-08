import React from 'react'
import { View,Image, Text, TouchableOpacity } from 'react-native'


import styles from './screenheader.style'

const ScreenHeaderBtn = (iconUrl, dimension) => {
  return (
    <TouchableOpacity style={styles.btnContainer} >
      <Image
        source={iconUrl}
        resizeMode="contain"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn