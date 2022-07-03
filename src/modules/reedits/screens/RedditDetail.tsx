import {useRoute} from '@react-navigation/core';
import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import WebView from 'react-native-webview';
import {Box} from '../../../components';
import {CustomRouteProp, HomeStackRoutes} from '../../../interfaces/navigation';

export function RedditDetail() {
  const {params} = useRoute<CustomRouteProp<HomeStackRoutes, 'RedditDetail'>>();
  const [loading, setLoading] = React.useState(true);
  const url = params.url || '';
  return (
    <Box backgroundColor="mainBackground" flex={1}>
      {loading && <ActivityIndicator size="large" />}
      <WebView
        onLoadEnd={() => setLoading(false)}
        source={{uri: `https://www.reddit.com${url}`}}
        style={{backgroundColor: '#F0F2F3'}}
      />
    </Box>
  );
}
