import * as React from 'react';
import { Logout } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import TextField from "@mui/material/TextField";

import MenuIcon from '@mui/icons-material/Menu';

import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

const  Navbar = () => {
  const [value, setValue] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      window.location = `/Hasil/${value}`;
    }
  }
  const navigate = useNavigate();

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
                  <Link style={{color:'inherit', textDecoration: 'inherit'}} to={'/'}>Musik Bagus</Link>
          </Typography>
        <Box>
        <TextField
        
          label="Search Artist..."
          variant="filled"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <Link to={`/Hasil/${value}`} ></Link>      </Box>

        <Box sx={{ display: 'flex' }}>
                        <Box sx={{ padding: 1 }}>
                            <Logout onClick={onLogout} />
                        </Box>
                    </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar;