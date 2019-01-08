import { RouterState } from 'connected-react-router';

import { ILaunches } from 'common/types/entities';

export interface IGlobalState {
  entities: ILaunches;
  router?: RouterState;
}

export interface IAsyncCall {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
}