import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native'

Icon.loadFont()

export default function SelectTeams ({ navigation }) {
  const [hasTeam, setHasTeams] = useState(false)
  const [teams, setTeams] = useState({
    greenTeam: false,
    redTeam: false,
    yellowTeam: false,
    brownTeam: false
  })

  function handleSelectTeams (teamName) {
    teams[teamName] = !teams[teamName]
    const hasSelected = Object.values(teams).filter(selected => selected)
    setTeams(teams => ({ ...teams }))
    setHasTeams(hasSelected.length >= 2)
  }

  function endSelection () {
    // Go To Team Members
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select Teams</Text>

      <TouchableOpacity onPress={() => handleSelectTeams('greenTeam')} style={[styles.teamRow, { backgroundColor: '#89afb4' }]}>
        {teams.greenTeam && <Icon name='check-circle' size={40} color='#fff' />}
        <Text style={styles.teamName}>Green Team</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSelectTeams('redTeam')} style={[styles.teamRow, { backgroundColor: '#d6735d' }]}>
        {teams.redTeam && <Icon name='check-circle' size={40} color='#fff' />}
        <Text style={styles.teamName}>Red Team</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSelectTeams('yellowTeam')} style={[styles.teamRow, { backgroundColor: '#efcc82' }]}>
        {teams.yellowTeam && <Icon name='check-circle' size={40} color='#fff' />}
        <Text style={styles.teamName}>Yellow Team</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSelectTeams('brownTeam')} style={[styles.teamRow, { backgroundColor: '#826860' }]}>
        {teams.brownTeam && <Icon name='check-circle' size={40} color='#fff' />}
        <Text style={styles.teamName}>Brown Team</Text>
      </TouchableOpacity>

      {!hasTeam && <Text style={styles.minText}>Hey! you must choose at least 2 teams (:</Text>}

      <TouchableOpacity
        disabled={!hasTeam}
        onPress={endSelection}
        style={(hasTeam) ? styles.doneButton : { ...styles.doneButton, backgroundColor: '#d0d0d0' }}>
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
