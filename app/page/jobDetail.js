import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Ionicon from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function JobDetail() {
  // Using useLocalSearchParams to extract job details from the navigation params
  const {
    id,
    benefits,
    responsibilities,
    requirements,
    shortDescription,
    company,
    location,
    title,
    salary,
    type,
    posted,
  } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Job Overview Section */}
      <View style={styles.jobOverview}>
        <Text style={styles.jobTitle}>{title}</Text>
        <Text style={styles.company}>{company}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>

      {/* Job Details Section */}
      <View style={styles.jobDetails}>
        <Text style={styles.sectionTitle}>Job Details</Text>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Job Type: {type}</Text>
          <Text style={styles.detailLabel}>Salary: {salary}</Text>
        </View>
      </View>

      {/* Full Description Section */}
      <View style={styles.fullDescription}>
        <Text style={styles.sectionTitle}>Full Description</Text>
        <Text style={styles.shortDescription}>{shortDescription}</Text>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailHeader}>Benefits:</Text>
          <Text style={styles.detailText}>{benefits}</Text>
          
          <Text style={styles.detailHeader}>Responsibilities:</Text>
          <Text style={styles.detailText}>{responsibilities}</Text>
          
          <Text style={styles.detailHeader}>Requirements:</Text>
          <Text style={styles.detailText}>{requirements}</Text>
        </View>
      </View>

      {/* Apply Button */}
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyButtonSecondary}>
        <Ionicon name="cloud-download" size={16} color="black" />
        <Text style={{color:"black", fontWeight:"bold"}}>Save this job</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyButtonSecondary}>
        <FontAwesome name="exclamation-triangle" size={16} color="black" />
        <Text style={{color:"black",fontWeight:"bold"}}>Report job</Text>
      </TouchableOpacity>

    </View>
  );
}


const styles = {
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20,
  },
  jobOverview: {
    marginVertical: 20,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  company: {
    fontSize: 16,
    color: "#666",
  },
  location: {
    fontSize: 14,
    color: "#888",
  },
  jobDetails: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  detailItem: {
    marginTop: 4,
  },
  detailLabel: {
    fontSize: 12,
    color: "gray",
    marginTop: 4,
  },
  fullDescription: {
    marginVertical: 20,
  },
  shortDescription: {
    fontSize: 12,
    color: "gray",
    marginTop: 4,
  },
  detailHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
  },
  detailText: {
    fontSize: 12,
    color: "gray",
    marginTop: 2,
  },
  applyButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#900000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  applyButtonSecondary: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "grey",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  applyButtonText: {
    color: "white",
    fontWeight: "bold",
  },
};
