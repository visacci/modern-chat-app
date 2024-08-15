import React, { useState } from "react";
import "./Conversation.scss";
import { Typography, IconButton, Fab, Tooltip } from "@mui/material";
import { IoPersonOutline } from "react-icons/io5";
import { PiSticker } from "react-icons/pi";
import { IoVideocamOutline } from "react-icons/io5";
import { IoImages } from "react-icons/io5";
import { MdCameraAlt } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuSend } from "react-icons/lu";
import { BsEmojiSmile } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Message from "../Message/Message";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
const Conversation = () => {
  const { mode } = useSelector((state) => state.mode);
  const cr = mode === "dark" ? "white" : "black";
  const cr2 = mode === "dark" ? "rgb(97, 97, 227)" : "black";
  const cr3 = mode === "dark" ? "rgb(52, 53, 88)" : "";
  const cr1 = mode === "dark" ? "rgb(26, 180, 39)" : "rgba(76, 78, 76, 0.906)";
  const [openPicker, setOpenPicker] = useState(false);
  const [openTool, setOpenTool] = useState(false);
  return (
    <div className="conv">
      <div className="header">
        <div className="person">
          <img src="/images/3.jpeg" alt="person" />
          <div className="detail">
            <Typography
              style={{ fontWeight: "bold", alignSelf: "flex-start", color: cr }}
            >
              Patrick T
            </Typography>
            <Typography style={{ alignSelf: "flex-start", color: cr1 }}>
              online
            </Typography>
          </div>
        </div>
        <div className="actions" style={{ color: cr }}>
          <IconButton>
            <IoVideocamOutline style={{ color: cr2 }} />
          </IconButton>
          <IconButton>
            <LuPhone style={{ fontSize: "20px", color: cr2 }} />
          </IconButton>
          <IconButton>
            <RiSearchLine style={{ fontSize: "20px", color: cr2 }} />
          </IconButton>
          <hr />
          <IconButton>
            <RiArrowDropDownLine style={{ fontSize: "35px", color: cr2 }} />
          </IconButton>
        </div>
      </div>
      <div className="messages" style={{ backgroundColor: cr3 }}>
        <Message />
      </div>
      <div className="footer">
        <div
          className="tool"
          style={{
            position: "relative",
            color: "white",
            backgroundColor: "red",
            display: openTool ? "inline" : "none",
          }}
        >
          <Tooltip title="Image" placement="right">
            <Fab
              style={{
                position: "absolute",
                top: "-70px",
                backgroundColor: "rgb(177, 177, 249)",
              }}
            >
              <IoImages style={{ fontSize: "20px", color: "white" }} />
            </Fab>
          </Tooltip>
          <Tooltip title="Document" placement="right">
            <Fab
              style={{
                position: "absolute",
                top: "-140px",
                backgroundColor: "rgb(149, 149, 245)",
              }}
            >
              <IoDocumentText style={{ fontSize: "20px", color: "white" }} />
            </Fab>
          </Tooltip>{" "}
          <Tooltip title="Camera" placement="right">
            <Fab
              style={{
                position: "absolute",
                top: "-210px",
                backgroundColor: "rgb(101, 101, 241)",
              }}
            >
              <MdCameraAlt style={{ fontSize: "20px", color: "white" }} />
            </Fab>
          </Tooltip>{" "}
          <Tooltip title="Sticker" placement="right">
            <Fab
              style={{
                position: "absolute",
                top: "-280px",
                backgroundColor: "rgb(61, 61, 239)",
              }}
            >
              <PiSticker style={{ fontSize: "20px", color: "white" }} />
            </Fab>
          </Tooltip>{" "}
          <Tooltip title="Contacts" placement="right">
            <Fab
              style={{
                position: "absolute",
                top: "-350px",
                backgroundColor: "rgb(94, 130, 89)",
              }}
            >
              <IoPersonOutline style={{ fontSize: "20px", color: "white" }} />
            </Fab>
          </Tooltip>
        </div>
        <div
          className="emo"
          style={{
            zIndex: "10",
            position: "fixed",
            bottom: "75px",
            right: "100px",
            display: openPicker ? "inline" : "none",
          }}
        >
          <Picker data={data} onEmojiSelect={console.log} theme={mode} />
        </div>
        <div className="input-container">
          <div className="input" style={{ backgroundColor: cr3 }}>
            <IconButton
              onClick={() => {
                setOpenTool((prev) => !prev);
              }}
            >
              <FaPlus style={{ color: cr2 }} />
            </IconButton>
            <input
              type="text"
              className="t"
              placeholder="Write a message..."
              style={{ color: cr }}
            />
            <IconButton
              onClick={() => {
                if (openPicker) {
                  setOpenPicker(false);
                } else {
                  setOpenPicker(true);
                }
              }}
            >
              <BsEmojiSmile style={{ color: cr2 }} />
            </IconButton>
          </div>
          <div className="send">
            <IconButton>
              <LuSend style={{ color: "white" }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
