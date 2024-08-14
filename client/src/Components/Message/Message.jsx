import React from "react";
import "./Message.scss";
import { Typography } from "@mui/material";

import { Chat_History } from "../../data/data";
import { TextMesage, Divider, MediaMessage } from "../MsgType/MsgType";
const Message = () => {
  return (
    <div className="m">
      <div className="msg">
        {Chat_History.map((msg) => {
          if (msg.type === "divider") {
            return <Divider />;
          } else if (msg.type === "msg") {
            if (msg.subtype === "img") {
              return <MediaMessage msg={msg} />; //image component
            } else if (msg.type === "doc") {
              return; // document componrt
            } else if (msg.type === "link") {
              return; // link component
            } else if (msg.type === "reply") {
              return; //reply comp
            } else {
              return <TextMesage msg={msg} />; // Text message component
            }
          }
        })}
      </div>
    </div>
  );
};

export default Message;
{
  /* <div class="chat-bubble">
        <div class="message-content">
          Hello, this is a message in a chat bubble!
        </div>
      </div>
      <div class="message-time">
        <Typography>12:34 PM</Typography>
      </div> */
}
