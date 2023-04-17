import { AppBar, Toolbar, Typography, Switch } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

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
        <Toolbar>
            <Typography variant="h6" color="inherit">
                E-Commerce
            </Typography>
            <Switch onClick={toggleDarkMode} />
        </Toolbar>
    </AppBar>
  )
}

export default Header