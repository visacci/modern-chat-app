import React from "react";
import "./Chats.scss";
import { IconButton, Typography, Button, Stack } from "@mui/material";
import { TbHistoryToggle } from "react-icons/tb";
import { IoArchiveOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
export const Chats = () => {
  const { mode } = useSelector((state) => state.mode);
  const bg = mode === "dark" ? "rgb(52, 53, 88)" : "";
  const cr = mode === "dark" ? "white" : "";
  const cr2 = mode === "dark" ? "rgb(140, 140, 241)" : "";
  const cr3 = mode === "dark" ? "rgb(75, 84, 105)" : "";

  return (
    <div className="chat" style={{ backgroundColor: bg }}>
      <div className="text">
        <Typography variant="h5" style={{ color: cr }}>
          Chats
        </Typography>
        <IconButton>
          <TbHistoryToggle style={{ color: cr2 }} />
        </IconButton>
      </div>
      <div className="search">
        <input
          type="text"
          className="sh"
          placeholder="Search..."
          style={{ backgroundColor: cr3, color: cr }}
        />
      </div>
      <div className="arch">
        <IconButton style={{ color: cr }}>
          <IoArchiveOutline />
        </IconButton>
        <Typography style={{ color: cr2 }}>Archived</Typography>
      </div>
      <hr />
      <div className="scroll">
        <div className="pinned">
          <Typography
            style={{
              alignSelf: "flex-start",
              marginLeft: "15px",
              marginTop: "10px",
              color: cr2,
            }}
          >
            Pinned
          </Typography>
          <ChatElement />
          <ChatElement />
        </div>
        <div className="pinned">
          <Typography
            style={{
              alignSelf: "flex-start",
              marginLeft: "15px",
              marginTop: "10px",
              color: cr2,
            }}
          >
            All Chats
          </Typography>
          <ChatElement />
          <ChatElement />
          <ChatElement />
          <ChatElement />
          <ChatElement />
          <ChatElement />
        </div>
      </div>
      <Typography
        variant="h4"
        style={{ fontWeight: "bold", color: cr, alignSelf: "center" }}
      >
        Chat App
      </Typography>
    </div>
  );
};

const ChatElement = () => {
  const { mode } = useSelector((state) => state.mode);
  const cr4 = mode === "dark" ? "rgb(43, 44, 46)" : "";
  const cr = mode === "dark" ? "white" : "";
  const cr1 = mode === "dark" ? "white" : "rgb(81, 88, 90)";
  return (
    <div className="elem" style={{ backgroundColor: cr4 }}>
      <div className="cont">
        <img src="/images/4.jpeg" alt="pic" />
        <span className="online"></span>
        <div className="name">
          <Typography
            style={{
              fontWeight: "bold",
              alignSelf: "flex-start",
              color: cr,
              fontSize: "14px",
            }}
          >
            Visacci Allanz
          </Typography>
          <Typography
            style={{
              alignSelf: "flex-start",
              fontSize: "12px",
              color: cr1,
            }}
          >
            Patrick, wasap Bro!
          </Typography>
        </div>
      </div>
      <div className="time">
        <span style={{ color: cr, fontSize: "12px" }}>9:30</span>
        <span className="x" style={{ color: cr }}>
          2
        </span>
      </div>
    </div>
  );
};
