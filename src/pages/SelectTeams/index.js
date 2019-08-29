import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { teamColors } from '../../helpers'

Icon.loadFont()

export default function SelectTeams ({ navigation }) {
  const [selectedTeams, setSelectedTeams] = useState([])
  const [teams, setTeams] = useState({
    greenTeam: false,
    redTeam: false,
    yellowTeam: false,
    brownTeam: false
  })

  function handleSelectTeams (teamName) {
    navigation.navigate('addPlayers', { teamName })
    // teams[teamName] = !teams[teamName]
    // const selected = Object.keys(teams).filter(team => (teams[team] === true))
    // setTeams(teams => ({ ...teams }))
    // setSelectedTeams(selected)
  }

  function endSelection () {
    navigation.navigate('addPlayers', { selectedTeams })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select Teams</Text>

      <TouchableOpacity onPress={() => handleSelectTeams('Green')} style={[styles.teamRow, { backgroundColor: teamColors['Green'] }]}>
        {teams.greenTeam && <Icon name='check-circle' size={40} color='#fff' />}
        <Text style={styles.teamName}>Green Team</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSelectTeams('Red')} style={[styles.teamRow, { backgroundColor: teamColors['Red'] }]}>
        {teams.redTeam && <Icon name='check-circle' size={40} color='#fff' />}
        <Text style={styles.teamName}>Red Team</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSelectTeams('Yellow')} style={[styles.teamRow, { backgroundColor: teamColors['Yellow'] }]}>
        {teams.yellowTeam && <Icon name='check-circle' size={40} color='#fff' />}
        <Text style={styles.teamName}>Yellow Team</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSelectTeams('Brown')} style={[styles.teamRow, { backgroundColor: teamColors['Brown'] }]}>
        {teams.brownTeam && <Icon name='check-circle' size={40} color='#fff' />}
        <Text style={styles.teamName}>Brown Team</Text>
      </TouchableOpacity>

      {!(selectedTeams.length >= 2) && <Text style={styles.minText}>Hey! you must choose at least 2 teams (:</Text>}

      <TouchableOpacity
        disabled={!(selectedTeams.length >= 2)}
        onPress={endSelection}
        style={((selectedTeams.length >= 2)) ? styles.doneButton : { ...styles.doneButton, backgroundColor: '#d0d0d0' }}>
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
