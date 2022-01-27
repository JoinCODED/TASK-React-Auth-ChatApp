import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="__main">
        <div className="main__chatbody">
          <Switch>
            <Route path="/room/:roomSlug">
              <ChatRoom />
            </Route>
            <Route exact path="/">
              <center>
                <ChatRoomsList />
              </center>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
