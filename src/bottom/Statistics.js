import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PagerView from 'react-native-pager-view';
import { eachWeekOfInterval, subDays, addDays, eachDayOfInterval, format } from 'date-fns';
import { PRODUCTSLISTS_ITEMS } from "../cmpntns/productlist";
import { PRODUCTS_STATIC } from "../cmpntns/Statisticscmnt";


const Statistics = () => {
  
  return (
    <View style={styles.container}>
<ScrollView>
  <View style={{marginVertical:10}}>
  <Text style={{textAlign:"center",fontSize:18,color:"#000",fontWeight:"500"}}>Statistics Transaction</Text>
  </View>
  <View style={{flexDirection:"row",flex:1,alignItems:"center",justifyContent:"center"}}>
        {PRODUCTS_STATIC.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={{
               backgroundColor:  "#fff" ,
              marginLeft: 10,
              padding: 10,
              borderRadius: 10,
              width: 170,
              height: 80,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20
            }}
          >
            <View>
              {product.icon}
            </View>
            <View style={styles.productDetails}>
              <Text style={{color:"#000"}}>{product.name}</Text>
              <Text style={{color:"#000",fontWeight:"bold"}}>{product.name1}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <Image resizeMode="cover" style={{flex:1 ,height:250,width:"90%",borderRadius:20,justifyContent:"center",alignItems:"center",alignSelf:'center',marginTop:20}} source={require("../../Assets/pic/statics.jpg")}/>
      </View>
      <View>
        <Image resizeMode="cover" style={{flex:1 ,height:270,width:"90%",borderRadius:20,justifyContent:"center",alignItems:"center",alignSelf:'center',marginTop:20}} source={require("../../Assets/pic/staticstwo.jpg")}/>
      </View>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

});

export default Statistics;
