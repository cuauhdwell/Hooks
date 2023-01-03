import { Action, ActionType, CallBackFunction } from "@/types";

export default {
  getFact: (successCB?: CallBackFunction): Action => ({
    CALL_API: {
      types: [
        ActionType.GET_FACT_REQUEST,
        ActionType.GET_FACT_SUCCESS,
        ActionType.GET_FACT_FAILURE
      ],
      promise: client => client.get('https://uselessfacts.jsph.pl/random.json?language=en'),
      successCB,
    },
  }),
};
