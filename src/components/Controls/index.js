import { Grid, makeStyles } from '@material-ui/core'
import { useEffect } from 'react'
import Control from './Control'
import { URL_SERVER, PUERTA_1, PUERTA_2, PUERTA_3, LUZ_UV } from '../../constantes'

const useStyles = makeStyles((theme) => ({
   root: {
   }
}))

export default function Controls({ auto, estadoPuertas, estadoLuzUV, setEstadoPuertas, setEstadoLuzUV }) {
   const classes = useStyles()

   const setEstadoPuerta = (idPuerta, newEstado) => {
      fetch(`${URL_SERVER}/puertas/SetEstadoPuerta/${idPuerta}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            estado: newEstado
         })
      })
         .then(res => res.json())
         .then(res => {
            setEstadoPuertas(prev => {
               const newState = [...prev]
               newState[idPuerta] = res.estadoPin
               return newState
            })
         })
   }

   const setEstadoLuz = (newEstado) => {
      console.log(newEstado)
      fetch(`${URL_SERVER}/luzuv/SetEstadoLuzUV`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            estado: newEstado
         })
      })
         .then(res => res.json())
         .then(res => {
            setEstadoLuzUV(res.estadoPin)
         })
   }

   return (
      <Grid container direction='column' spacing={4} className={classes.root}>
         <Grid item>
            <Control title={'Actuador 1'} activated={estadoPuertas[PUERTA_1]} auto={auto} onClick={(newEstado) => setEstadoPuerta(PUERTA_1, newEstado)} />
         </Grid>
         <Grid item>
            <Control title={'Luz UV'} activated={estadoLuzUV} auto={auto} onClick={(newEstado) => setEstadoLuz(newEstado)} />
         </Grid>
         <Grid item>
            <Control title={'Actuador 2'} activated={estadoPuertas[PUERTA_2]} auto={auto} onClick={(newEstado) => setEstadoPuerta(PUERTA_2, newEstado)} />
         </Grid>
         <Grid item>
            <Control title={'Actuador 3'} activated={estadoPuertas[PUERTA_3]} auto={auto} onClick={(newEstado) => setEstadoPuerta(PUERTA_3, newEstado)} />
         </Grid>
      </Grid>
   )
}