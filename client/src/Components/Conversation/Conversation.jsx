import React from "react";
import "./Conversation.scss";
import { Typography, IconButton } from "@mui/material";
import { IoVideocamOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";
const Conversation = () => {
  const { mode } = useSelector((state) => state.mode);
  const cr = mode === "dark" ? "white" : "black";
  const cr2 = mode === "dark" ? "rgb(97, 97, 227)" : "black";
  const cr1 = mode === "dark" ? "rgb(26, 180, 39)" : "rgba(76, 78, 76, 0.906)";
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
      <div className="messages"></div>
      <div className="footer"></div>
    </div>
  );
};

export default Conversation;
