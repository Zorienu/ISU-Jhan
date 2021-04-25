import './App.css';
import { Container, Grid } from '@material-ui/core'

import Navbar from './components/Navbar';
import Control from './components/Control'
import Switch from './components/StateConfiguration'

function App() {
  function handleChange(e) {
    console.log(e.target.checked)
  }

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Switch handleChange={handleChange} />
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Control title={'Puerta Principal'} activated={true} />
          </Grid>
          <Grid item xs={4}>
            <Control title={'Luz UV'} activated={false} />
          </Grid>
          <Grid item xs={4}>
            <Control title={'Puerta Salida'} activated={true} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
