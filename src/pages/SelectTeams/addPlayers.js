import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ScrollView, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'

Icon.loadFont()

export default function AddPlayers ({ navigation }) {
  const [players, setPlayers] = useState([''])

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

  return (
    <KeyboardAvoidingView
      behavior='padding'
      enabled
      keyboardVerticalOffset={110}
      style={styles.container}
      // enabled={Platform.OS === 'ios'}
    >
      <ScrollView>
        <View style={styles.players}>
          <Icon color='#fff' name='users' size={40} />
          <Text style={styles.title}> Blue Team Players</Text>
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
          // disabled={!hasTeam}
          // onPress={endSelection}
          style={styles.doneButton}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c093b2'
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
    backgroundColor: '#e3ade3',
    borderWidth: 3,
    borderRadius: 6,
    borderColor: '#e3ade3',
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
    backgroundColor: '#e3ade3',
    borderColor: '#e3ade3',
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
