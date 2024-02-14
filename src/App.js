import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MusicContainer from "./components/Music/MusicContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile
                                   store={props.store}
                               />}
                        />
                        <Route path='/dialogs/*'
                               element={<DialogsContainer
                                   store={props.store}
                               />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<MusicContainer
                            store={props.store}
                        />}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
