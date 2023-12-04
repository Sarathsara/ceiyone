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
const User = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedPayId, setSelectedPayId] = useState(null);
  const navigation=useNavigation()
 
    const handleDatePress = (day) => {
    setSelectedDate(day);
  };
  const handlePayClick = (payId) => {
    setSelectedPayId(payId);
    navigation.navigate("SplitTheBill"); // Navigate to "SplitTheBill" screen
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
          <View style={{ borderWidth: 1, borderRadius: 10, width: 50, height: 40, backgroundColor: "#FFD580", alignItems: "center", justifyContent: "center", marginHorizontal: 20 }}>
            <Icon name="card-account-details-outline" color={'#ff6700'} size={30} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end", flex: 1 }}>
            <Text style={{color:"#000"}}>**** **** **** 7823</Text>
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
          Split Bill
        </Text>
        </View>
        <ScrollView>
        {PRODUCTSLISTS_ITEMS.map((product) => (
          <View key={product.id} style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
            <View style={{ marginLeft: 10, borderWidth: 1, backgroundColor: "#fff", padding: 10, borderRadius: 10, width: 50 }}>
              {product.icon}
            </View>
            <View style={{ flex: 1, marginLeft: 10, flexDirection: "row", justifyContent: "space-between" }}>
              <View>
                <Text style={{color:'#000',fontWeight:"bold"}}>{product.name}</Text>
                <Text style={{color:"#000"}}>{product.name1}</Text>
              </View>
              <View style={{ flexDirection: "column", justifyContent: "flex-end" }}>
                <TouchableOpacity
                  onPress={() => handlePayClick(product.id)}
                  style={{
                    borderWidth: 1,
                    backgroundColor: selectedPayId === product.id ? "lightblue" : "lightgray",
                    padding: 10,
                    borderRadius: 10,
                    width: 60,
                    marginHorizontal: 20,
                  }}
                >
                  <Text style={{ textAlign: "center", color: "blue" }}>
                    {product.price}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
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
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 10,

  },
});

export default User;
