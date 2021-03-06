import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
const starIcon = require('../assets/image/star_icon.png');
const backIcon = require('../assets/image/back_icon.png');

import List from '../components/List';
import ListCommentItem from '../components/ListCommentItem';
import ListItem from '../components/ListItem';

//Actions
import {savePost, unSavePost} from '../actions/postAction';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listComments: [],
      isSaved: props.savedPosts.some(
        (post) => post.id === props.route.params.data.id,
      ),
    };
  }

  componentDidMount() {
    let postId = this.props.route.params.data.id;

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({listComments: json});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  goBack = () => this.props.navigation.goBack();

  onSave = () => {
    if (this.state.isSaved) {
      this.props.unSavePost(this.props.route.params.data);
    } else {
      // this.props.savePostAsync(this.props.route.params.data);
      this.props.savePost(this.props.route.params.data);
    }
    this.setState((state) => ({isSaved: !state.isSaved}));
  };

  render() {
    const headerRightIconColor = this.state.isSaved ? '#ff000090' : '#00000020';
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerButtonContainer}
            onPress={this.goBack}>
            <Image source={backIcon} style={styles.headerLeftIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerButtonContainer}
            onPress={this.onSave}>
            <Image
              source={starIcon}
              style={[
                styles.headerRightIcon,
                {tintColor: headerRightIconColor},
              ]}
            />
          </TouchableOpacity>
        </View>
        <ListItem data={this.props.route.params.data} />
        <List data={this.state.listComments} item={ListCommentItem} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerRightIcon: {
    width: 30,
    height: 30,
    tintColor: '#00000020',
  },
  headerLeftIcon: {
    width: 30,
    height: 30,
    tintColor: '#000000',
  },
  headerButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    savedPosts: state.postReducer.savedPosts,
  };
};

const dispatchToProps = {
  savePost,
  unSavePost,
};

export default connect(mapStateToProps, dispatchToProps)(Detail);
