import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "./reducers/Store";
import { fetchPoketmonDate } from "./reducers/actions/PoketmonActions";
import OhImg from "./img/oh.jpeg";
import BgImg from "./img/bg2.png";
import { url } from "inspector";

function App() {
  const poketmonReducer = useSelector(
    (state: RootReducerType) => state.PoketmonReducer
  );

  const [poketmonName, setPoketmonName] = useState("");
  const dispatch = useDispatch();

  const handlePoketmonName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPoketmonName(event.target.value);
  };

  const searchButtonTapped = () => {
    dispatch(fetchPoketmonDate(poketmonName.toLowerCase()));

    console.log(poketmonReducer);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div>
        <h2>오늘의 포켓몬은 뭘까요? </h2>

        <img src={OhImg} style={{ height: "200px" }} alt="오박사 이미지" />
        <p>
          오박사의 한마디 : pikachu,Metapod,ditto,Beedrill 등 <br />
          영어 이름으로 검색해주세요.
        </p>
      </div>

      <input value={poketmonName} onChange={handlePoketmonName} />
      <button onClick={searchButtonTapped}>포켓몬 찾기</button>
      {poketmonReducer.success && (
        <div style={{ background: "#fff", width: "60%", margin: "0 auto" }}>
          <p>{poketmonReducer.poketmon?.name}</p>
          <div>
            {poketmonReducer.poketmon?.abilities.map((item, key) => {
              return (
                <div key={`poketmonlist` + key}>
                  <p>스킬 : {item.ability.name}</p>
                  <p>힘 : {item.slot}</p>
                </div>
              );
            })}
          </div>
          <img
            src={poketmonReducer.poketmon?.sprites.front_default}
            alt={poketmonName}
          />
        </div>
      )}
    </div>
  );
}

export default App;
