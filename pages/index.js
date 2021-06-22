import { useState } from 'react';
import { albumList, artistList, genreList } from '../assets/additionalAssets';
import { songList } from '../assets/songList';
import { AudioPlayer } from '../components/AudioPlayer';
import { FilterInput } from '../components/FilterInput';

export default function Home() {
  const [activeSong, setActiveSong] = useState(songList[0]);
  const [genreFilter, setGenreFilter] = useState('');
  const [artistFilter, setArtistFilter] = useState('');
  const [albumFilter, setAlbumFilter] = useState('');

  return (
    <div>
      <header>
        <img src="/play.svg" alt="play" />
        <h1>Tobi's SOUNDIFY</h1>
      </header>
        <AudioPlayer activeSong={activeSong} />
        <section className="filter-section">
          <FilterInput
            options={genreList} // genreList from assets directory
            value={genreFilter} // genreFilter from useState()
            filterSetter={setGenreFilter} // setGenreFilter from useState()
            name="genre"
          />
          <FilterInput
            options={artistList} // artistList from assets directory
            value={artistFilter} // artistFilter from useState()
            filterSetter={setArtistFilter} // setArtistFilter from useState()
            name="artist"
          />
          <FilterInput
            options={albumList} // albumList from assets directory
            value={albumFilter} // albumFilter from useState()
            filterSetter={setAlbumFilter} // setAlbumFilter from useState()
            name="album"
          />
        </section>
        <div className="song-list">
          <div className="song-header">
            <div>name</div>
            <div>album </div>
            <div>Year </div>
            <div>Artist </div>
            <div>play</div>
           <div>genre</div>
          </div>
        {songList

          .filter((song) => {
              let isVisible = true;
              if (genreFilter && genreFilter !== song.genre) {
                isVisible = false;
              }

              if (artistFilter && artistFilter !== song.artist) {
                isVisible = false;
              }

              if (albumFilter && albumFilter !== song.album) {
                isVisible = false;
              }

          return isVisible;
        })

        .map((song) => {
          return (
            <div
              key={song.id}
              className="song-container"
              onDoubleClick={() => {
                setActiveSong(song);
              }}
            >
              <div className="song-title">{song.name}</div>
              <div>{song.album}</div>
              <div>{song.release}</div>
              <div>{song.artist}</div>
              <button
                className="song-play"
                onClick={() => {
                  setActiveSong(song);
                }}
              >
                <img src="/play.svg" alt="play" />
              </button>
              <div>{song.genre}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ⚠️⚠️⚠️
// ⚠️⚠️⚠️ PLEASE IGNORE this section until you have completed steps  1, 2 and 3 ⚠️⚠️⚠️
// ⚠️⚠️⚠️
//
// --------------- Step 4 --------------
//
// Now, we are going to connect our front-end and back-end.
// Using Get Server Side Props (aka. GSSp) get the app data from the database instead of the assets files.
//
// 1. Import the database Util functions from utils/database.js
// 2. Get the data for the app. (albumList, artistList, genreList, songList)
// 3. Pass the data to the Page Component through props object
// 4. modify the code in the Home component to receive the data from database instead of assets
// 5. remove assets directory and the files inside
