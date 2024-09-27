import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import allCourses from './allCourses';

export default function ComboBox() {
  
    return (
    <div style={{display: 'flex'}}>
    <h2>Courses : </h2>
    <Autocomplete
      style={{padding: '5px'}}
      disablePortal
      options={allCourses}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Courses" />}
    />
    </div>
    
  );
}
