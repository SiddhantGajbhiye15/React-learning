import React, { useState } from "react";

const Card = ({ elem }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <a href={elem.url} target="_blank" rel="noreferrer">
        <div className="relative h-40 w-44 overflow-hidden rounded-xl">

          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-700"></div>
          )}

          <img
            src={elem.download_url}
            alt={elem.author}
            onLoad={() => setLoaded(true)}
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <h2 className="mt-2 font-bold text-lg">{elem.author}</h2>
      </a>
    </div>
  );
};

export default Card;