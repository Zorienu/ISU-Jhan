import './App.css';
import { useEffect, useState } from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'

import Navbar from './components/Navbar';
import Controls from './components/Controls'
import StateConfiguration from './components/StateConfiguration'
import VideoCard from './components/VideoCard'
import Footer from './components/Footer'
import { MOTOR_1, MOTOR_2, MOTOR_3, URL_SERVER } from './constantes';

const useStyles = makeStyles((theme) => ({
	marginTop: {
		marginTop: "30px"
	}
}))

function App() {
	const [isAuto, setIsAuto] = useState(false)
	const [estadoPuertas, setEstadoPuertas] = useState([0, 0, 0])
	const [estadoLuzUV, setEstadoLuzUV] = useState(0)
	const classes = useStyles()

	const getEstadoPuerta = (id) =>
		fetch(`${URL_SERVER}/puertas/GetEstadoPuerta/${id}`).then(res => res.json())


	const getEstadoLuzUV = () =>
		fetch(`${URL_SERVER}/luzuv/GetEstadoLuzUV`).then(res => res.json())


	const getEstadoAllPines = () => {
		fetch(`${URL_SERVER}/pines/GetEstadoAllpines`)
			.then(res => res.json())
			.then(({ estadoPuertas, estadoLuzUV }) => {
				setEstadoPuertas(estadoPuertas)
				setEstadoLuzUV(estadoLuzUV)
			})
	}

	useEffect(getEstadoAllPines, [])


	const handleChange = (e) => setIsAuto(e.target.checked)

	return (
		<>
			<Navbar />
			<Container maxWidth="lg">
				<StateConfiguration callback={handleChange} />
				<div className={classes.marginTop}>
					<Grid container spacing={3} alignItems="center">
						<Grid item xs={6}>
							<VideoCard />
						</Grid>
						<Grid item xs={6}>
							<Controls auto={isAuto}
								estadoPuertas={estadoPuertas}
								estadoLuzUV={estadoLuzUV}
								setEstadoPuertas={setEstadoPuertas}
								setEstadoLuzUV={setEstadoLuzUV} />
						</Grid>
					</Grid>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default App;
