import { useEffect } from "react";
import "./App.css";
import { Album, Photo } from "./components";
import useFetchAlbum from "./Hooks/useFetchAlbum";
import axios from "axios";
import { useState } from "react";
import useFetchPhotos from "./Hooks/useFetchPhotos";

function App() {
  const { data, loading } = useFetchAlbum();
  const [initial, setInitial] = useState(true);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);
  const { photos, photosloading } = useFetchPhotos(selectedAlbumId);

  const handleAlbumClick = (id) => {
    // console.log("album clicked", id);
    setSelectedAlbumId(id);
    setInitial(false);
  };

  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="w-2/6">
          <h1 className="pb-4 border-b-2 mb-4 sticky pl-1">Albums</h1>

          <div className="flex flex-col gap-2 h-screen overflow-y-auto pr-2 ">
            {loading && <p>Loading...</p>}
            {/* <Album {..."photo"} key={1} /> */}
            <Album
              title="as"
              key={9999}
              onClick={() => handleAlbumClick(9999)}
            />

            {data.map((item) => {
              return (
                <Album
                  title={item.title}
                  key={item.id}
                  onClick={() => handleAlbumClick(item.id)}
                />
              );
            })}
          </div>
        </div>
        <div className="flex-1 pl-4">
          <h1 className="pb-4 border-b-2 mb-4 ">Photos</h1>

          <div className="grid grid-cols-4 gap-4">
            {/* Only show this initially */}
            {initial && (
              <p className="col-span-4 text-gray-500">
                Click on an album to start viewing photos.
              </p>
            )}
            {photosloading && <p>Photos are Loading</p>}
            {photos.map((photo) => (
              <Photo {...photo} key={photo.id} />
            ))}

            {photos.length === 0 && !photosloading && !initial && (
              <p className="col-span-4">No photos found in this album</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
