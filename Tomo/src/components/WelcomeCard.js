import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Display} from '../utils';
import {Fonts, Colors, Images} from '../contants';

const WelcomeCard = ({title, content, image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Images[image]} resizeMode="contain" />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Display.setWidth(100),
  },
  image: {
    height: Display.setHeight(40),
    width: Display.setWidth(100),
  },
  titleText: {
    fontSize: 23, // גודל כותרת גדול יותר
    fontFamily: 'Arial Hebrew', // גופן שאתה מעדיף לכותרת // הגופן "blod" יכול להיות גופן מוגדר מראש או שגיאה בכתיבה, וודא שהגופן קיים בפונקציה createTextComponentStyle
    fontWeight: 'bold', // מרקם הגופן יהיה מודגש
    color: '#0E122B', // צבע הכותרת יהיה כחול
    marginBottom: 20, // מרווח בין הכותרת לתוכן
  },
  contentText: {
    fontSize: 18,
    fontFamily: 'Arial Hebrew', // גופן שאתה מעדיף לתוכן
    textAlign: 'center',
    color: '#0E122B',
    marginHorizontal: 20,
  },
});


export default WelcomeCard;
