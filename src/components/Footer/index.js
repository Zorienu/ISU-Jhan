import { makeStyles } from '@material-ui/core'
import Logo from './logo1.png'
import Nombre from './logo2.png'
import Mecha from './mecatronica.png'

const useStyles = makeStyles((theme) => ({
   root: {
      alignItems: "center",
      backgroundColor: "#ad3333",
      bottom: 0,
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
      padding: "10px",
      position: "absolute",
      width: "100%"
   },
   img: {
      height: "120px"
   },
   imgs: {
      alignItems: "center",
      display: "flex",
   }
}))

export default function Footer() {
   const classes = useStyles()

   return (
      <div className={classes.root}>
         <img className={classes.img} src={Logo} alt="Unipamplona-logo" />
         <div className={classes.imgs}>
            <img className={classes.img} src={Nombre} alt="Unipamplona-logo" />
            <img className={classes.img} src={Mecha} alt="Mecatrónica-logo" />
         </div>
      </div>
   )
}