import {Image, FlatList} from 'react-native';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';



const ProfileScreen = () => {
  {/* GridView Posts */}
  return (
    <FeedGridView
      data={user.posts}
      ListHeaderComponent={ProfileHeader}
    />
  )
}

export default ProfileScreen;
