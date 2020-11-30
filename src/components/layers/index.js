import GeocoderLayer from './GeocoderLayer';
import RoutesLayer from './RoutesLayer';
// Auto import

export const getLayers = () => {
  return [
    GeocoderLayer(),
    RoutesLayer(),
    // Auto import layers
  ];
};
