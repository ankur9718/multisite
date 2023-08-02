import {
  LayoutService,
  RestLayoutService,
  // GraphQLLayoutService,
} from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export class LayoutServiceFactory {
  create(site?: string): LayoutService {
    console.log(config, 'config')

    // return process.env.FETCH_WITH === 'GraphQL'
    //   ? new GraphQLLayoutService({
    //       endpoint: config.graphQLEndpoint,
    //       apiKey: config.sitecoreApiKey,
    //       siteName: site ?? config.jssAppName,
    //     }):
        return new RestLayoutService({
          apiHost: config.sitecoreApiHost,
          apiKey: config.sitecoreApiKey,
          siteName: site ?? config.jssAppName,
          // configurationName: 'default',
        });
  }
}

export const layoutServiceFactory = new LayoutServiceFactory();
