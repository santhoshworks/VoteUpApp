import React from 'react';

import Home from './components/Home';
import Chat from './components/Chat';
import Splash from './components/Splash';
import Login from './components/Login/Login';

import {Platform} from 'react-native';

import {Router, Scene} from 'react-native-router-flux';

class App extends React.Component {
    render(){
        // return (
        //     <Router>
        //         <Scene key='root' style={{paddingTop:64}}>
        //             <Scene key='home' component={Home} title='Home' />
        //             <Scene key='Chat' component={Chat} title='Chat' />
        //         </Scene>
        //     </Router>
        // );

        return <Login />;
    }
};

export default App;