import webpack from 'webpack'
import { ServerConfig, ClientConfig } from 'react-project/webpack'

ClientConfig.plugins.push(
  new webpack.EnvironmentPlugin([
    'ACCESS_TOKEN'
  ])
)

export { ServerConfig, ClientConfig }
