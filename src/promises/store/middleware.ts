import { Dispatch } from 'redux';

export default () => ({ dispatch, getState }: any) => (next: Dispatch<void>) => (action: any): any =>
  action.then((resolved) => {
    if (typeof resolved === 'function') {
      return resolved(dispatch, getState);
    }

    const callAPIAction = resolved['CALL_API'];
    if (typeof callAPIAction === 'undefined') {
      return next(resolved);
    }

    const { types, result, ...rest } = callAPIAction;
    const [REQUEST, SUCCESS, FAILURE] = types;

    next({ ...rest, type: REQUEST });

    if (result.status === 200) {
      return Promise.resolve(next({...rest, type: SUCCESS, result}));
    } else {
      return Promise.resolve(next({...rest, type: FAILURE, result}));
    }
  });
