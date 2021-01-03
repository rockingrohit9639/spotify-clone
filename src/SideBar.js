import React from 'react';
import "./SideBar.css";
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';



function SideBar() {
    
    const [{ playlists }, dispatch] = useDataLayerValue();
    
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350-500x211.jpg"
                alt="spotify logo"
            />
            <SidebarOptions title="Home" Icon={ HomeIcon } />
            <SidebarOptions title="Search" Icon={SearchIcon} />
            <SidebarOptions title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className="sidebar__title"> PLAYLISTS </strong>
            <hr />

            {playlists?.items?.map((playlist, key) =>
            {
                return <SidebarOptions key={key} title={playlist.name} />
            })}

        </div>
    )
}

export default SideBar;
