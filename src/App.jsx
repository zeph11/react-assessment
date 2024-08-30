import "./App.css";
import { Album, Photo } from "./components";
import useFetchAlbum from "./hooks/useFetchAlbum";
import { useState } from "react";
import useFetchPhotos from "./hooks/useFetchPhotos";

function App() {
  const { data, loading } = useFetchAlbum();
  const [initial, setInitial] = useState(true);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);
  const { photos, photosLoading } = useFetchPhotos(selectedAlbumId);

  //Dummy photo data to test on photos failed to load
  const dummy = {
    title: "sdfs",
    url: "https://via.placeholder.com/7s600/31588e1b6",
  };

  const handleAlbumClick = (id) => {
    // console.log("album clicked", id);
    setSelectedAlbumId(id);
    setInitial(false);
  };

  return (
    <div className="container h-screen">
      <div className="flex flex-row">
        <div className="w-2/6">
          <h1 className="pb-4 border-b-2 mb-4 sticky pl-1">Albums</h1>

          <div className="flex flex-col gap-2 h-screen overflow-y-auto pr-2 ">
            {loading && <p>Loading...</p>}

            {data.map((item) => {
              return (
                <Album
                  title={item.title}
                  key={item.id}
                  onClick={() => handleAlbumClick(item.id)}
                  className={
                    selectedAlbumId === item.id
                      ? "border-2 border-blue-500  transition-all delay-75"
                      : ""
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="flex-1 pl-4 ">
          <h1 className="pb-4 border-b-2 mb-4 ">Photos</h1>

          <div className="grid grid-cols-4 gap-4 ">
            {/* Only show this initially */}
            {initial && (
              <p className="col-span-4 text-gray-500">
                Click on an album to start viewing photos.
              </p>
            )}
            {photosLoading && <p>Photos are Loading</p>}
            {/* Calling the dummy data to imitate photos are do not load */}
            {/* <Photo key={9999} {...dummy} /> */}
            {/* //mapping through the photos to render each photo */}
            {photos.map((photo) => (
              <Photo {...photo} key={photo.id} />
            ))}
            {photos.length === 0 && !photosLoading && !initial && (
              <p className="col-span-4">No photos found in this album</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
