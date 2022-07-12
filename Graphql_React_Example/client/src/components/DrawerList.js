import React, { useState, useEffect } from 'react';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate, useLocation } from "react-router-dom";

export default function DrawerList(){
    let navigate = useNavigate();
    let location = useLocation()

    const handleNavigate = (loc) => {
        if(loc !== location.pathname)
            navigate(loc)
    }

    return (
    <List>
        <ListItem key={"Posts"} disablePadding>
            <ListItemButton onClick={() => {handleNavigate('/posts')}}>
              <ListItemIcon>
                <InboxIcon/>                
              </ListItemIcon>
              <ListItemText primary="Posts" />
            </ListItemButton>
        </ListItem>
      </List>
    )
}