import React from "react";
import { Button } from "@mui/material";

const AddButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      sx={{
        margin: "20px",
        backgroundColor: "#1976d2",
        "&:hover": {
          backgroundColor: "#115293",
        },
      }}
    >
      Add Goal
    </Button>
  );
}
export default AddButton;