import React, { useState } from "react";
import s from "./block__Item.module.css";
import Block__ItemRIGHT from "./Block__ItemRIGHT";
import Block__ItemLEFT from "./Block__ItemLEFT";
import Block__Item840PX from "./Block__Item840PX";

const Block__Item = () => {
  //НЕ удалять )))
  //const [dateFly, setDateFly] = useState([
  //  {
  //    "airplane": "TK-442", "departure": "28 Feb 9:50", "town": "Lviv (LWO)",
  //    "arrived": "28 Feb 12:50", "town": "Istanbul (IST)", "time": "2 hours"
  //  },
  //  {
  //    "airplane": "TK-442", "departure": "28 Feb 15:20 ", "town": "Istanbul (IST)",
  //    "arrived": "28 Feb 18:25", "town": "New York (JFK)", "time": "2 hours"
  //  },
  //  {
  //    "airplane": "TK-442", "departure": "29 May 12:30", "town": "New York (JFK)",
  //    "arrived": "30 May 4:55", "town": "Istanbul (IST)", "time": "2 hours"
  //  },
  //  {
  //    "airplane": "TK-442", "departure": "30 May 7:45", "town": "Istanbul (IST)",
  //    "arrived": "30 May 9:45", "town": "Lviv (LWO)", "time": "2 hours"
  //  },
  //])
  return (
    <>
      <div className={s.block__Item}>
        <Block__ItemLEFT />
        <Block__ItemRIGHT />
      </div>
      <div className={s.block__Item840px}>
        <Block__Item840PX />
      </div>
    </>
  );
};

export default Block__Item;