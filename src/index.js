import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { UserProvider } from './context/UserContext';


ReactDOM.render(<BrowserRouter>
                    <UserProvider>
                     <App/>
                    </UserProvider>
                 </BrowserRouter>, document.getElementById('root'));
=======
import {UserProvider} from "./context/UserContext";
//import {ConnectToOtherUser} from "./ComponentUserProfile/UserProfile"
import {Feed} from './Components/ComponentFeed/Feed';


ReactDOM.render(<BrowserRouter>
    <UserProvider>
        <App/>
            
    </UserProvider>
</BrowserRouter>, document.getElementById('root'));
>>>>>>> origin/tigran

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

