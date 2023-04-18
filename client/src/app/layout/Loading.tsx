import { Backdrop, Box, CircularProgress } from '@mui/material'

type Props = {}

const Loading = (props: Props) => {
  return (
    <Backdrop open={true} invisible={true}>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <CircularProgress color="secondary" />
        </Box>
    </Backdrop>
  )
}

export default Loading