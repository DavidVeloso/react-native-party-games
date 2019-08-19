import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import gnillepsIcon from '../../assets/gnillepsIcon.png'
import imageActionIcon from '../../assets/imageActionIcon.png'
import whoAmIIcon from '../../assets/whoAmIIcon.png'

export default function Main () {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Select one Game </Text>
      <View style={styles.gamesRow}>
        <TouchableOpacity style={styles.gameButton}>
          <Image style={styles.gameIcon} source={gnillepsIcon} />
          <Text style={styles.gameName}> Gnilleps </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameButton}>
          <Image style={styles.gameIcon} source={imageActionIcon} />
          <Text style={styles.gameName}> Image and Action</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gamesRow}>
        <TouchableOpacity style={styles.gameButton}>
          <Image style={styles.gameIcon} source={whoAmIIcon} />
          <Text style={styles.gameName}> Who Am I? </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#babcdd'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#fff'
  },
  gamesRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    marginTop: 30
  },
  gameIcon: {
    width: 100,
    height: 100
  },
  gameButton: {
    alignItems: 'center'
  },
  gameName: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#fff'
  }
})
