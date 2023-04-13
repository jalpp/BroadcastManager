import React from "react";

const LichessTV = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <iframe
        src="https://lichess.org/tv/frame?theme=brown&bg=dark"
        style={{
          width: "100%",
          height: "500px",
          maxWidth: "600px",
          margin: "0 20px 0 0",
        }}
        allowtransparency="true"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default LichessTV;
