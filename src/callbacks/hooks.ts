import { bindActionCreators } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector as baseUseSelector } from "react-redux";
import actions from "./store/action-creators";
import { RootState } from "./store/reducers";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export const useSelector: TypedUseSelectorHook<RootState> = baseUseSelector;
