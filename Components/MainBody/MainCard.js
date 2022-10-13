import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { cardOne, cardThree, cardTwo } from "../../image";
import CardWrapper from "../CardWrapper";
import Card from "./Card";

const MainCard = () => {
  let cardData = [
    {
      img: cardOne,
      imgText: "The Secret to becoming a crorepati",
      timeline: "02:12",
    },
    {
      img: cardTwo,
      imgText: "Grow Rich. Grow Equity",
      timeline: "02:34",
    },
    {
      img: cardThree,
      imgText: "Mutual Funds: A Smart Investment Choice",
      timeline: "01:37",
    },
  ];
  const heading = "Wondering how Mutual Funds will help you grow money?";
  const description =
    "Watch these short videos to get insights on Mutual Funds.";
  const btnText = 'VIEW ALL VIDEOS'  
  return (
    <CardWrapper heading={heading} description={description} btnText={btnText}>
      <View
        style={{
          paddingLeft: 13,
        }}
      >
        <ScrollView style={styles.scrollBox} horizontal={true}>
          {cardData.map((item, index) => {
            return <Card key={index} data={item}></Card>;
          })}
        </ScrollView>
      </View>
    </CardWrapper>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  scrollBox: {
    marginVertical: 15,
  },
});
