import axios from 'axios';
import { Dispatch } from 'redux';

export default () => ({ dispatch, getState }: any) => (next: Dispatch<void>) => (action: any): any => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  const callAPIAction = action['CALL_API'];
  if (typeof callAPIAction === 'undefined' || !callAPIAction.promise) {
    return next(action);
  }

  const { promise, types, successCB, failureCB, ...rest } = callAPIAction;
  const [REQUEST, SUCCESS, FAILURE] = types;

  next({ ...rest, type: REQUEST });
  return promise(axios.create(), dispatch)
    .then(
      (result) => {
        if (successCB) successCB(result);
        setTimeout(() => Promise.resolve(), 500);
        return next({ ...rest, result, type: SUCCESS });
      },
      (error) => {
        if (failureCB) failureCB(error.response.data);
        if (error.message === 'Operation canceled due to new request.') {
          Object.assign(error, { response: { status: 429 } });
          next({ ...rest, error, type: FAILURE });
        }
        next({ ...rest, error, type: FAILURE });
        const authError = error.response && error.response.status === 401;
        return authError ? null : Promise.reject(error);
      },
    );
};
