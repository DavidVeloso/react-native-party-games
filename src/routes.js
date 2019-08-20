import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation'
import Main from './pages/Main'
import SelectTeams from './pages/SelectTeams'
import AddPlayers from './pages/SelectTeams/addPlayers'

export default createAppContainer(
  createStackNavigator({
    AddPlayers,
    SelectTeams,
    Main
  })
)
