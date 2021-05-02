import { Grid } from '@material-ui/core'
import VideoCard from './VideoCard'

export default function VideoCards() {
   return (
      <>
         <Grid container spacing={4} justify="center">
            <Grid item xs={4}>
               <VideoCard />
            </Grid>
            <Grid item xs={4}>
               <VideoCard />
            </Grid>
         </Grid>
      </>
   )
}