import './App.css';
import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from "./Components/ChatFeed"

const App = () =>{
  return(
    <ChatEngine
    height = "100vh"
    projectID="9d512b75-1783-4aa5-a8cd-4746e9972ca0"
    userName="faisal"
    userSecret="a2206872"
    renderChatFeed={(chatAppProps)} =>   <ChatFeed {...chatAppProps  }
    />
  );
}

export default App;
