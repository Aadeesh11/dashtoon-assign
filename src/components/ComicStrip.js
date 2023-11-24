import React, { useEffect, useRef, useState } from "react";
import Panel from "./Panel";
import "./ComicStrip.css";
import Nav from "./Nav";

export default function ComicStrip(props) {
  const { setShowInfo } = props;

  const images = [
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
  ];
  const [panels, setPanels] = useState(images);
  const [resize, setResize] = useState(0);
  const [edit, setEdit] = useState(true);

  const handleResize = () => {
    setResize(window.innerWidth + window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="ComicStrip">
      <h1>Make your own Comic</h1>
      <p>- Aadeesh Oswal</p>
      <Nav
        edit={edit}
        setEdit={(val) => setEdit(val)}
        setShowInfo={setShowInfo}
      />
      {panels.map((obj, index) => {
        return (
          <Panel
            key={index}
            index={index}
            img={obj.img}
            resize={resize}
            edit={edit}
          />
        );
      })}
    </div>
  );
}
