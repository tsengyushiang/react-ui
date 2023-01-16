import React from "react";
import { Input } from "./styled";

const RedInput = ({ text, onChange }) => {
  return <Input onChange={onChange} placeholder={text} />;
};

export default RedInput;
