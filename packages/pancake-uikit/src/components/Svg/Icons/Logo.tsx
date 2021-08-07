import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="50px" viewBox="0 0 32 32" {...props}>
      <image width="20" height="30" href='/images/pixel/LogoWhite.gif'/>
    </Svg>
  );
};

export default Icon;
