import { AxiosInstance } from 'axios';

export enum ActionType {
  GET_FACT_REQUEST = 'GET_FACT_REQUEST',
  GET_FACT_SUCCESS = 'GET_FACT_SUCCESS',
  GET_FACT_FAILURE = 'GET_FACT_FAILURE',
}

export interface Fact {
  id: string;
  text: string;
}

export interface State {
  facts: Fact[];
}

export type CallBackFunction = () => void;

export interface GetFactAction {
  type: ActionType.GET_FACT_REQUEST
    | ActionType.GET_FACT_SUCCESS
    | ActionType.GET_FACT_FAILURE;
  result: {
    data: {
      id: string;
      language: string;
      permalink: string;
      source_url: string;
      source: string;
      text: string;
    }
  };
};

export interface PromiseActionType {
  [type: string]: {
    types: string[],
    promise: (axios: AxiosInstance) => void,
    successCB?: CallBackFunction,
  }
  result?: any,
}

export type Action = PromiseActionType
  | GetFactAction;
