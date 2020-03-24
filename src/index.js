import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';

import appSyncConfig from './appsync';

//A
const client = new AWSAppSyncClient({
    url: appSyncConfig.ApiUrl,
    region: appSyncConfig.region,
    auth: {
        type: appSyncConfig.auth,
        apiKey: appSyncConfig.apiKey,
    }
});

//B
const WithProvider = () => (
  <ApolloProvider client={client}>
      <Rehydrated
        render = {({ rehydrated }) => (
          rehydrated ? <App /> : <strong>Your custom UI component here...</strong>
        )}
      />
  </ApolloProvider>
);

ReactDOM.render(<WithProvider />, document.getElementById('root'));
