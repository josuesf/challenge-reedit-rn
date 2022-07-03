import {useNavigation, useRoute} from '@react-navigation/core';
import * as React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {getRedditList, IRedditData} from '../../../api/RedditApi';
import {Box} from '../../../components';
import {EmptyList} from '../components/EmptyList';
import {ItemReddit} from '../components/ItemReddit';

export function RedditScreen() {
  const {name} = useRoute();
  const {navigate} = useNavigation();
  const [data, setData] = React.useState<Array<IRedditData>>();
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const getDatList = async () => {
      setLoading(true);
      const dataReddit = await getRedditList(name.toLowerCase());
      setData(dataReddit);
      setLoading(false);
    };
    getDatList();
  }, [name]);
  const goToDetail = (url: string) => {
    navigate('RedditDetail', {url});
  };
  return (
    <Box flex={1}>
      {loading && <ActivityIndicator />}
      <FlatList
        data={data}
        ListEmptyComponent={<EmptyList />}
        renderItem={({item}) => (
          <ItemReddit
            onPress={() => goToDetail(item.data.permalink)}
            item={item.data}
          />
        )}
      />
    </Box>
  );
}
