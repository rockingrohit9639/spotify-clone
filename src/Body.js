import React from 'react';
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from "./Header";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SongRow from "./SongRow";

function Body({ spotify })
{

    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    const playPlaylist = (id) =>
    {
        spotify.play({
            context_uri: `spotify:playlist:37i9dQZEVXcRXVso1wnlo0`,
        })
            .then((res) =>
            {
                console.log(res);
                spotify.getMyCurrentPlayingTrack().then((r) =>
                {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                })
            })
    }


    const playSong = (id) =>
    {
        spotify
            .play({
                uris: [`spotify:track:${ id }`],
            })
            .then((res) =>
            {
                console.log(res);
                spotify.getMyCurrentPlayingTrack().then((r) =>
                {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img
                    src={discover_weekly?.images[0].url}
                    alt="album"
                />

                <div className="body__infoText">
                    <strong> PLAYLIST </strong>
                    <h2> Discover Weekly </h2>
                    <p> {discover_weekly?.description} </p>
                    <p className="body__songsLength"> {discover_weekly?.tracks.items.length} songs </p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" onClick={playPlaylist} />
                    <FavoriteIcon fontSize="large" />
                    <MoreVertIcon />
                </div>

                {discover_weekly?.tracks.items.map((item, key) =>
                {
                    return <SongRow key={key} track={item.track} playSong={playSong} />
                })}
            </div>
        </div>
    )
}

export default Body;
