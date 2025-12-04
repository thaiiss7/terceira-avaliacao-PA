import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, router } from 'expo-router';
import { app } from '../firebaseConfig';

/*
estrutura:
body
  nav_bar
  title
  input_box
  input_box
  input_box
  signup_box
*/

export default function HomeScreen() {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");

  const auth = getAuth(app)

  const minPassword = 6

  const singUp = async () => {
  
    if (password.length >= minPassword) {
      if(password === confirmPassword) {
        return createUserWithEmailAndPassword(auth, email, password)
      } else {
        return alert("Erro!")
      }
    } else {
      return alert("Erro!")
    }
  }

  useEffect(() => {
    console.log(email, password, confirmPassword)
  }, [email, password, confirmPassword])

  return (
    <View style={styles.body}>
      <View style={styles.nav_bar}>
        <Image
        style={styles.nav_bar_icon}
        source={require("../assets/images/nav-icon.jpg")}
        />
      </View>
      <View style={styles.title_container}>
        <Text style={styles.title}>Sign-Up</Text>
      </View>
      <TextInput style={styles.input_box} onChangeText={(value) => setEmail(value)} placeholder='Email: '></TextInput>
      <TextInput style={styles.input_box} onChangeText={(value) => setPassword(value)} placeholder='Password: '></TextInput>
      <TextInput style={styles.input_box} onChangeText={(value) => setConfirmPassword(value)} placeholder='Repeat password: '></TextInput>
      <TouchableOpacity style={styles.login_box} onPress={() => singUp()}>
        <View>
          <Text>Sign-Up</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "center", 
    backgroundColor: "#B1CDE3"
  },

  nav_bar: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },

  nav_bar_icon: {
    width: "15%",
    height: "60%",
    margin: 10,
    borderRadius: 10
  },

  title_container: {
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontFamily: "monospace",
    fontSize: 30
  },

  input_box: {
    height: "5%",
    width: "70%",
    borderRadius: 5,
    margin: 10,
    backgroundColor: "#F5FDFF",
    padding: 10
  },

  login_box: {
    height: "5%",
    width: "70%",
    borderRadius: 5,
    margin: 10,
    backgroundColor: "#7B9BB5",
    alignItems: "center",
    justifyContent: "center"
  },

});
