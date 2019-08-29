import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { teamColors } from '../../helpers'

Icon.loadFont()

export default function SelectTeams ({ navigation }) {
  const selectedTeams = useSelector(state => state.teams.selectedTeams)

  function handleAddPlayers (teamName) {
    navigation.navigate('addPlayers', { teamName })
  }

  function handleEndSelection () {

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select Teams</Text>

      <TouchableOpacity onPress={() => handleAddPlayers('Green')} style={[styles.teamRow, { backgroundColor: teamColors['Green'] }]}>
        {selectedTeams.includes('Green') && <Icon name='check-circle' size={40} color='#fff' />}
        <Text style={styles.teamName}>Green Team</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleAddPlayers('Red')} style={[styles.teamRow, { backgroundColor: teamColors['Red'] }]}>
        {selectedTeams.includes('Red') && <Icon name='check-circle' size={40} color='#fff' />}
        <Text style={styles.teamName}>Red Team</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleAddPlayers('Yellow')} style={[styles.teamRow, { backgroundColor: teamColors['Yellow'] }]}>
        {selectedTeams.includes('Yellow') && <Icon name='check-circle' size={40} color='#fff' />}
        <Text style={styles.teamName}>Yellow Team</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleAddPlayers('Brown')} style={[styles.teamRow, { backgroundColor: teamColors['Brown'] }]}>
        {selectedTeams.includes('Brown') && <Icon name='check-circle' size={40} color='#fff' />}
        <Text style={styles.teamName}>Brown Team</Text>
      </TouchableOpacity>

      {!(selectedTeams.length >= 2) && <Text style={styles.minText}>Hey! you must choose at least 2 teams (:</Text>}

      <TouchableOpacity
        disabled={!(selectedTeams.length >= 2)}
        onPress={handleEndSelection}
        style={((selectedTeams.length >= 2)) ? styles.doneButton : { ...styles.doneButton, backgroundColor: '#d0d0d0' }}
      >
        <Text style={styles.teamName}>Done</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c093b2'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#fff'
  },
  teamRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
    marginHorizontal: 10,
    height: 100
  },
  teamName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  minText: {
    fontSize: 15,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  doneButton: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 30,
    height: 70,
    backgroundColor: '#e3ade3'
  }
})
