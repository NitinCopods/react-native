import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native';
import CardWrapper from '../CardWrapper'
import { FontAwesome } from "@expo/vector-icons";
import InnerCards from './InnerCards';
import { barGraph, calendarWithPensil, coins, jar, mfCalendar, piggyBank } from '../../image';

const MutualFund = () => {
  const heading = 'MF Insights';
  const description = 'Interesting insights to help enhance your understanding of mutual funds.'
  const cardData =[
    {
      heading:'Mutual Funds vs FD - What should you go with?',
      description:'What are the advantages of investing in MF over FDs.',
      new:true,
      image:piggyBank
    },
    {
      heading:'Top 5 Mutual Fund myths - Busted',
      description:'Bust these mutual fund myths for stress-free investment.',
      new:false,
      image:jar
    },
    {
      heading:'Why is everybody investing via SIPs?',
      description:"Here's why millions of investors invest via SIPs.",
      new:false,
      image:coins
    },
    {
      heading:'Which is the best SIP date?',
      description:'Is there a best SIP data that can enhance your returns?',
      new:false,
      image:mfCalendar
    },
    {
      heading:'The secret of beating market ups & downs',
      description:'Know how you can beat stock market fluctuations.',
      new:false,
      image:barGraph
    },
    {
      heading:'Have you heard of a good EMI?',
      description:'You must have heard of Home loan EMI, Car loan EMI, etc. But what is Good EMI?',
      new:false,
      image:calendarWithPensil
    }
  ]
  return (
    <CardWrapper heading={heading} description={description} btnText={''}>
        <View style={{ paddingHorizontal: 13 }}>
            {
              cardData.map((item,index)=>{
               return (
                <InnerCards key={index} item={item} borderRadius={'0px'}></InnerCards>
               )
              })
            }
        </View>
    </CardWrapper>
  )
}

export default MutualFund

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between",
    borderBottomColor:'whitesmoke',
    borderBottomWidth:1,
    marginTop:13
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
});