import {StyleSheet, View, Pressable} from 'react-native';
import Video from 'react-native-video';
import React from 'react';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../theme/colors';

interface IVideoPlayer {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true)

  return (
    <View>
      <Video
      source={{uri}}
      style={styles.video}
      resizeMode="cover"
      repeat
      muted={false}
      paused={paused}
      />

      <Pressable onPress={() => setMuted(v => !v)} style={styles.muteButtom}>
        <Ionicons name={muted ? 'volume-mute' : 'volume-medium'} size={14} color='white' />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButtom: {
    backgroundColor: colors.black,
    padding: 5,
    borderRadius: 25,

    position: 'absolute',
    bottom: 10,
    right: 10
  }
});

export default VideoPlayer;
