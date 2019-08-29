const INITIAL_STATE = {
  Green: { players: [''], score: 0 },
  Red: { players: [''], score: 0 },
  Yellow: { players: [''], score: 0 },
  Brown: { players: [''], score: 0 }
}

export default function teams (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_PLAYERS':
      state[action.payload.teamName].players = action.payload.players
      return { ...state }
    case 'INCREASE_SCORE':
      state[action.payload.teamName].score++
      return { ...state }
    default:
      return state
  }
}
