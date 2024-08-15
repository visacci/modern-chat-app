import React from "react";
import "./Message.scss";
import { Typography } from "@mui/material";

import { Chat_History } from "../../data/data";
import {
  TextMesage,
  Divider,
  MediaMessage,
  ReplyMessage,
  LinkMsg,
  DocMessage,
} from "../MsgType/MsgType";
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
            } else if (msg.subtype === "doc") {
              return <DocMessage msg={msg} />; // document componrt
            } else if (msg.subtype === "link") {
              return <LinkMsg msg={msg} />; // link component
            } else if (msg.subtype === "reply") {
              return <ReplyMessage msg={msg} />; //reply comp
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
