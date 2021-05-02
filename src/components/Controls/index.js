import { Grid, makeStyles } from '@material-ui/core'
import Control from './Control'

const useStyles = makeStyles((theme) => ({
   root: {
      marginTop: "10px",
   }
}))

export default function Controls({ auto }) {
   const classes = useStyles()

   return (
      <Grid container spacing={4} className={classes.root}>
         <Grid item xs={4}>
            <Control title={'Puerta Principal'} activated={true} auto={auto} />
         </Grid>
         <Grid item xs={4}>
            <Control title={'Luz UV'} activated={false} auto={auto} />
         </Grid>
         <Grid item xs={4}>
            <Control title={'Puerta Salida'} activated={true} auto={auto} />
         </Grid>
      </Grid>
   )
}