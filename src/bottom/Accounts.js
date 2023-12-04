import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PagerView from 'react-native-pager-view';
import { eachWeekOfInterval, subDays, addDays, eachDayOfInterval, format } from 'date-fns';
import { PRODUCTSLISTS_ITEMS } from "../cmpntns/productlist";
import { useNavigation } from "@react-navigation/native";


const dates = eachWeekOfInterval(
  {
    start: subDays(new Date(), 14),
    end: addDays(new Date(), 14),
  },
  {
    weekStartsOn: 1,
  }
).reduce((acc, cur) => {
  const alldays = eachDayOfInterval({
    start: cur,
    end: addDays(cur, 6),
  });
  acc.push(alldays);
  return acc;
}, []);
const Accounts = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const navigation=useNavigation()

  const user =()=>{
    navigation.navigate("User")
  }
    const handleDatePress = (day) => {
    setSelectedDate(day);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.text}>Olivia Evans</Text>
          <Text style={styles.title}>Care Olivia</Text>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.roundButton}>
            <Image
              resizeMode="cover"
              source={require("../../Assets/pic/main.png")}
              style={styles.roundImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sndheader}>
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.cardText}>Your Cards</Text>
            <Text style={styles.secondaryText}>You have 4 payments to pay</Text>
          </View>
          <View style={styles.rightContent}>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
          </View>
        </View>
        <View style={styles.cardDetails}>
          <View style={{ borderWidth: 1, borderRadius: 10, width: 50, height: 40, backgroundColor: "#FFD580", alignItems: "center", justifyContent: "center", }}>
            <Icon name="card-account-details-outline" color={'#ff6700'} size={30} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", flex: 1 }}>
            <Text style={{marginLeft:10,color:'#000'}}>**** **** **** 7823</Text>
            <Text style={styles.amountText}>$252.24</Text>
          </View>
        </View>
      </View>
      <PagerView style={styles.containerdate}>
        {dates.map((week, i) => (
          <View key={i}>
            <View style={styles.row}>
              {week.map((day) => {
                const txt = format(day, 'EEEEE');
                const isSelected = selectedDate && selectedDate.getTime() === day.getTime();
                return (
                  <TouchableOpacity
                    key={day.toString()}
                    style={[styles.day, { backgroundColor: isSelected ? 'orange' : 'white' }]}
                    onPress={() => handleDatePress(day)}
                  >
                    <Text style={{color:"#000"}}>{txt}</Text>
                    <Text style={{color:"#000"}}>{day.getDate()}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ))}
      </PagerView>
      <Text>
        ____________________________________________________________
      </Text>
      <View style={{marginTop:10 ,marginHorizontal:10}}>
        <Text style={{fontWeight:"bold",color:"black",fontSize:20}}>
          Members
        </Text>
        </View>
        <ScrollView style={{ marginHorizontal: 10,marginTop:20}} horizontal={true}>
                <View >
                <TouchableOpacity onPress={user}>
                    <Image style={{ marginHorizontal: 8,height:180 }} source={require('../../Assets/pic/user3.png')} />
                    </TouchableOpacity>
                    <View style={{alignSelf:"center",marginTop:3}}>
                    <Text style={{marginTop:3,fontSize:20,color:"black",fontWeight:"bold"}}>Tua Manuera</Text>
                    <Text style={{fontSize:15,color:"#000"}}>Partner</Text>
                    </View>
                </View>
                <View>
                <TouchableOpacity onPress={user}>
                <Image style={{ marginHorizontal: 8,height:180 }} source={require('../../Assets/pic/user2.png')} />
                </TouchableOpacity>
                <View style={{alignSelf:"center",marginTop:3}}>
                    <Text style={{marginTop:3,fontSize:20,color:"black",fontWeight:"bold"}}>Maramana</Text>
                    <Text style={{fontSize:15,color:'#000'}}>Member</Text>
                    </View>
                </View>
                <View>
                <TouchableOpacity onPress={user}>
                <Image style={{ marginHorizontal: 8,height:180 }} source={require('../../Assets/pic/user1.jpeg')} />
                </TouchableOpacity>
                <View style={{alignSelf:"center",marginTop:3}}>
                    <Text style={{marginTop:3,fontSize:20,color:"black",fontWeight:"bold"}}>Charla</Text>
                    <Text style={{fontSize:15,color:"#000"}}>Member</Text>
                    </View>
                </View>
                <View>
                <TouchableOpacity onPress={user}>
                <Image style={{ marginHorizontal: 8,height:180 }} source={require('../../Assets/pic/user4.png')} />
                </TouchableOpacity>
                <View style={{alignSelf:"center",marginTop:3}}>
                    <Text style={{marginTop:3,fontSize:20,color:"black",fontWeight:"bold"}}>Charla</Text>
                    <Text style={{fontSize:15,color:"#000"}}>Member</Text>
                    </View> 
                </View>
            </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFD580",
  },
  text: {
    color: "#fff",
    marginHorizontal: 10,
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 20,
  },
  rightContainer: {
    flexDirection: "row",
  },
  roundImage: {
    height: 50,
    width: 45,
    borderRadius: 10,
    marginTop: 10,
    marginTop: 20,
    marginRight: 20,
  },
  title: {
    color: "#fff",
    marginHorizontal: 12,
    fontSize: 13,
    fontWeight: "bold",
  },
  sndheader: {
    backgroundColor: "#FFFEF2",
    borderRadius: 30,
    marginTop: -30,
    height: "26%"
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  cardText: {
    fontSize: 23,
    color: "#000",
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: 16,
    color: "#000",
  },
  rightContent: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  circle: {
    backgroundColor: "gray",
    height: 6,
    width: 6,
    borderRadius: 10,
    marginBottom: 4,
  },
  cardDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 15,
  },
  amountText: {
    marginLeft: 'auto',
    fontSize: 18,
    fontWeight: "bold",
    color:"#000"
  },
  containerdate: {
    marginTop: -30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  day: {
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginTop: 10,

  },
});

export default Accounts;
