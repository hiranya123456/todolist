import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
  ImageBackground,
  TextInput,
  Button,
  Alert
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from "firebase"

const bg_img1 = require('../assets/background.png');

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      list1:"" ,
      list2:"" ,
      list3:"" ,
      list4:"" ,
      list5:"" ,
      list6:"" ,
      list7:"" ,
      list8:"" ,
      list9:"" ,
    };
  }
  componentDidMount() {
    this.fetchUser();
  }

async addwork() {
    if (
      this.state.list1 &&
      this.state.list2 &&
      this.state.list3 &&
      this.state.list4 &&
      this.state.list5 &&
      this.state.list6 &&
      this.state.list7 &&
      this.state.list8 &&
      this.state.list9 
     
    )  {
      let workData = {
       list1: this.state.list1,
        list2: this.state.list2,
        list3: this.state.list3,
        list4: this.state.list4,
        list5: this.state.list5,
        list6: this.state.list6,
        list7: this.state.list7,
        list8: this.state.list8,
        list9: this.state.list9,
        author: firebase.auth().currentUser.displayName,
        created_on: new Date(),
        author_uid: firebase.auth().currentUser.uid,
      };


      await firebase
        .database()
        .ref(
          "/posts/" +
            Math.random()
              .toString(36)
              .slice(2)
        )
        .set(workData)
        .then(function(snapshot) {});
      this.props.navigation.navigate("FeedScreen");
      this.setState({ list1: " ",
        list2: " ",
        list3: " ",
        list4: " ",
        list5: " ",
        list6: " ",
        list7: " ",
        list8: " ",
        list9: " " })
    } else {
      Alert.alert(
        "Error",
        "PLEASE WRITE SOMETHING BEFORE SAVING IT!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      )
    }
}

fetchUser = () => {
    let theme;
    firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", snapshot => {
        theme = snapshot.val().lists;
        this.setState({lists:theme})

      });
};

  render() {
    return (
      
          <ImageBackground
            style={styles.bgimg}
            source={require('../assets/background.png')}>
            <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}>
                    <View styles={styles.img}>
              <Text style={styles.text1}>TO-DO LIST</Text>
              </View>
            <View >
              <TextInput
                style={[styles.inputBox1,{color:"white"}]}
                onChangeText={(text) => this.setState({ list1:text })}
                placeholder={'1.'}
                placeholderTextColor={'white'}
                 value={this.state.list1}

              />

              <TextInput
                style={[styles.inputBox1, styles.extraFont, styles.thirdbox,{color:"white"}]}
                onChangeText={(text) => this.setState({ list2:text })}
                placeholder={'2.'}
                placeholderTextColor={'white'}
                value={this.state.list2}
              />

              <TextInput
                style={[styles.inputBox1, styles.extraFont, styles.thirdbox,{color:"white"}]}
                onChangeText={(text) => this.setState({ list3:text })}
                placeholder={'3.'}
                placeholderTextColor={'white'}
                value={this.state.list3}
              />

              <TextInput
                style={[styles.inputBox1, styles.extraFont, styles.thirdbox,{color:"white"}]}
                onChangeText={(text) => this.setState({ list4:text})}
                placeholder={'4.'}
                placeholderTextColor={'white'}
                value={this.state.list4}
              />

              <TextInput
                style={[styles.inputBox1, styles.extraFont, styles.thirdbox,{color:"white"}]}
                onChangeText={(text) => this.setState({ list5:text })}
                placeholder={'5.'}
                placeholderTextColor={'white'}
                value={this.state.list5}
              />

              <TextInput
                style={[styles.inputBox1, styles.extraFont, styles.thirdbox,{color:"white"}]}
                onChangeText={(text) => this.setState({ list6:text })}
                placeholder={'6.'}
                placeholderTextColor={'white'}
                value={this.state.list6}
              />

              <TextInput
                style={[styles.inputBox1, styles.extraFont, styles.thirdbox,{color:"white"}]}
                onChangeText={(text) => this.setState({ list7:text })}
                placeholder={'7.'}
                placeholderTextColor={'white'}
                value={this.state.list7}
              />

              <TextInput
                style={[styles.inputBox1, styles.extraFont, styles.thirdbox,{color:"white"}]}
                onChangeText={(text) => this.setState({ list8:text })}
                placeholder={'8.'}
                placeholderTextColor={'white'}
                value={this.state.list8}
              />

              <TextInput
                style={[styles.inputBox1, styles.extraFont, styles.thirdbox,{color:"white"}]}
                onChangeText={(text) => this.setState({ list9:text })}
                placeholder={'9.'}
                placeholderTextColor={'white'}
                value={
                  this.state.list9
                }
              />
            
            
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                width: 50,
                height: 30,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 25,
                marginLeft: 280,
              }}
              onPress={() => this.addwork("FeedScreen")}>

              <Text style={styles.submitbutton}>save</Text>
            </TouchableOpacity>
             </View>
             </SafeAreaView>
      </View>
          </ImageBackground>
       
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
  bgimg: {
    flex: 1,
   
  },
  img: {
   
  },
  text1: {
    color: 'white',
    fontSize: 30,
    fontWeight:"bold"
  },
  inputBox1: {
    marginTop: RFValue(50),
    width: '80%',
    alignSelf: 'center',
    height: 29,
    textAlign: 'center',
    borderWidth: 4,

    borderColor: 'white',
  },
  extraFont: {
    marginTop: RFValue(20),
  },
  thirdbox: {
    padding: RFValue(5),
    textAlignVertical: 'top',
  },
  submitbutton: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});
