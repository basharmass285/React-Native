import React, {useState, useRef} from 'react';
import { View,Text, StyleSheet, StatusBar, Image, FlatList,TouchableOpacity } from 'react-native';
import { General } from '../contants';
import { WelcomeCard } from '../components';
import { Colors } from '../contants';
import { Display } from '../utils';
import Separator from '../components/Separator';
import SigninScreen from './SigninScreen';

const pageStyle = isActive =>
  isActive
    ? styles.page
    : {...styles.page, backgroundColor: "gray" };


    const Pagination = ({index}) => {
      return (
        <View style={styles.pageContainer}>
          {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
            i === index ? (
              <View style={pageStyle(true)} key={i} />
            ) : (
              <View style={pageStyle(false)} key={i} />
            ),
          )}
        </View>
      );
    };
    
    

    const WelcomeScreen = ({ navigation }) => {
  const [welcomeListIndex, setWelcomeListIndex] = useState(0);
  const welcomeList = useRef();
  const onViewRef = useRef(({changed}) => {
    setWelcomeListIndex(changed[0].index);
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const pageScroll = () => {
    welcomeList.current.scrollToIndex({
      index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
    });
  };



  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} translucent />
      <Separator   height={StatusBar.currentHeight}/>
      <Separator   height={Display.setHeight(8)}/>
      <View style={styles.container}>
        <FlatList
        ref={welcomeList}
          data={General.WELCOME_CONTENTS}
          keyExtractor={item => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          renderItem={({ item }) => <WelcomeCard {...item} />}
        />
      </View>
      <Separator height={Display.setHeight(8)} />
      <Pagination index={welcomeListIndex} />
      <Separator height={Display.setHeight(8)} />
      {welcomeListIndex === 2 ? (
      <TouchableOpacity
      style={styles.gettingStartedButton}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Signin')}>
      <Text style={styles.gettingStartedButtonText}>התחל</Text>
      </TouchableOpacity>
     
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{marginLeft: 10}}
            onPress={() => welcomeList.current.scrollToEnd()}>
            <Text style={styles.buttonText}>דלג</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => pageScroll()}>
            <Text style={styles.buttonText}>הבא</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:  '#FFFFFF',
    paddingBottom: 30, // גובה ה-padding שתרצה להוסיף לקווים למטה
  },
  welcomeListContainer: {
    height: Display.setHeight(60),
  },
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: 8,
    width: 30,
    backgroundColor: '#c6cc51',
    borderRadius: 32,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Display.setWidth(90),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    
    fontFamily: 'Ariel',
    fontWeight: 'bold',
    lineHeight: 16 * 1.4,
  },
  button: {
    backgroundColor: '#c6cc51',
    
    paddingVertical: 20,
    paddingHorizontal: 11,
    borderRadius: 32,
  },
  gettingStartedButton: {
    backgroundColor: '#c6cc51',
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  gettingStartedButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
    lineHeight: 20 * 1.4,
    fontFamily: "Ariel",
  },
});


export default WelcomeScreen;
