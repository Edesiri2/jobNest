import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import styles from "./welcome.style";
import kemal from "../../../assets/images/kemal.jpg";
import { useAppContext } from "../../../constants/context";
import { router } from "expo-router";
import Animated, {FadeIn, FadeOut} from "react-native-reanimated";

const jobType = ["Full Time", "Part Time", "Contract"];
const description = ["Perfect", "Next", "Dream"];

const Welcome = (dimension) => {
const { jobDescription, setJobDescription, searchJob, setSearchJob,activeJobType, setActiveJobType} = useAppContext();

  useEffect(() => {
    const interval = setInterval(() => {
      const index = description.indexOf(jobDescription);
      if (index < description.length - 1) {
        setJobDescription(description[index + 1]);
      } else {
        setJobDescription(description[0]);
      }
    }, 4000);
    return () => clearInterval(interval);
  });
  const BASE_URL = "https://api.jobnest.com/api/v1";

  const handleSubmit =  () => {
    console.log("searchJob",searchJob);
    

  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bttNcontainer}>
        <TouchableOpacity>
          <Entypo name="menu" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.kermek} source={kemal} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.userName}>Hello Eric</Text>
        <Text style={styles.welcomeMessage}>
          Find Your {jobDescription && (
            <Animated.Text entering={FadeIn.delay(50000)} exiting={FadeOut} style={{ color: "#900000" }}>{jobDescription}</Animated.Text>
          )}
          Job
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchWrapper}
          value={searchJob}
          placeholder="Search for jobs"
          onChangeText={(text) => {
            setSearchJob(text);
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "black", padding: 15, borderRadius: 10,}}
          onPress={handleSubmit}
        
          title="Search"
          
        ><Text style={{color:"white", fontSize:12, fontWeight:"800"}}>Search</Text></TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobType}
          renderItem={(item) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setActiveJobType(item.item);
                console.log(item.item);
                // router.push(`/search/${item}`)
              }}
              style={[
                styles.tab(activeJobType, item),
                {
                  backgroundColor:
                    activeJobType === item.item ? "#D46A6A" : "#f5f5f5",
                },
              ]}
            >
              <Text
                style={[
                  styles.tabText(activeJobType, item),
                  { color: activeJobType === item.item ? "white" : "#900000" },
                ]}
              >
                {item.item}
              </Text>
            </TouchableOpacity>
          )}
          horizontal
          contentContainerStyle={{ columnGap: 10 }}
          keyExtractor={(item) => item}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
