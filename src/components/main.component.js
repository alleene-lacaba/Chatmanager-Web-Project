import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Navbar from "./navbar.component"
import Home from "./home.component"
import LoginBot from "./loginBot.component"
import StartApp from "./startApp.component"
import SMSToUser from "./sms-user.component"
import ResToM from "./respond-to-message.component"
import SetBotStatus from "./set-bot-status.component"
import Footer from "./footer.component"




const routes = [
  {
    path: "/home",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <Home/>
  },
  {
    path: "/startApp",
    sidebar: () => <div></div>,
    main: () => <StartApp/>
  },
  {
    path: "/loginbot",
    sidebar: () => <div></div>,
    main: () => <LoginBot/>
  },
  {
    path: "/setbotstatus",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <SetBotStatus/>
  },
  {
    path: "/sms-to-user",
    sidebar: () => <div></div>,
    main: () => <SMSToUser/>
  },
  {
    path: "/respond-to-message",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <ResToM/>
  },
  {
    path: "/setup-command-listener",
    sidebar: () => <div></div>,
    main: () => <h2>Set Up Command Listener</h2>
  },
  {
    path: "/send-messaage-to-all-channel",
    sidebar: () => <div></div>,
    main: () => <h2>Send Message to all Channel</h2>
  },
  {
    path: "/send-message-channel",
    sidebar: () => <div></div>,
    main: () => <h2>Send Message Channel</h2>
  }
  
];

export default function Main() {
  return (
    
      <Router>
        <Navbar/>
        <div className="trc-row">
          <div className="trc-col-1-third">
            <ul className="trc-ul">
              <li className="trc-side-bar-nav">
                <Link to="/home" style={{ textDecoration: 'none', color: 'black'}} >About</Link>
              </li>
              <li className="trc-side-bar-nav">
                <Link to="/startApp" style={{ textDecoration: 'none', color: 'black'}}>Start App</Link>
              </li>
              <li className="trc-side-bar-nav">
                <Link to="/loginbot" style={{ textDecoration: 'none', color: 'black'}}>Login Bot</Link>
              </li>
              <li className="trc-side-bar-nav">
                <Link to="/sms-to-user" style={{ textDecoration: 'none', color: 'black'}}>Send Message to User</Link>
              </li>
              <li className="trc-side-bar-nav">
                <Link to="/setbotstatus" style={{ textDecoration: 'none', color: 'black'}}>Set bot Status</Link>
              </li>
              <li className="trc-side-bar-nav">
                <Link to="/respond-to-message" style={{ textDecoration: 'none', color: 'black'}}>Respond To Message</Link>
              </li>
              <li className="trc-side-bar-nav">
                <Link to="/setup-command-listener" style={{ textDecoration: 'none', color: 'black' }}>Setup Command Listener</Link>
              </li>
              <li className="trc-side-bar-nav">
                <Link to="/send-messaage-to-all-channel" style={{ textDecoration: 'none', color: 'black' }}>Send Message To AllChannels</Link>
              </li>
              <li className="trc-side-bar-nav">
                <Link to="/send-message-channel" style={{ textDecoration: 'none', color: 'black'}}>Send Message Channel</Link>
              </li>
              
            </ul>

            <Switch>
              {routes.map((route, index) => (
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
          </div>

          <div className="trc-col-2-third">
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
        <Footer/>
      </Router>
    
  );
}