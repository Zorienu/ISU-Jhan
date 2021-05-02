import { makeStyles, Paper, Switch, Typography } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
   root: {
      display: "inline-flex",
      padding: "0 10px",
      alignItems: "center",
      margin: "10px 0 20px 0",
   },
}))

export default function StateConfiguration({ callback }) {
   const classes = useStyle()

   return (
      <Paper elevation={3} className={classes.root}>
         <Typography>Auto</Typography>
         <Switch onChange={callback} color="primary" />
         <Typography>Manual</Typography>
      </Paper>
   )
}