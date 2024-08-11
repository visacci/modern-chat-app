import React, { useState } from "react";
import { Switch } from "@mui/material";
import "./Dashboard.scss";
import { IoChatboxEllipsesOutline, IoPeople } from "react-icons/io5";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setMode } from "../../Redux/mode";
import { Chats } from "../Chats/Chats";

const Dashboard = () => {
  const [selected, setSelected] = useState("");
  const { mode } = useSelector((state) => state.mode);
  const bg = mode === "light" ? "white" : "rgb(52, 53, 88)";
  const bg2 = mode === "light" ? "black" : "white";
  const dispatch = useDispatch();
  console.log(mode);
  return (
    <div className="wp">
      <div className="dash" style={{ backgroundColor: bg }}>
        <div className="wrapper">
          <div className="icon">
            <img src="/images/icon2.jpeg" alt="icon" />
          </div>
          <div className="btns">
            <div
              className={selected === "1" ? "btn selected" : "btn"}
              onClick={() => {
                setSelected("1");
              }}
            >
              <IoChatboxEllipsesOutline
                style={{ fontSize: "25px", color: bg2 }}
              />
            </div>
            <div
              className={selected === "2" ? "btn selected" : "btn"}
              onClick={() => {
                setSelected("2");
              }}
            >
              <IoPeople style={{ fontSize: "25px", color: bg2 }} />
            </div>
            <div
              className={selected === "3" ? "btn selected" : "btn"}
              onClick={() => {
                setSelected("3");
              }}
            >
              <MdOutlineWifiCalling3 style={{ fontSize: "25px", color: bg2 }} />
            </div>
          </div>
          <hr />{" "}
          <div
            className={
              selected === "4" ? "btn settings selected" : "btn settings"
            }
            onClick={() => {
              setSelected("4");
            }}
          >
            <MdOutlineSettings style={{ fontSize: "25px", color: bg2 }} />
          </div>
        </div>
        <div className="avt">
          <div className="img-container">
            <img src="/images/4.jpeg" alt="avator" />
          </div>
          <Switch
            onChange={() => {
              dispatch(setMode());
            }}
          />
        </div>
      </div>
      <Chats />
    </div>
  );
};

export default Dashboard;
