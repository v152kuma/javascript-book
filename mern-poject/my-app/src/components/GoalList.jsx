import React from "react";
import {Typography} from "@mui/material";

const GoalList = () => {
    return (
        <div>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginTop: '20px', 
            color: '#1976d2', fontWeight: 'bold'
         }}>
            Goals List
        </Typography>
        </div>
    );
    }

export default GoalList;