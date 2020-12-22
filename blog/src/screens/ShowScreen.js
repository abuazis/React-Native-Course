import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Context} from '../context/BlogContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';

const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id'),
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', {id: navigation.getParam('id')})
        }>
        <FontAwesomeIcon style={styles.icon} size={24} icon={faPencilAlt} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});

export default ShowScreen;
