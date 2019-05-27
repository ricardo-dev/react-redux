import {ToastAndroid} from 'react-native';

const logger = ({getState, dispatch}) => next => action => {
  if(action.type === 'INCREASE_COUNTER')
    ToastAndroid.show( 'MW '+action.payload.nome, 1);
  next(action)
}

export default logger
