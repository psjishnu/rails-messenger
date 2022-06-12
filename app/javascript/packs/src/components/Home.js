import React, { useEffect, useState } from "react";
import { getMessages, postMessage } from "../helpers/apiRequest";
import { isEmptyOrSpaces } from "../helpers/functions";

function Home() {
  const [data, setdata] = useState([]);
  const [msg, setmsg] = useState("");
  const [loading, setloading] = useState(false);

  const getAllMessages = () =>
    getMessages().then((res) => {
      setdata(res.data);
      document.getElementById("chats").scrollTo(0, document.body.scrollHeight);
      setloading(false);
    });
  useEffect(() => {
    setloading(true);
    getAllMessages();
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    if (!isEmptyOrSpaces(msg) && !loading) {
      setmsg("");
      setloading(true);
      postMessage({ body: msg }).then((res) => {
        if (res.success) {
          getAllMessages();
        }
      });
    }
  };
  return (
    <>
      <h4 className="ui center aligned medium icon header">
        <i className="circular orange coffee icon"></i>
        Say Something
      </h4>

      <div className="ui two column grid">
        <div className="twelve wide column">
          <div className="ui fluid raised card chatbox">
            <div id="chats" className="content chatcontent">
              <div className="ui feed">
                {data.map((message) => (
                  <div key={message.id} className="event">
                    <div className="content">
                      <div className="summary">
                        <em>{message?.username} </em>:{message.body}
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
