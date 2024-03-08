import React from "react";
import { View, StyleSheet, Image } from "react-native";
import theme from "../theme.js";
import RepositoryItemHeader from './RepositoryItemHeader.jsx'
import RepositoryStats from "./RepositoryStats.jsx";


const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 15
  
  },

});

export default RepositoryItem;
