import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar.jsx";

import { Routes, Route, Redirect } from "react-router-native";

const Main = () => {
  return (
    <View style={{flexGrow: 1}}>
      <AppBar/>
      <Routes>
        <Route path="/"  element={<RepositoryList/>}/>
        <Route path="/signin" element={<Text>Tu maldita madre</Text>}/>
      </Routes>
    </View>
  );
};

export default Main