import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { green, red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
   root: {
      fontSize: "36px",
      marginLeft: "5px"
   }
}))

export default function Indicador({ activated }) {
   const classes = useStyles()

   return (
      <FiberManualRecordIcon className={classes.root} style={{ color: activated ? green[500] : red[500] }} />
   )

}

