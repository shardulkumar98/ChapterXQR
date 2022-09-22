import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyCode from "./components/Qrcode.js";
// import Profile from './components/Profile';
import {
  SubContainer,
  Container,
  MainContainer,
} from "./styles/component/profile/profile";

function App() {
  const [isVisible, setisVisible] = useState(false);
  const onHandleClick = () => setisVisible(true);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="profile-tab" onClick={onHandleClick}>
          Profile
        </div>
        {/* <Profile/> */}

        {isVisible ? (
          <Container>
            <SubContainer>
              <span>Name:</span>
              <span>Chase Guo </span>
            </SubContainer>
            <SubContainer>
              <div>Profile:</div>
              <div>ChapterX</div>
            </SubContainer>
            <SubContainer>
              <div>Designation:</div>
              <div>Co-Founder</div>
            </SubContainer>
            <SubContainer>
              <div>Bot link:</div>
              <div>
                <a
                  href="http://www.t.me/ChasegBot"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join Here
                </a>
              </div>
            </SubContainer>
          </Container>
        ) : (
          <MyCode />
        )}
      </header>
    </div>
  );
}

export default App;
