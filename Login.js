import React, { useState } from 'react';
import { Main } from './styled';

const Login = ({ history, location }) => {
  const [details, updateDetails] = useState({ firstName: "", lastName: "" });
  const submit = (e) => {
    e.preventDefault();
    console.log(details.firstName, details.lastName, "details");
    history.push("/Hello");
    console.log(history, "history", location, "location");
  }
  return (
    <Main>
      <form method="post" onSubmit={submit}>
        <input
          type="text"
          value={details.firstName}
          placeholder="firstname"
          onChange={(e) => updateDetails({ ...details, firstName: e.target.value })}
        />
        <br /><br />
        <input
          type="text"
          value={details.lastName}
          placeholder="lastname"
          onChange={(e) => updateDetails({ ...details, lastName: e.target.value })}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </Main>
  )
}

export default Login;