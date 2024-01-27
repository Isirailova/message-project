import "./App.css";
import LoginApp from "./components/loginApp/LoginApp";
import Message from "./components/message/Message";

function App() {
  return (
    <div className="App">
      <div className="top">
        <Message type="error">Dont work</Message>
        <Message type="success">Success</Message>
        <Message type="info">Info</Message>
      </div>
      <div>
        <LoginApp />
      </div>
    </div>
  );
}

export default App;
