import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CREATING_SETS, ROOT, SAVED_SETS } from 'navigation/Constants';

export default function Navbar(props) {

    const [currentPage,setCurrentPage] = useState('Home')
    const navigate = useNavigate();
    let location = useLocation();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const drawerWidth = 240;
    const container = window !== undefined ? () => window().document.body : undefined;

    useEffect(() => {
        const navItem = navItems.find(item => item.address === location.pathname)
        setCurrentPage(navItem.title)
    }, [location]);

    const navItems = [
        { title: 'Home', address: ROOT },
        { title: 'New Set', address: CREATING_SETS },
        { title: 'Saved Sets', address: SAVED_SETS }
    ];

    const handleNavigate = (path) => {
        navigate(path.address, { replace: true })
        setCurrentPage(path.title)
    }

    const drawer = (
        <Box onClick={() => setMobileOpen(!mobileOpen)} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>Clothing Sets Picking</Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: 'center' }}
                            onClick={() => handleNavigate(item)}
                        >
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            sx={{ mr: 2, display: { sm: 'block' } }}
                        >
                            <MenuIcon style={{marginRight: '10px'}} />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { sm: 'block' } }}
                        >
                            Clothing Sets Picking
                        </Typography>
                        <Box sx={{ display: { sm: 'block' } }}>

                            <Typography
                                variant='h4'
                                sx={{ display: { sm: 'block' } }}
                            >
                                {currentPage}
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={() => setMobileOpen(!mobileOpen)}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </div>
    )
}
