import { useState } from 'react'
import { Paper, makeStyles } from "@material-ui/core";
import socketIOClient from "socket.io-client";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      height: "300px",
      justifyContent: "center",
   },
   img: {
      height: "100%"
   }
}))

const url = "http://192.168.1.3:4000"
const socket = socketIOClient(url)

export default function VideoCard() {
   const classes = useStyles()
   const [video, setVideo] = useState()

   socket.on('stream', (img) => setVideo(img))

   return (
      <Paper elevation={5} className={classes.root}>
         <img src={video} alt="video" className={classes.img} />
      </Paper>
   )
}