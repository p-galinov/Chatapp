import './App.css';
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from './components/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine 
      height="100vh"
      projectID="9be71be3-7729-438c-bd7f-c2725ed14bcd"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
