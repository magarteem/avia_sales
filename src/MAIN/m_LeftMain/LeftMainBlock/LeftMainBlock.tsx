import React from "react";

import Block__Item from "./Block__Item/Block__Item";
import HowHour from "./HowHour";
import TitleComp from "./TitleComp";

type  TProps ={imgLink:string}
const LeftMainBlock: React.FC<TProps> = ({ imgLink }) => {
  return (
    <div>
      <TitleComp imgLink={imgLink} />
      <Block__Item />
      <HowHour />
      <Block__Item />
    </div>
  );
};

export default LeftMainBlock;