import { Grid, makeStyles } from '@material-ui/core'
import Control from './Control'

const useStyles = makeStyles((theme) => ({
   root: {
   }
}))

export default function Controls({ auto }) {
   const classes = useStyles()

   return (
      <Grid container direction='column' spacing={4} className={classes.root}>
         <Grid item>
            <Control title={'Actuador 1'} activated={true} auto={auto} />
         </Grid>
         <Grid item>
            <Control title={'Luz UV'} activated={false} auto={auto} />
         </Grid>
         <Grid item>
            <Control title={'Actuador 2'} activated={true} auto={auto} />
         </Grid>
         <Grid item>
            <Control title={'Actuador 3'} activated={true} auto={auto} />
         </Grid>
      </Grid>
   )
}