import { createAppContainer, createStackNavigator } from 'react-navigation'

import Main from './pages/Main'
import SelectTeams from './pages/SelectTeams'
import AddPlayers from './pages/SelectTeams/addPlayers'

export default createAppContainer(
  createStackNavigator({
    main: Main,
    selectTeams: SelectTeams,
    addPlayers: AddPlayers
  }, {
    initialRouteName: 'main',
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#c093b2' }
    }
  })
)
