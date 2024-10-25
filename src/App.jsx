import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Gelen veriyi kontrol ediyoruz
        setData(data.results[0]); // İlk kullanıcıyı alıyoruz
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>
            {data.name
              ? data.name.first + " " + data.name.last
              : "ID mevcut değil"}
          </h2>{" "}
          {/* Null kontrolü */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
