import { useState } from "react";
import WebForm from "./components/WebForm";

function App() {
  const client = {
    email: "jag@test.se",
    password: "hej123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === client.email &&
      details.password === client.password
    ) {
      console.log("Inloggad");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Fel Användarnamn eller Lösenord");
      setError("");
    }
  };
  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="loggedin">
          <h2>
            Välkommen: <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logga ut</button>
        </div>
      ) : (
        <WebForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
