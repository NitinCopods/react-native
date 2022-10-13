import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CardWrapper from "../CardWrapper";
import { FontAwesome } from "@expo/vector-icons";
import { calculator, calendar } from "../../image";
import InnerCards from "./InnerCards";

const Calculator = () => {
  const heading = "Wealth Calculators";
  const description = "For all your investment needs";
  let cardData =[{
    heading:'SIP Calculator',
    description:'Find out how your monthly SIP investment can grow over time.',
    color:'#bbe3e3',
    image:calendar
  },{
    heading:'Wealth Calculator',
    description:'Find out how much you need to invest monthly to achieve your wealth target.',
    color:'#aee0c4',
    image:calculator
  }]
  const btnText = 'VIEW ALL CALCULATORS'
  return (
    <CardWrapper heading={heading} description={description} btnText={btnText}>
      <View style={styles.calendar}>
       {cardData.map((item, index)=>{
        return(
          <InnerCards key={index} item={item} borderRadius={'13px'}></InnerCards>
        )
       })}
      </View>
    </CardWrapper>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    borderRadius: 7,
    paddingVertical: 15,
    justifyContent: "space-between",
    marginTop:13
  },
  calendar:{
    flexDirection:'column',
    gap:'13px',
    padding:13
  }
});
