import {FlatList} from 'react-native';
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/data/posts.json'

const HomeScreen = () => {
  return (

      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
        // flatlist automatically takes id
        // keyExtractor={item => { return `post-${item.createdAt}`}}
      />

  );
};

export default HomeScreen;
