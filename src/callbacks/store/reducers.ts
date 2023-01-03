import { Reducer } from 'redux';
import { Action, ActionType, State } from '@/types';

const initialState: State = {
  facts: [],
}

export const selectFacts = (state: State) => state.facts;

const reducer: Reducer<State> = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_FACT_SUCCESS:
      return {
        facts: [
          ...state.facts,
          {
            id: action.result.data.id,
            text: action.result.data.text
          },
        ],
      };
  }

  return state;
};

export type RootState = ReturnType<typeof reducer>;

export default reducer;
