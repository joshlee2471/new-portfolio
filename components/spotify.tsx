import { useState, useEffect } from "react";
import axios from "axios";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

const accessToken = "BQDHKAVZyJJCQJkDyJMopHKXQNuAXOO51BHxB9ciMNwDISI5EyIGtyOiygXMh97WoFg8qvU4dJWId54UzXQgJDSt7SQNRqwB6L_VrUMegWazdnjfI-kHSKT9-ekE9fQjw3LgXDHDbkqii5h-pvAyqj2SiAT0gzCcMoViTcLSX6XaV66mmHo0a2mDqGLxHEoK1UmP_soL4w"

export default function RecentlyListened() {
  const [tracks, setTracks] = useState([]);
  
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setTracks(response.data.items);
        console.log(response.data.items)
      } catch (error) {
        console.error(error);
      }
    };

    fetchTracks();
  }, []);

  return (
    <>
      {tracks.map((track) => (
          <div key={ track.track.id } className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl p-3 ">
            <div className="flex justify-between">
              <div className="w-3/5">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    alt={ track.track.name }
                    src={ track.track.album.images[0].url }
                    fill
                    className="rounded-xl object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="">
                <Image
                  alt="spotify-logo"
                  src="https://static-00.iconduck.com/assets.00/spotify-icon-512x512-t4mg5nue.png"
                  height={25}
                  width={25}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-white font-semibold text-sm">{ track.track.name }</h1>
              <p className="mt-0.5 text-white text-xs">{ track.track.album.artists[0].name }</p>
            </div>
          </div>
      ))}
    </>
  );
}
