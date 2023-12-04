import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Splash = () => {
  const navigation = useNavigation();
const go =()=>{
    navigation.navigate("Main")
}
  return (
    <View style={Styles.Container1}>
      <ImageBackground
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'flex-end',
        }}
        source={require('../../Assets/pic/first.jpg')}
        resizeMode="cover" 
      >
        <View>
          <View style={Styles.head2}>
            <Text style={Styles.txt1}>Build your</Text>
            <Text style={Styles.txt2}>financial goals</Text>
          </View>
          <View style={Styles.head3}>
            <View style={Styles.txt3Container}>
              <Text style={Styles.txt3}>
                A dream doesn't become reality through 
              </Text>
              <Text style={Styles.txt3Center}>magic it takes sweat determination</Text>
            </View>
          </View>
        </View>
        <View style={Styles.btnContainer}>
          <TouchableOpacity style={Styles.btn} onPress={go}>
            <Icon
              style={{ alignSelf: 'center' }}
              name='arrow-redo-sharp' 
              color="#000"
              size={23}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const Styles = StyleSheet.create({
  Container1: {
    flex: 1,
  },
  head2: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  txt1: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Sailec Bold',
    marginLeft: 30,
  },
  txt2: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Sailec Bold',
  },
  head3: {
    marginHorizontal: 23,
  },
  txt3Container: {
    alignSelf: 'center',
    alignItems: 'center', 
  },
  txt3: {
    color: '#fff',
    fontFamily: 'Sailec Bold',
    letterSpacing: 1,
  },
  txt3Center: {
    color: '#fff',
    fontFamily: 'Sailec Bold',
    alignSelf: 'center',
    letterSpacing: 1,
    marginBottom: 10,
  },
  dotsContainer: {
    marginTop: 10,
    alignSelf: 'center',
  },
  dotsText: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'red',
    width: 1,
  },
  btnContainer: {
    alignItems: 'flex-end',
    marginRight: 20, 
  },
  btn: {
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "blue",
    borderRadius: 10,
    paddingHorizontal:16,
    paddingVertical:4,
    marginVertical:10
  }
});

export default Splash;
