import { AppBar, Toolbar, Typography } from '@mui/material'

type Props = {}

const Header = (props: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
            <Typography variant="h6" color="inherit">
                E-Commerce
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header