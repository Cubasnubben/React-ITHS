import { useState } from "react";
import React from "react";

function WebForm({ Login, err }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-canvas">
        <h1>Logga In</h1>
        {err !== "" ? <div className="error">{err}</div> : ""}
        <div className="form-info">
          <label htmlFor="name">Namn:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(event) =>
              setDetails({ ...details, name: event.target.value })
            }
            value={details.name}
          />
        </div>
        <div className="form-info">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(event) =>
              setDetails({ ...details, email: event.target.value })
            }
            value={details.email}
          />
        </div>
        <div className="form-info">
          <label htmlFor="password">Lösenord:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(event) =>
              setDetails({ ...details, password: event.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGGA IN" />
      </div>
    </form>
  );
}

export default WebForm;
