const INITIAL_STATE = {
  greenTeam: { players: [], score: 0 },
  redTeam: { players: [], score: 0 },
  yellowTeam: { players: [], score: 0 },
  brownTeam: { players: [], score: 0 }
}

export default function teams (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREASE_SCORE':
      state[action.payload.teamName].score++
      return { ...state }
    default:
      return state
  }
}
