import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   appBar: {
      backgroundColor: "#ad3333"
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
   center: {
      textAlign: "center",
      flexGrow: 1
   }
}));

export default function Navbar() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <AppBar position="static" className={classes.appBar}>
            <Toolbar>
               <div className={classes.center}>
                  <Typography variant="h4" className={classes.title}>Interfaz Sistema-Usuario</Typography>
               </div>
            </Toolbar>
         </AppBar>
      </div>
   );
}