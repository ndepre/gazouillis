import React from 'react';
import "./Login.css";
import { Button } from '@mui/material';

function TopWidget() {
  
    return (
      <div className='TopWidget'>
        <Button type="submit" className="button">
          Login
        </Button>
        <Button type="submit" className="button">
          Signup
        </Button>

      </div>
    );
  }
  
  export default TopWidget;