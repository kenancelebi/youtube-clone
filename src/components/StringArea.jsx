import { useState } from "react";

const StringArea = ({ text }) => {
  const [expand, setExpand] = useState(false);
  let shortText = text;
  if (!expand && text.length > 300) {
    shortText = text.slice(0, 300) + "...daha fazla";
  }
  return (
    <div onClick={() => setExpand(!expand)}>
      {shortText.split("\n").map((line) => (
        <span>
          {line} <br />
        </span>
      ))}
    </div>
  );
};

export default StringArea;
