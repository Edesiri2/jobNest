import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import styles from "./popularjobs.style";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import jobs from "../../../hook/job";
import { useAppContext } from "../../../constants/context";

const PopularJobs = () => {
  const router = useRouter();
  // const {id}= useLocalSearchParams();
  const { isLoading, err, activeJobType, setActiveJobType, searchJob, setSearchJob } = useAppContext();

    const filteredJobs = jobs.filter((job)=>job.company.toLowerCase().includes(searchJob.toLowerCase())||
    job.title.toLowerCase().includes(searchJob.toLowerCase())||
    job.location.toLowerCase().includes(searchJob.toLowerCase())).filter((job)=>job.type=== activeJobType);
  


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity onPress={() => router.push("/page/allPopularJob")}>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#900000" />
        ) : err ? (
          <Text>Error found: {err.message}</Text>
        ) : (
          <FlatList
            data={filteredJobs}
            renderItem={({ item }) => <PopularJobCard job={item} />}
            horizontal
            keyExtractor={(item) => item?.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ columnGap: 10 }}
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
