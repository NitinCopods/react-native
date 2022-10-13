import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const InnerCards = ({ item, borderRadius }) => {
  return (
    <View style={{ ...styles.card, backgroundColor: item.color ? item.color : '', borderRadius:borderRadius }}>
      <Image style={styles.illustration} resizeMode="contain" source={item.image} />
      <View style={styles.middle}>
        <Text style={{ fontSize: "13px", fontWeight: "700" }}>
          {item.new === true ? <Text style={styles.badge}>New</Text> : ""}
          {item.heading}
        </Text>
        <Text
          style={{
            fontSize: "9px",
            fontWeight: "300",
            paddingVertical: 3,
            lineHeight: 12,
          }}
        >
          {item.description}
        </Text>
      </View>
      <FontAwesome
        style={styles.icon}
        name="angle-right"
        size={17}
        color="black"
      />
    </View>
  );
};

export default InnerCards;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between",
    borderBottomColor: "whitesmoke",
    borderBottomWidth: 1,
  },
  illustration: {
    width: "20%",
  },
  middle: {
    width: "65%",
  },
  icon: {
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  badge: {
    fontSize: "9px",
    color: "white",
    backgroundColor:'red',
    fontWeight: "700",
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: "10px",
    marginRight: "2px",
  },
});
