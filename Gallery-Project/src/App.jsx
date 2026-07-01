import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);

    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );

    setUserData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="bg-black min-h-screen p-4 text-white">
      {loading && (
        <h3 className="text-center text-gray-400 mb-4">
          Loading next page...
        </h3>
      )}

      <div className="flex flex-wrap gap-4">
        {userData.map((elem) => (
          <Card key={elem.id} elem={elem} />
        ))}
      </div>

      <div className="flex justify-center gap-6 items-center mt-8">
        <button
          disabled={index === 1}
          className="bg-amber-400 text-black rounded px-4 py-2 disabled:opacity-50"
          onClick={() => {
            if (index > 1) setIndex(index - 1);
          }}
        >
          Prev
        </button>

        <h3>Page {index}</h3>

        <button
          className="bg-amber-400 text-black rounded px-4 py-2"
          onClick={() => setIndex(index + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;