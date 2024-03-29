import React from "react";
import repositories from "../data/repositories";
import {FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    />
  );
};
export default RepositoryList;
