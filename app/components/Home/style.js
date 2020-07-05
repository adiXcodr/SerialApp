import { StyleSheet } from 'react-native';
import {
    StatusBar
  } from "react-native";

export default StyleSheet.create({

    full: {
        flex: 1,
        color:'white'
      },
      body: {
        flex: 1,
        marginTop:StatusBar.currentHeight,
        backgroundColor:"#212121"
      },
      container: {
        flex: 1,
        marginTop: 20,
        marginLeft: 16,
        marginRight: 16
      },
      header: {
        display: "flex",
        justifyContent: "center"
        //alignItems: "center"
      },
      line: {
        display: "flex",
        flexDirection: "row"
      },
      line2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      },
      title: {
        width: 100,
        color:'white'
      },
      value: {
        marginLeft: 20,
        color:'white'
      },
      output: {
        marginTop: 10,
        height: 300,
        padding: 10,
        backgroundColor: '#696969',
        borderWidth: 1
      },
      inputContainer: {
        marginTop: 10,
        borderBottomWidth: 2
      },
      textInput: {
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        color:'white',
        backgroundColor:'#696969'
      },
      button: {
        marginTop: 16,
        marginBottom: 16,
        paddingLeft: 15,
        paddingRight: 15,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#147efb",
        borderRadius: 3
      },
      buttonText: {
        color: "#FFFFFF"
      }


});