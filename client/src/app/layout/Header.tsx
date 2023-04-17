import { ShoppingCart } from '@mui/icons-material'
import { AppBar, Toolbar, Typography, Switch, ListItem, List, IconButton, Badge, Box } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import { NavLink } from 'react-router-dom'

const midLinks = [
    {title: 'Catalog', path: '/catalog'},
    {title: 'About', path: '/about'},
    {title: 'Contact', path: '/contact'}
]

const rightLinks = [
    {title: 'Login', path: '/login'},
    {title: 'Register', path: '/register'},
]

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
    color: 'grey.400'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

type Props = {
    darkMode: boolean,
    setDarkMode: Dispatch<SetStateAction<boolean>>
}

const Header = ({darkMode, setDarkMode}: Props) => {
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box display="flex" alignItems="center">
            <Typography
            variant="h6"
            color="inherit"
            component={NavLink}
            to="/"
            sx={navStyles}>
                E-Commerce
            </Typography>
            <Switch onClick={toggleDarkMode} />
            </Box>

            <Box>
            <List sx={{display: 'flex'}}>
                {midLinks.map(link => (
                    <ListItem
                    key={link.path}
                    component={NavLink}
                    to={link.path}
                    sx={navStyles}
                    >
                        {link.title}
                    </ListItem>
                ))}
            </List>
            </Box>

            <Box display="flex" alignItems="center">
            <IconButton size="large" edge="start" color="inherit" sx={{mr: 2}}>
                    <Badge badgeContent="4" color="secondary">
                        <ShoppingCart />
                    </Badge>
            </IconButton>

            <List sx={{display: 'flex'}}>
                {rightLinks.map(link => (
                    <ListItem
                    key={link.path}
                    component={NavLink}
                    to={link.path}
                    sx={navStyles}
                    >
                        {link.title}
                    </ListItem>
                ))}
            </List>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header