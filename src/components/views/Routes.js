import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLayer, removeLayer, addSource, removeSource } from '@carto/react/redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Consumer from '../../config/configContext';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Routes() {
  const [data, setData] = useState([]);
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const classes = useStyles();

  const SOURCE_ID = `routesLayerSource`;
  const LAYER_ID = `routesLayer`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://kyle-se.carto.com/api/v2/sql?api_key=eyFg36VV5D7XSXr0xKH5sQ&q=SELECT%20*%20FROM%20eastbaybikeroutescollection`
      );
      const data = await response.json();
      // console.log(data.rows)
      setData(data.rows);
    };

    fetchData();
  }, []);

  const toggleHover = () => {
    //  console.log('yes')
    //  console.log(state)
  };

  useEffect(() => {
    // Add the source
    dispatch(
      addSource({
        id: SOURCE_ID,
        data: `select * from eastbaybikeroutescollection`,
        type: 'sql',
      })
    );

    // Add the layer
    dispatch(
      addLayer({
        id: LAYER_ID,
        source: SOURCE_ID,
      })
    );

    // Cleanup
    return function cleanup() {
      dispatch(removeLayer(LAYER_ID));
      dispatch(removeSource(SOURCE_ID));
    };
  }, [dispatch, SOURCE_ID, LAYER_ID]);

  return (
    <Consumer>
      {(context) => {
        return (
          <Grid container direction='row' className={classes.root}>
            <Grid item>
              {data.map((item) => (
                <p onClick={() => context.toggleItem(item)} key={item.the_geom}>
                  {item.name}
                </p>
              ))}
            </Grid>
          </Grid>
        );
      }}
    </Consumer>
  );
}

// {data.rows.map(item => (
//   <p key={item.the_geom}>
//     {item.name}
//   </p>
// ))}
