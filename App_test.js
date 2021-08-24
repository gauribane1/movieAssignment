/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer/reducer';
import StatckNavigator from './routes/homeStack';


const store= createStore(reducer);

class App extends React.Component{
  render(){
    return(
       <Provider store={store}>
          {/* <Login/> */}
          <StatckNavigator/>
        </Provider>
    )
  }
}
export default App;


