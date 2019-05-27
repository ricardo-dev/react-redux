import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';
import Details from './pages/details';

export default createStackNavigator(
    {
        Main,
        Details,
    },
    {
        navigationOptions:{
            header:null
        }
    }
);