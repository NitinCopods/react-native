import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  barGraph,
  calculator,
  calendar,
  calendarWithPensil,
  cardOne,
  cardThree,
  cardTwo,
} from "./../../../image";

const Carousal = () => {
  const pageData = [
    {
      name: "Top Mutual Fund Myths Busted!",
      desc: "Let's bust some common mutual fund myths so that you can invest stress-free!",
      image: calculator,
      color:'#6234aa'
    },
    {
      name: "Myth: With mutual funds, my money will get locked in",
      desc: "Fact: All open-ended mutual funds except Tax-Saving Funds have no lock-in. You can withdraw money any time.",
      image: calendar,
      color:'#497dc5'
    },
    {
      name: "Myth: Mutual Funds are not safe.",
      desc: "Fact: Mutual Funds are highly regulated by SEBI to protect the interests of investors. Market risk can be easily assessed due to their high transparency.",
      image: barGraph,
      color:'#20bad2'
    },
    {
      name: "Myth: I will not be able to modify my SIPs.",
      desc: "Fact: SIPs are highly flexible. You can easily modify, pause or delete your SIP as per your choice.",
      image: calendarWithPensil,
      color:'#52df92'
    },
    {
      name: "Myth: With mutual funds, my money will get locked in",
      desc: "Fact: All open-ended mutual funds except Tax-Saving Funds have no lock-in. You can withdraw money any time.",
      image: calendar,
      color:'#497dc5'
    },
    {
      name: "Myth: Mutual Funds are not safe.",
      desc: "Fact: Mutual Funds are highly regulated by SEBI to protect the interests of investors. Market risk can be easily assessed due to their high transparency.",
      image: barGraph,
      color:'#20bad2'
    },
    {
      name: "Myth: I will not be able to modify my SIPs.",
      desc: "Fact: SIPs are highly flexible. You can easily modify, pause or delete your SIP as per your choice.",
      image: calendarWithPensil,
      color:'#52df92'
    },
    {
      name: "Myth: With mutual funds, my money will get locked in",
      desc: "Fact: All open-ended mutual funds except Tax-Saving Funds have no lock-in. You can withdraw money any time.",
      image: calendar,
      color:'#497dc5'
    },
    {
      name: "Myth: Mutual Funds are not safe.",
      desc: "Fact: Mutual Funds are highly regulated by SEBI to protect the interests of investors. Market risk can be easily assessed due to their high transparency.",
      image: barGraph,
      color:'#20bad2'
    },
    {
      name: "Myth: I will not be able to modify my SIPs.",
      desc: "Fact: SIPs are highly flexible. You can easily modify, pause or delete your SIP as per your choice.",
      image: calendarWithPensil,
      color:'#52df92'
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [clicked, setClicked] = useState(false);
 
  useEffect(()=>{
    let timeout = setTimeout(()=>{
      if(clicked === true){
        clearTimeout(timeout);
        setWidth(0);
        setClicked(false);
      }
       if(width < 100 && clicked === false){
          setWidth(width+0.5);
        }
      if(width === 100){
        if (activeIndex < pageData.length - 1) {
          setWidth(0)
          setActiveIndex(activeIndex + 1);
        }
        if (activeIndex === pageData.length - 1) {
          setWidth(0)
          setActiveIndex(0);
        }
      }
    },20)
  },[width, activeIndex, clicked])



   function previous(){
    if(activeIndex > 0){
      setWidth(0)
      setClicked(true);
      setActiveIndex(activeIndex-1);
    }
  }

   function next(){
   if(activeIndex < pageData.length-1){
       setClicked(true)
      setActiveIndex(activeIndex+1)
   }else{
    setActiveIndex(0)
   }
  }

  return (
    <View style={{height:'100%'}}>
      <View style={styles.Button}>
        <Pressable style={styles.previous}onPress={() => previous()} ></Pressable>
        <Pressable style={styles.next} onPress={() => next()}></Pressable>
      </View>
    <ScrollView style={{...styles.carousal, backgroundColor: pageData[activeIndex].color}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {pageData.map((item, index) => {
          return (
            <View style={{...styles.bar,width: `calc(100% / ${pageData.length} - 6px )`, backgroundColor:'grey',
            marginHorizontal: "3px",}}>
              <Pressable
              key={index}
              style={{
                ...styles.bar,
                width: activeIndex === index ? `${width}%` : activeIndex > index ? '100%' : 0 ,
                margin:0,
                backgroundColor:
                  activeIndex === index || activeIndex > index
                    ? "white"
                    : "grey",
              }}
              // onPress={() => getData(item, index)}
            ></Pressable>
            </View>
          );
        })}
      </View>
      <View>
        <View style={{ flex: 1, marginVertical: 10, padding: 20 }}>
          <Image
            source={pageData[activeIndex].image}
            resizeMode="contain"
            style={styles.illustration}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.heading}>{pageData[activeIndex].name}</Text>
          <Text style={styles.description}>{pageData[activeIndex].desc}</Text>
        </View>
      </View>
    </ScrollView>
   </View> 
  );
};

export default Carousal;

const styles = StyleSheet.create({
  carousal: {
    padding: 20,
    width: "100%",
    height: "100%",
  },
  Button:{
   position:'absolute',
   height: Dimensions.get('screen').height - 46,
   flexDirection:'row',
   width:'100%',
   zIndex:99
  },
  previous:{
   width:'25%'
  },
  next:{
    width:'75%'
  },
  bar: {
    height: "1.5px",
    borderRadius:'17px',
    
  },
  illustration: {
    height: "200px",
    width: "100%",
  },
  heading: {
    fontSize: "21px",
    fontWeight: "700",
    color: "white",
  },
  description: {
    fontSize: "15px",
    fontWeight: "300",
    color: "white",
    marginTop: 10,
  },
});
