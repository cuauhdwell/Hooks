import axios from "axios";
import { ActionType } from "@/types";

export default {
  getFact: () => axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
    .then((result) => ({
      CALL_API: {
        types: [
          ActionType.GET_FACT_REQUEST,
          ActionType.GET_FACT_SUCCESS,
          ActionType.GET_FACT_FAILURE
        ],
        result,
      },
    }))
};
