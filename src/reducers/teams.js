const INITIAL_STATE = {
  selectedTeams: [],
  Green: { players: [], score: 0 },
  Red: { players: [], score: 0 },
  Yellow: { players: [], score: 0 },
  Brown: { players: [], score: 0 }
}

export default function teams (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_PLAYERS':
      state[action.payload.teamName].players = action.payload.players
      return { ...state }
    case 'SET_SELECTED_TEAMS':
      return { ...state, selectedTeams: [...action.payload.selectedTeams] }
    case 'INCREASE_SCORE':
      state[action.payload.teamName].score++
      return { ...state }
    default:
      return state
  }
}
