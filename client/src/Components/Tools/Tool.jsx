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
import Tool from "../Tools/Tool";
const ToolElement = () => {
  return (
    <>
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
    </>
  );
};

export default ToolElement;
