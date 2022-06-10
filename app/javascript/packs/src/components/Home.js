import React, { useEffect, useState } from "react";
import { getMessages } from "../helpers/apiRequest";

function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getMessages().then((res) => {
      setdata(res.data);
    });
  }, []);
  return (
    <>
      <h4 className="ui center aligned medium icon header">
        <i className="circular orange coffee icon"></i>
        Say Something
      </h4>

      <div className="ui two column grid">
        <div className="twelve wide column">
          <div className="ui fluid raised card chatbox">
            <div className="content">
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
              <form className="ui reply form">
                <div className="field">
                  <div className="ui fluid icon input">
                    <input type="text" placeholder="Enter a message..." />
                    <i className="bordered inverted orange edit icon"></i>
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
