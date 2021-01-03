import React from 'react';
import Body from './Body';
import './Player.css';
import SideBar from './SideBar';
import Footer from "./Footer";

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <SideBar />
                <Body spotify={spotify} />
            </div>

            <Footer spotify={spotify} />
        </div>
    );
}

export default Player;
