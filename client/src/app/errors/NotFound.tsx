import { Button, Container, Divider, Paper, Typography } from "@mui/material"
import { Link } from 'react-router-dom'
type Props = {}

const NotFound = (props: Props) => {
  return (
    <Container component={Paper}>
        <Typography gutterBottom variant="h3">
            Page Not Found
        </Typography>
        <Divider />
        <Button fullWidth component={Link} to="/catalog">Go back to shop</Button>
    </Container>
  )
}

export default NotFound