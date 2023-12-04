import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { PRODUCTS_ITEMS } from "../cmpntns/product";


const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Hola</Text>
        <View style={styles.rightContainer}>
          <TouchableOpacity>
            <Icon
              name='notifications'
              color="lightblue"
              size={23}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
            <Image
              resizeMode="cover"
              source={require("../../Assets/pic/main.png")}
              style={styles.roundImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>Kyootie</Text>
      <ScrollView style={{ marginHorizontal: 10,marginTop:20}} horizontal={true}>
                <View>
                    <Image style={{ marginHorizontal: 8,height:140 }} source={require('../../Assets/pic/atm.jpeg')} />
                </View>
                <View>
                <Image style={{ marginHorizontal: 8,height:140 }} source={require('../../Assets/pic/atm.jpeg')} />
                </View>
                <View>
                <Image style={{ marginHorizontal: 8,height:140 }} source={require('../../Assets/pic/atm.jpeg')} />
                </View>
                <View>
                <Image style={{ marginHorizontal: 8,height:140 }} source={require('../../Assets/pic/atm.jpeg')} />
                </View>   
            </ScrollView>
            <View style={{flex:7,backgroundColor:'#fff',borderTopLeftRadius:40,borderTopRightRadius:40,marginTop:25}}>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:20}}>
              <Text style={{color:"#000",fontWeight:"bold",fontSize:18}}>Transaction</Text>
              <Text style={{color:"#000"}}>See All</Text>
            </View>
            <ScrollView style={{ marginHorizontal: 10, marginTop: 20 }}>
        {PRODUCTS_ITEMS.map((product) => (
          <View key={product.id} style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
            <View style={{ borderWidth: 1, padding: 10, borderRadius: 10, width: 50 }}>
              {product.icon}
            </View>
            <View style={{ flex: 1, marginLeft: 10, flexDirection: "row", justifyContent: "space-between" }}>
              <View>
                <Text style={{color:"#000",fontWeight:"bold"}}>{product.name}</Text>
                <Text style={{color:"#000"}}>{product.name1}</Text>
              </View>
              <View style={{ flexDirection: "column", justifyContent: "flex-end" }}>
                <Text style={{ textAlign: "right", color:"red"  }}>
                  {product.price}
                </Text>
                <Text style={{ textAlign: "right",color:"#000"}}>
                  {product.secondVal}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center",
  },
  text: {
    color: "#000",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    alignSelf: "center",
    marginRight: 10,
  },
  roundButton: {
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  roundImage: {
    height: 40,
    width: 40, 
    borderRadius: 20,
  },
  title: {
    marginHorizontal: 10,
    color: "#000",
    fontWeight: "bold",
  },
});

export default Home;
