import React from "react";
import { Button } from "./styled";

const RedButton = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default RedButton;
