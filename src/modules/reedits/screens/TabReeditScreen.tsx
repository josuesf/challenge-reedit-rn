import {useRoute} from '@react-navigation/core';
import * as React from 'react';
import {FlatList} from 'react-native';
import {getRedditList, IRedditData} from '../../../api/RedditApi';
import {Box} from '../../../components';
import {ItemReddit} from '../components/ItemReddit';

export function TabReeditScreen() {
  const {name} = useRoute();
  const [data, setData] = React.useState<Array<IRedditData>>();
  React.useEffect(() => {
    const getDatList = async () => {
      const dataReddit = await getRedditList(name.toLowerCase());
      setData(dataReddit);
    };
    getDatList();
  }, [name]);
  return (
    <Box flex={1}>
      <FlatList
        data={data}
        renderItem={({item}) => <ItemReddit item={item.data} />}
      />
    </Box>
  );
}
