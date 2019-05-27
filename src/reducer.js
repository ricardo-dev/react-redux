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

/*

const initialState = {
    access_token: 0,
    nome: '',
    tempo: 0,
    saldoMultify:50.00,
    saldoCartao:84.35,
    saldoOz:430,
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'SAVE_REDUX':
            if(action.payload.token){
                AsyncStorage.setItem('@MultifyApp:access_token', action.payload.token);
            }
            if(action.payload.tempo){
                AsyncStorage.setItem('@MultifyApp:expires_in', JSON.stringify(action.payload.tempo) );
            }
            AsyncStorage.setItem('@MultifyApp:nome', 'Usuario Redux');

            return {
                ...state,
                access_token: action.payload.token,
                tempo: action.payload.tempo,
                nome: 'Usuario redux',
            }

        case 'LOGOUT_SUCCESS':
            AsyncStorage.removeItem('@MultifyApp:access_token');
            AsyncStorage.removeItem('@MultifyApp:expires_in');
            AsyncStorage.removeItem('@MultifyApp:nome');
            return {
                ...state,
                access_token: 0,
                tempo:0,
                nome:'',
            }

        case 'INIT_APP':
            return {
                ...state,
                nome: action.payload.nome,
                tempo: action.payload.tempo,
                access_token: action.payload.token,
            }

        case 'ALTERA_SALDO_MULTIFY':
            return {
                ...state,
                saldoMultify: state.saldoMultify + action.payload.saldoMultify,
            }

        default:
        break;
    }
    return state;
}
*/
