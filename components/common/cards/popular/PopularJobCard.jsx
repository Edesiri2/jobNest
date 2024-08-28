import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useAppContext } from "../../../../constants/context";

const PopularJobCard = ({ job }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: "/page/jobDetail",
          params: {
            id: job.id,
            company: job.company,
            location: job.location,
            title: job.title,
            salary: job.salary,
            type: job.type,
            posted: job.posted,
            shortDescription: job.description.shortDescription,
            benefits: job.description.fullDescription.benefits,
            responsibilities: job.description.fullDescription.responsibilities,
            requirements: job.description.fullDescription.requirements,

          },
        });
        console.log("clicked");
      }}
      style={styles.cardContainer}
    >
      <Text style={styles.jobTitle}>{job.title}</Text>
      <Text style={styles.companyName}>{job.company}</Text>
      <Text style={styles.jobLocation}>{job.location}</Text>
      <Text style={styles.jobSalary}>{job.salary}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.jobType}>{job.type}</Text>
        <Text style={styles.postedDate}>{job.posted}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    marginVertical: 10,
    width: 240,
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

export default PopularJobCard;
