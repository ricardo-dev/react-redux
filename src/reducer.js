import {ToastAndroid, Alert} from 'react-native';

const initialState = {
  counter:0,
}

const reducer = (state = initialState, action ) => {
        if(action.type === 'INCREASE_COUNTER'){
          ToastAndroid.show( 'RE '+action.payload.nome, 1);
          return {
              counter: state.counter+1
          }
        }
        else if(action.type === 'DECREASE_COUNTER'){
          return {
              counter: state.counter-1
          }
        }
        else if(action.type === 'ERROR'){
            ToastAndroid.show('Error request',1);
            return{
                ...state,
            }
        } else if(action.type === 'POST'){
            Alert.alert(action.payload.nome);
            return{
                ...state,
            }
        }
        else if(action.type === 'GET'){
            Alert.alert(action.payload.nome)
            return{
                ...state,
            }
        }
        return state;
}

export default reducer;


