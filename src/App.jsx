import React, { useState } from "react";
import { ChildArea } from "./ChildArea";

export const App =() => {

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.text);
  const onClickOpen = () => setOpen(!open);

  return (
    <div>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
};