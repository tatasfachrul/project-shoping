import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import MainApp from "./screens/mainScreen";

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320
  }
});

const slides = [
  {
    key: "somethun",
    title: "Welcome",
    text: "Welcome to TapTap\nThe most absurd game you've ever played!\n LOL!",
    // image: require("./assets/1.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#59b2ab"
  },
  {
    key: "somethun-dos",
    title: "Play",
    text: "Play the game, and feel the awkwardness",
    // image: require("./assets/2.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#e84118"
  },
  {
    key: "somethun1",
    title: "Rewards",
    text: "Get Rewards\n\nEVERY WEEK!!!",
    // image: require("./assets/3.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#22bcb5"
  }
];

export default class introApp extends React.Component {
  state = {
    // Set True for MainApp, False for Introduction
    showRealApp: true
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };

  render() {
    if (this.state.showRealApp) {
      return <MainApp />;
    } else {
      return (
        <AppIntroSlider slides={slides} onDone={this._onDone} showSkipButton />
      );
    }
  }
}