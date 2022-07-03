import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {IReddit} from '../../../api/RedditApi';
import {Box, Text} from '../../../components';

export const ItemReddit = ({item}: {item: IReddit}) => (
  <TouchableOpacity activeOpacity={0.7}>
    <Box key={item.id} flexDirection="row">
      <Box>
        <Image
          resizeMode="cover"
          resizeMethod="auto"
          style={{height: 150, width: 150}}
          source={{uri: item.thumbnail}}
        />
      </Box>
      <Box flex={1} mx="m" mt="m">
        <Text variant="label" textAlign="right">
          {new Date(item.created_utc).toUTCString()}
        </Text>
        <Text variant="subheader">{item.title}</Text>
        <Box
          mt="l"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Text variant="label">{item.author}</Text>
          <Text variant="label">{`Score:${item.score}`}</Text>
          <Text variant="label">{`${item.num_comments} Comments`}</Text>
        </Box>
      </Box>
    </Box>
  </TouchableOpacity>
);
