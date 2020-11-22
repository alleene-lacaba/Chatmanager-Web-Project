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
import SetBotStatus from "./set-bot-status.component"
import Footer from "./footer.component"



const routes = [
  {
    path: "/home",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Home/>
  },
  {
    path: "/startApp",
    sidebar: () => <div>start app</div>,
    main: () => <StartApp/>
  },
  {
    path: "/loginbot",
    sidebar: () => <div>log in Bot</div>,
    main: () => <LoginBot/>
  },
  {
    path: "/setbotstatus",
    exact: true,
    sidebar: () => <div>Set bot Status</div>,
    main: () => <SetBotStatus/>
  },
  {
    path: "/setup-command-listener",
    sidebar: () => <div>Set Up Command Listener</div>,
    main: () => <h2>Set Up Command Listener</h2>
  },
  {
    path: "/send-messaage-to-all-channel",
    sidebar: () => <div>Send Message to all Channel</div>,
    main: () => <h2>Send Message to all Channel</h2>
  },
  {
    path: "/send-message-channel",
    sidebar: () => <div>Send Message Channel</div>,
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
                <Link to="/setbotstatus" style={{ textDecoration: 'none', color: 'black'}}>Set bot Status</Link>
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