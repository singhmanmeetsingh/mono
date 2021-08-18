import React from "react";
import SelectBox from "../Input/SelectBox"
import classes from "./Button.module.scss";
import {button} from "../../utils/Constant"

 const Button =() => {
  console.log("classes",classes)
  return (
    <>
    <div>
      <SelectBox dropDownOptions={button}/>
    </div>
    </>
  );
}

export default Button;
