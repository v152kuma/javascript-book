//use material ui for the login form
//add the imports from material ui
import React from "react";
import { TextField, Button } from "@mui/material";

 const LoginForm = () => {
    
  return (
    <form noValidate autoComplete="off">
      <TextField label="Username" variant="outlined" fullWidth margin="normal" />
      <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
      <Button variant="contained" color="primary" type="submit">Login</Button>
    </form>
  );
}

export default LoginForm;