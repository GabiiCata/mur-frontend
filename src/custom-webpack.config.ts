import { EnvironmentPlugin } from 'webpack';
import * as dotenv from 'dotenv';

dotenv.config();

module.exports = {
  output: {
    crossOriginLoading: 'anonymous',
  },
  plugins: [
    new EnvironmentPlugin([
      'VECINET_SERVICE_BASE_URL',
      'GEOLOCATION_SERVICE_BASE_URL',
      'GEOLOCATION_SERVICE_API_KEY',
    ]),
  ],
};
