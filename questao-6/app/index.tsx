import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

/* estrutura:
body
  nav_bar
    sidebar_icon
    mode_box
      text
    timer_icon
    lock_icon
  title_container
    title
  image
  timer
    timer_text
    timer_bar
  bottom_bar
    notes_button
    focus_button
    save_button
*/

/* Nicolas tem imagens com fundo mas não quero perder tempo tirando o fundo 
-- imagina que elas estão sem fundo bem lindinhas -- obrigada  =)
*/ 

export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <View style={styles.nav_bar}>
        <Image
        style={styles.nav_bar_icon}
        source={require("../assets/images/bar-icon.jpg")}
        />
        <View style={styles.mode_box}>
          <Text style={styles.text}>Studying</Text>
        </View>
        <Image
        style={styles.nav_bar_icon}
        source={require("../assets/images/clock-icon.jpg")}
        />
        <Image
        style={styles.nav_bar_icon}
        source={require("../assets/images/lock-icon.jpg")}
        />
      </View>
      <View style={styles.title_container}>
        <Text style={styles.title}>Timer Mode</Text>
      </View>
      <Image
      style={styles.main_image}
      source={require("../assets/images/studying.jpg")}
      />
      <View style={styles.timer_container}>
        <Text style={styles.timer_text}>01:00:00</Text>
        <View style={styles.timer_bar}></View>
      </View>
      <View style={styles.bottom_bar}>
        <Image
        style={styles.bottom_icon}
        source={require("../assets/images/notes-icon.jpg")}
        />
        <Image
        style={styles.button}
        source={require("../assets/images/play_button.jpg")}
        />
        <Image
        style={styles.bottom_icon}
        source={require("../assets/images/calender-icon.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
    backgroundColor: "#D6D9FF"
  },

  nav_bar: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-between",
    margin: 10
  },

  nav_bar_icon: {
    width: "10%",
    height: "40%",
    margin: 10
  },

  mode_box: {
    width: "40%",
    height: "40%",
    margin: 10,
    borderWidth: 3,
    borderColor: "#BD55A1",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  title_container: {
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontFamily: "monospace",
    fontSize: 20
  },

  text: {
    fontFamily: "monospace",
    fontSize: 14
  },

  main_image: {
    height: "25%",
    width: "60%"
  },

  timer_container: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },

  timer_text: {
    fontFamily: "monospace",
    fontSize: 30
  },

  timer_bar: {
    width: "80%",
    height: "5%",
    margin: 20,
    borderRadius: 5,
    backgroundColor: "#BD55A1"
  },

  bottom_bar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "10%"
  },

  bottom_icon: {
    width: "17%",
    height: "70%",
    margin: 10,
    borderRadius: 25
  },

  button: {
    width: "25%",
    height: "100%",
    margin: 10,
    borderRadius: 50
  }

});
