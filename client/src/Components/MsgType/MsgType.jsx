import React from "react";
import { Typography, Link, IconButton, Menu, MenuItem } from "@mui/material";
import "./MsgType.scss";
import { MdOutlineSettings } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Message_options } from "../../data/data";
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
        </div>{" "}
        <MessageOptions />
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
        <MessageOptions />
      </div>
    </div>
  );
};

const ReplyMessage = (props) => {
  return (
    <div className="reply">
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
            style={{
              color: props.msg.incoming ? "white" : "black",
              backgroundColor: props.msg.incoming ? "black" : "white",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            {props.msg.message}
          </Typography>
          <Typography>{props.msg.reply}</Typography>
        </div>
        <MessageOptions />
      </div>
    </div>
  );
};

const LinkMsg = (props) => {
  return (
    <div className="Link">
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={props.msg.preview}
            alt=""
            style={{ maxHeight: "210px", borderRadius: "10px" }}
          />
          <div className="li">
            <Typography variant="subtitle2">Create Chat App</Typography>
            <Typography
              variant="subtitle2"
              component={Link}
              to="//http://www.youtube.com"
            >
              www.youtube.com
            </Typography>
          </div>
          <Typography>{props.msg.message}</Typography>
        </div>
        <MessageOptions />
      </div>
    </div>
  );
};

const DocMessage = (props) => {
  return (
    <div className="doc">
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="docx">
            <MdOutlineSettings />
            <Typography variant="caption">Settings File</Typography>
            <IconButton>
              <RiArrowDropDownLine />
            </IconButton>
          </div>
          <Typography>{props.msg.message}</Typography>
        </div>
        <MessageOptions />
      </div>
    </div>
  );
};

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {" "}
      <BsThreeDotsVertical
        style={{ cursor: "pointer" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />{" "}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {Message_options.map((op) => {
          return (
            <MenuItem
              onClick={() => {
                handleClick;
              }}
            >
              {op.title}
            </MenuItem>
          );
        })}
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
};

export { Divider, TextMesage, MediaMessage, ReplyMessage, LinkMsg, DocMessage };
