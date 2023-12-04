import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { PRODUCTS_PAYMENT } from "../cmpntns/Payment";
import { useNavigation } from "@react-navigation/native";
import { PAYMENT_USER } from "../cmpntns/PaymentUser";
import { CheckBox } from 'react-native-elements';

const SplitTheBill = () => {
  const [selectedPayIds, setSelectedPayIds] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handlePayClick = (payId, user) => {
    if (user && user.id) {
      if (selectedPayIds.includes(payId)) {
        setSelectedPayIds(selectedPayIds.filter(id => id !== payId));
        setSelectedUsers(selectedUsers.filter(selectedUser => selectedUser.id !== user.id));
      } else {
        setSelectedPayIds([...selectedPayIds, payId]);
        setSelectedUsers([...selectedUsers, user]);
      }
    }
  };


  const navigation = useNavigation()
  const back = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconBox}>
          <TouchableOpacity onPress={back}>
            <View style={styles.iconBorder}>
              <Icon name="keyboard-arrow-left" color={'#000'} size={30} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold" }}>Split The Bill</Text>
          <Text style={styles.subText}>Share with everyone and enjoy</Text>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {PRODUCTS_PAYMENT.map((product) => (
          <TouchableOpacity
            key={product.id}
            onPress={() => handlePayClick(product.id, null)}
            style={{
              backgroundColor: selectedPayIds.includes(product.id) ? "#FFD580" : "lightgray",
              marginLeft: 10,
              padding: 10,
              borderRadius: 10,
              width: 130,
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
              <Text style={{fontWeight:"bold",color:"#000"}}>{product.name}</Text>
              <Text style={{color:"#000"}}>{product.name1}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView style={{ marginBottom: 30 }}>
        {PAYMENT_USER.map((product) => (
          <TouchableOpacity
            key={product.id}
            onPress={() => handlePayClick(product.id, product)}
            style={{ flexDirection: "row", alignItems: "center", marginVertical: 15, marginTop: 20 }}
          >
            <View style={{ marginLeft: 10, borderWidth: 1, backgroundColor: "#fff", padding: 10, borderRadius: 10, width: 50 }}>
              <Image
                source={product.image}
                resizeMode="cover" style={{ width: 30, height: 40 }}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 10, flexDirection: "row", justifyContent: "space-between" }}>
              <View>
                <Text style={{color:"#000",fontWeight:"bold"}}>{product.name}</Text>
                <Text style={{color:"#000"}}>{product.name1}</Text>
              </View>
              <View style={{ flexDirection: "column", justifyContent: "flex-end" }}>
                <TouchableOpacity
                  onPress={() => handlePayClick(product.id, product)}
                  style={{
                    marginHorizontal: 20,
                  }}
                >
                  <MaterialCommunityIcons
                    name={product.icon.props.name}
                    size={30}
                    color={selectedPayIds.includes(product.id) ? "#FFD580" : "lightgray"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={{marginLeft:20,color:"#000",fontSize:15,fontWeight:"bold"}}>Who Are Paying</Text>
      <View style={{flexDirection: "row", alignItems: "center",marginHorizontal:20,marginBottom:20}}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {selectedUsers.map((user, index) => (
      <View key={user.id} style={{ flexDirection: "row", alignItems: "center" }}>
        {user && user.image && (
          <Image
            source={user.image}
            resizeMode="cover" style={{ width: 50, height: 70, marginRight: 10 }}
          />
        )}
      </View>
    ))}
  </ScrollView>
  <TouchableOpacity style={styles.righticon}>
    <Icon name="arrow-right-alt" color={'#000'} size={30} />
  </TouchableOpacity>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 10
  },
  iconBox: {
    marginRight: 10,
  },
  iconBorder: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 5,
    backgroundColor: "lightgray",
  },
  textContainer: {
    flexDirection: "column",
  },
  subText: {
    color: "gray",
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  righticon: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#FFD580",
  },
});

export default SplitTheBill;
