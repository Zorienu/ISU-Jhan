import { Box, Button, Paper, Typography, makeStyles } from '@material-ui/core'
import Indicador from './Indicador'

const useStyles = makeStyles((theme) => ({
   root: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 30px"
   }
}))
export default function Control({ title, activated, auto, onClick }) {
   const classes = useStyles()

   return (
      <Paper elevation={3} className={classes.root}>
         <Typography variant="h5">{title}</Typography>
         <Box display="flex" alignItems="center">
            {auto && (<Button color="primary" variant="contained" onClick={() => onClick(1 - activated)}>{activated ? "Cerrar" : "Abrir"}</Button>)}
            <Indicador activated={activated} />
         </Box>
      </Paper>
   )
}