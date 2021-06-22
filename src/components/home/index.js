import React from "react";
import Tile from "./comps/tile";
import "../../styles/home.scss";
import Grid from "@material-ui/core/Grid";
import {useSelector} from 'react-redux';
import Paper from "@material-ui/core/Paper";

export default function Home() {

    const homeData = useSelector((state) => state.home);

  return (
    <Paper className='home-container'  >
      <Grid container alignContent='center' alignItems='center' justify='center' spacing={1}>
        <Grid container item xs={12} spacing={1}>
          {homeData.data.map((val, index) => (
            <Grid item xs={3} key={val.id} >
              <Tile data={val} key={index} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
}









  // return (
  //     <div className='home-container' >
  //         <div className='home-wrapper' >
  //             {HomeData.map((val, index) => <Tile data={val} key={index} />)}
  //         </div>
  //     </div>
  // )
