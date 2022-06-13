import React, { useEffect, useState } from "react";
import { postMessage } from "../helpers/apiRequest";
import { isEmptyOrSpaces } from "../helpers/functions";
import MessagesChannel from "channels/messages_channel";
import "channels";

function Home() {
  const [data, setdata] = useState([]);
  const [msg, setmsg] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    MessagesChannel.received = (response) => setdata(response?.messages ?? []);
  }, []);
  useEffect(() => {
    const messageList = document.getElementById("messages");
    messages.scrollTo(0, messageList.scrollHeight + 23);
  }, [data]);
  const sendMessage = (e) => {
    e.preventDefault();
    if (!isEmptyOrSpaces(msg) && !loading) {
      setmsg("");
      setloading(true);
      postMessage({ body: msg }).then(() => {
        setloading(false);
      });
    }
  };
  return (
    <>
      <h4
        onClick={() =>
          document
            .getElementById("messages")
            .scrollTo(0, window.screen.availHeight)
        }
        className="ui center aligned medium icon header"
      >
        <i className="circular orange coffee icon"></i>
        Say Something
      </h4>

      <div className="ui two column grid">
        <div className="twelve wide column">
          <div className="ui fluid raised card chatbox">
            <div id="messages" className="content">
              <div className="ui feed">
                {data.map((message) => (
                  <div key={message.id} className="event">
                    <div className="content">
                      <div className="summary">
                        <em>{message?.username} </em>:{` ${message.body}`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="extra content">
              <form onSubmit={sendMessage} className="ui reply form">
                <div className="field">
                  <div className="ui fluid icon input">
                    <input
                      value={msg}
                      onChange={(e) => setmsg(e.target.value)}
                      type="text"
                      placeholder="Enter a message..."
                    />
                    <button
                      disabled={loading}
                      className="ui icon button"
                      type="submit"
                    >
                      <i className="inverted orange edit icon"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="four wide column">
          <div className="ui fluid raised card chatbox">
            <div className="content">
              <div className="ui inverted vertical menu">
                <a className="active item">Home</a>
                <a className="item">Messages</a>
                <a className="item">Friends</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
