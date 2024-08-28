import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import jobs from "../../hook/job";
import { router } from "expo-router";

const AllPopularJob = () => {
  const renderList = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: "/page/jobDetail",
            params: {
          
              id:item.id,
              company:item.company,
              location:item.location,
              title:item.title,
              salary:item.salary,
              type:item.type,
              posted:item.posted,
              shortDescription:item.description.shortDescription,
              benefits:item.description.fullDescription.benefits,
              responsibilities:
               item.description.fullDescription.responsibilities,
              requirements:item.description.fullDescription.requirements,
            },
          });
        }}
        style={styles.cardContainer}
      >
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.companyName}>{item.company}</Text>
        <Text style={styles.jobLocation}>{item.location}</Text>
        <Text style={styles.jobSalary}>{item.salary}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.jobType}>{item.type}</Text>
          <Text style={styles.postedDate}>{item.posted}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{marginVertical:40}}>
          <FlatList
      data={jobs}
      renderItem={renderList}
      keyExtractor={(item) => item?.id}
    />
    </View>
  
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    marginVertical: 6,
    marginHorizontal: 20,
    width: "full",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  companyName: {
    fontSize: 16,
    color: "#666",
    marginBottom: 3,
  },
  jobLocation: {
    fontSize: 14,
    color: "#888",
    marginBottom: 3,
  },
  jobType: {
    fontSize: 11,
    color: "#aaa",
  },
  jobSalary: {
    fontSize: 14,
    color: "#900000",
    marginBottom: 5,
    fontWeight: "bold",
  },
  postedDate: {
    fontSize: 11,
    color: "#aaa",
  },
});

export default AllPopularJob;
