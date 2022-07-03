import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {IReddit} from '../../../api/RedditApi';
import {Box, Text} from '../../../components';

export const ItemReddit = ({
  item,
  onPress,
}: {
  item: IReddit;
  onPress: () => void;
}) => (
  <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
    <Box
      key={item.id}
      flexDirection="row"
      borderBottomColor="grey0"
      borderBottomWidth={0.6}
      mx="s"
      pb="s"
      mb="s">
      <Box>
        <Image
          resizeMode="cover"
          resizeMethod="auto"
          style={{height: 150, width: 150}}
          source={{uri: item.thumbnail}}
        />
      </Box>
      <Box flex={1} ml="m" mt="m">
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
