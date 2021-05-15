import './App.css';
import { useState } from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'

import Navbar from './components/Navbar';
import Controls from './components/Controls'
import StateConfiguration from './components/StateConfiguration'
import VideoCard from './components/VideoCard'
import Footer from './components/Footer'

const useStyles = makeStyles((theme) => ({
	marginTop: {
		marginTop: "30px"
	}
}))

function App() {
	const [isAuto, setIsAuto] = useState(false)
	const classes = useStyles()

	function handleChange(e) {
		console.log(e.target.checked)
		setIsAuto(e.target.checked)
	}

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
							<Controls auto={isAuto} />
						</Grid>
					</Grid>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default App;
