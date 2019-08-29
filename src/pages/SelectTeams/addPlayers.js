import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ScrollView, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import { teamColors } from '../../helpers'

Icon.loadFont()

function AddPlayers ({ navigation }) {
  const teamName = navigation.getParam('teamName')
  const team = useSelector(state => state.teams[teamName])
  const dispatch = useDispatch()
  const [players, setPlayers] = useState(team.players)

  function addPlayer (playerName = '') {
    if (players.length === 5) return
    setPlayers(players => ([...players, playerName]))
  }

  function handleChange (playerName, index) {
    players[index] = playerName
    setPlayers(players => ([...players]))
  }

  function removePlayer (index) {
    players.splice(index, 1)
    setPlayers(players => ([...players]))
  }

  function handleEndSelection () {
    dispatch({ type: 'SET_PLAYERS', payload: { teamName, players } })
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView
      behavior='padding'
      enabled={Platform.OS === 'ios'}
      keyboardVerticalOffset={100}
      style={[styles.container, { backgroundColor: teamColors[teamName] }]}
    >
      <ScrollView>
        <View style={styles.players}>
          <Icon color='#fff' name='users' size={40} />
          <Text style={styles.title}> {teamName} Team Players</Text>
          {
            players.map((player, index) => {
              return (
                <View key={index} style={styles.newPlayer}>
                  <TextInput
                    placeholder={`Player ${index + 1} name`}
                    placeholderTextColor='#999'
                    maxLength={20}
                    style={styles.input}
                    onChangeText={(e) => handleChange(e, index)}
                    value={(typeof player === 'string') ? player : ''}
                  />
                  <TouchableOpacity onPress={() => removePlayer(index)}>
                    <Icon color='#fff' name='remove' size={35} />
                  </TouchableOpacity>
                </View>
              )
            })
          }

          <TouchableOpacity onPress={addPlayer} style={styles.newPlayerButton}>
            <Icon color='#fff' name='user-plus' size={20} />
            <Text style={styles.newPlayerButtonText}>new player</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleEndSelection}
          style={styles.doneButton}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#fff'
  },
  players: {
    padding: 30,
    alignItems: 'center'
  },
  newPlayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    height: 50,
    alignSelf: 'stretch',
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd'
  },
  newPlayerButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#c093b2',
    borderWidth: 3,
    borderRadius: 6,
    borderColor: '#c093b2',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    height: 60,
    width: 200
  },
  newPlayerButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 7
  },
  doneButton: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#c093b2',
    borderColor: '#c093b2',
    borderWidth: 3,
    borderRadius: 6,
    justifyContent: 'center',
    marginHorizontal: 30,
    height: 70
  },
  doneButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
})

AddPlayers.navigationOptions = screenProps => {
  const teamName = screenProps.navigation.getParam('teamName')
  return {
    headerStyle: { backgroundColor: teamColors[teamName] }
  }
}

export default AddPlayers
