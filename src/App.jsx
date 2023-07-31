import Grid from '@mui/material/Grid'
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <div>xs=8</div>
        </Grid>
        <Grid item xs={10}>
          <div>xs=4</div>
        </Grid>
      <Grid item xs={4}>
        <div>xs=4</div>
      </Grid>
      <Grid item xs={8}>
        <div>xs=8</div>
      </Grid>
    </Grid>
    </>
  )
}

export default App
