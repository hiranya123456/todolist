import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
  FlatList,
} from 'react-native';
import firebase from 'firebase';
import db from '../config'
const bg_img2 = require('../assets/background2.png');

export default class FeedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list1: '',
      lists: [],
    };
  }
  componentDidMount() {
    this.fetchlists();
    this.fetchUser();
  }
  fetchlists = () => {
    firebase
      .database()
      .ref('/posts/')
      .on(
        'value',
        (snapshot) => {
          let lists = [];
          if (snapshot.val()) {
            Object.keys(snapshot.val()).forEach(function (key) {
              lists.push({
                key: key,
                value: snapshot.val()[key],
              });
            });
          }
          this.setState({ lists: lists });
        },
        function (errorObject) {
          console.log('The read failed: ' + errorObject.code);
        }
      );
  };

  fetchUser = () => {
    let theme;
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid)
      .on('value', (snapshot) => {
        theme = snapshot.val().lists;
        this.setState({ lists: theme });
      });
  };

resetdb=()=>{
  firebase.database().ref("/posts/").set({
    list1:"",
    list2:"",
  })
}


  renderItem = ({ item: list1 }) => {
    console.log(list1.value);
    return (
      <View style={{ borderBottomWidth: 3 }}>
        <Text>Author:{list1.value.author}</Text>
        <Text>List1:{list1.value.list1}</Text>
        <Text>List2:{list1.value.list2}</Text>
        <Text>List3:{list1.value.list3}</Text>
        <Text>List4:{list1.value.list4}</Text>
        <Text>List5:{list1.value.list5}</Text>
        <Text>List6:{list1.value.list6}</Text>
        <Text>List7:{list1.value.list7}</Text>
        <Text>List8:{list1.value.list8}</Text>
        <Text>List9:{list1.value.list9}</Text>
      </View>
    );
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}>
          <View styles={styles.img2}>
            <Text style={styles.text}>FEED</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              width: 100,
              height: 100,
              borderRadius: 70,
              marginTop:70,
              marginLeft:270,
              //justifyContent:"center",
              alignItems:"center"

            }} onPress={()=>{this.resetdb
              this.setState({lists: []})}
            }>
            <Text style={{ color: 'white' }}>RESET</Text>
          </TouchableOpacity>
          <View>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.lists}
              renderItem={this.renderItem}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  bgimg2: {
    flex: 1,
    resizeMode: 'cover',
    height: 570,
    marginBottom: 540,
  },
  img2: {
    flex: 0.15,
    marginTop: 40,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: '400',
  },
});
