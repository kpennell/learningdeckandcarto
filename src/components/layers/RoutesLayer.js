import { useSelector } from 'react-redux';
import { CartoSQLLayer } from '@deck.gl/carto';
import { buildQueryFilters } from '@carto/react/api';
import { selectSourceById } from '@carto/react/redux';
import htmlForFeature from 'utils/htmlForFeature';
import React, { useContext } from 'react';

import Consumer from '../../config/configContext';

function random_rgba(d) {
  // if(d.properties.name === contextConsumer.hoveredItem ){
  //   return [100, 50, 90]
  // }
  // else {
  //   return [238, 77, 90]
  // }
  // const rgb = [];
  // for(var i = 0; i < 3; i++){
  //   rgb.push(Math.floor(Math.random() * 255));
  //   }
  // return(rgb)
}

export default function RoutesLayer() {
  const { routesLayer } = useSelector((state) => state.carto.layers);
  const source = useSelector((state) => selectSourceById(state, routesLayer?.source));

  const contextConsumer = useContext(Consumer);

  console.log(contextConsumer);

  if (routesLayer && source) {
    console.log(contextConsumer);

    return new CartoSQLLayer({
      id: 'routesLayer',
      data: buildQueryFilters(source),
      credentials: source.credentials,
      autoHighlight: true,
      getLineColor: (d) => {
        // console.log(d.properties.name)

        if (
          contextConsumer.hoveredItem.name &&
          d.properties.name === contextConsumer.hoveredItem.name
        ) {
          return [65, 158, 76];
        } else {
          // console.log(contextConsumer)
          //console.log(d.properties)

          return [238, 77, 90];
        }
      },
      updateTriggers: {
        getLineColor: [contextConsumer],
      },

      // getLineColor: [238, 77, 90],
      lineWidthScale: 20,
      lineWidthMinPixels: 4,
      getElevation: 30,

      filled: true,
      pickable: true,
      onHover: (info) => {
        if (info && info.object) {
          console.log(info.object);
          console.log(contextConsumer);

          info.object = {
            html: `
              <strong>${info.object.properties.name}</strong><br>
             
            `,
          };
        }
      },
    });
  }
}
