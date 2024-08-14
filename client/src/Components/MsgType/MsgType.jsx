import React from "react";
import { Typography } from "@mui/material";
import "./MsgType.scss";
const Divider = () => {
  return (
    <div className="divider">
      <hr />
      <Typography>Today</Typography>
      <hr />
    </div>
  );
};

const TextMesage = (props) => {
  return (
    <div className="text">
      <div
        className="msg"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: props.msg.incoming ? "flex-start" : "flex-end",
        }}
      >
        <div
          className="content"
          style={{
            padding: "12px",
            backgroundColor: props.msg.incoming
              ? "rgb(242, 234, 234)"
              : "rgb(83, 132, 229)",
            borderRadius: "10px",
            width: "max-content",
          }}
        >
          <Typography
            variant="body2"
            style={{ color: props.msg.incoming ? "black" : "white" }}
          >
            {props.msg.message}
          </Typography>
        </div>
      </div>
    </div>
  );
};

const MediaMessage = (props) => {
  return (
    <div className="media">
      <div
        className="msg"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: props.msg.incoming ? "flex-start" : "flex-end",
        }}
      >
        <div
          className="img-container"
          style={{
            // backgroundColor: props.msg.incoming
            //   ? "rgb(242, 234, 234)"
            //   : "rgb(83, 132, 229)",
            borderRadius: "10px",
            width: "max-content",
          }}
        >
          <img
            src={props.msg.img}
            alt={props.msg.message}
            style={{ maxHeight: "210px", borderRadius: "10px" }}
          />
          <Typography>{props.msg.message}</Typography>
        </div>
      </div>
    </div>
  );
};

export { Divider, TextMesage, MediaMessage };
