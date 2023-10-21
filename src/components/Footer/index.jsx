import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Footer() {
  return (
    <AppBar
      position="static"
      style={{
        boxShadow:
          '0px -2px 4px -1px rgba(0, 0, 0, 0.2), 0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12) ',
      }}
    >
      <Toolbar></Toolbar>
    </AppBar>
  );
}
