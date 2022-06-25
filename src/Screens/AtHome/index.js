import React, { useState } from 'react';
import { Container, Text, View, Icon } from 'native-base';
import { StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { withDecay } from 'react-native-reanimated';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import IndianaArtBoard from '../../Components/IndianaArtboard';
import AskALot from '../../Components/AskALot';
import DoNotConsent from '../../Components/DoNotConsent';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Hammer from '../../assets/Dashboard/Interaction/hammer.png';
import IndianaBar from '../../Components/IndianaBar'
function Driver({ navigation }) {
  const [slider, setSlider] = useState(0)
  const [DonotConcent, setDonotConcent] = useState(false)
  const [indianaFlag, setndianaFlag] = useState(false)

  const [askaLot, setAskaLot] = useState(false)
  function Component1() {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <ImageBackground style={styles.image} source={require('../../assets/background.png')} style={styles.image}>

          <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />
          <View style={styles.containImage}>
            <Image style={styles.backImage} source={require('../../assets/Dashboard/Interaction/police.png')} />
            <Image style={styles.backBubble} source={require('../../assets/BubbleImages/athome1.png')} />
          </View>
          {DonotConcent ? <DoNotConsent flag={setDonotConcent} /> : null}
          {indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
          <TouchableOpacity style={styles.hiddenForm1} onPress={() => setDonotConcent(true)}></TouchableOpacity>
          <ScrollView >
            <View style={styles.cardBody}>
              <Text style={styles.cardHeader}>Guidlines</Text>
              <Text style={styles.cardDesc1}>*Officers Knocks on door or enters property</Text>
              <Text style={styles.cardDesc2}>Do Not Open the door</Text>
              <Text style={styles.cardDesc1}>Ask Why the officer Is there</Text>
              <Text style={styles.subDesc}>IF the reason Is easily solvable, try to resolve</Text>

              <Text style={styles.exampleHeader}>Examples</Text>

              <ScrollView nestedScrollEnabled={true} style={styles.exampleBox}>
                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText}>Noise Complaint</Text>
                </View>

                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText}> Smell Complaint</Text>
                </View>

                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText}>Suspicious Activity (Too many people)</Text>
                </View>

                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText}> Looking unfamiliar</Text>
                </View>

                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText}> HOA Violations</Text>
                </View>

                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText}> Domestic Complaints</Text>
                </View>

              </ScrollView>
              <Text style={styles.subDesc}>If the officer asks to enter your home Ask if the officer has a warrant</Text>

              <View style={styles.instruction}>
                <View style={styles.subInstructionText}>
                  <Text style={{ fontSize: 16, color: '#60A5A5', fontWeight: 'bold' }}>If Yes</Text>
                  <View style={styles.subInstruction}>
                    <Text style={styles.subText}>Then allow the officer to enter and  follow their directions Use Questioning Ex</Text>
                  </View>
                </View>
                <Image style={styles.biArrow} source={require('../../assets/Dashboard/Interaction/biArrow.png')} />
                <View style={styles.subInstructionText}>
                  <Text style={{ fontSize: 16, color: '#F87E0A', fontWeight: 'bold' }}>If No</Text>
                  <View style={styles.subInstruction2}>
                    <Text style={styles.subText}>Let the officer know they can’t enter without a warrant</Text>
                  </View>
                </View>

              </View>


              <View style={styles.linkBody}>
                <Text style={styles.subText}>If the officer does not leave but instead Continuous to question and or enter (Swipe right)</Text>
              </View>

            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    )
  }
  function Component2() {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <ImageBackground style={styles.image} source={require('../../assets/background.png')} style={styles.image}>

          <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />

          <TouchableOpacity onPress={() => setAskaLot(true)} style={styles.hiddenForm}></TouchableOpacity>
          <View style={styles.containImage1}>
            <Image style={styles.backImage1} source={require('../../assets/Dashboard/Interaction/police.png')} />
            <Image style={styles.backBubble1} source={require('../../assets/BubbleImages/athome2.png')} />
          </View>
          {askaLot ? <AskALot flag={setAskaLot} /> : null}
          {indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
          <ScrollView>
            <View style={styles.questioning1}>

              <Text style={styles.questioningHeader}>If the officer tries to get into your home</Text>
              <View style={{ width: '100%', paddingLeft: '7%' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Examples</Text>
              </View>
              <ScrollView nestedScrollEnabled={true} style={styles.exampleBox1}>
                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText1}> “Can I take a look around?”</Text>
                </View>

                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText1}> “Do you mind if I step in?”</Text>
                </View>

                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText1}> “Let me in.”</Text>
                </View>

              </ScrollView>
              <Text style={styles.subQuestioning}>Memorize</Text>
              <Text style={styles.desc}>“You cannot enter, Im exercising my <Text style={{ color: '#F87E0A', fontSize: 14 }}>4th Amendment Right</Text> to protect myself and home from unreasonable search and seizures of persons or things without <Text style={{ color: '#F87E0A', fontSize: 14 }}>Probable Cause or Presentment</Text>.</Text>
              <Text style={styles.subQuestioning}>Including Random Questioning Like</Text>

              <ScrollView nestedScrollEnabled={true} style={styles.exampleBox2}>
                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText1}> “Do you live here?”</Text>
                </View>

                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText1}> “How many people live here?”</Text>
                </View>

                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText1}> “Who is all at home?”</Text>
                </View>

                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText1}> “Have you seen John Doe?”</Text>
                </View>

                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText1}> “What are you doing?”</Text>
                </View>

                <View style={styles.List}>
                  <View style={styles.listType}></View>
                  <Text style={styles.listText1}> “Have seen anything”</Text>
                </View>

              </ScrollView>
              <Text style={styles.subQuestioning}>Memorize</Text>
              <Text style={styles.questioningHeader}>“Im exercising my fifth Amendment Right to No Answer”</Text>

              <Text style={styles.subQuestioning}>You Must Answer</Text>
              <Text style={styles.desc} onPress={() => setSlider(0)}>Is anyone in this home being harmed?</Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    )
  }

  return (

    <Swipeable renderRightActions={Component2}>
      <Component1 />
    </Swipeable>
  );
}
const styles = StyleSheet.create({

  // Driver 1
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

  },

  setIndiana: {
    width: 130,
    height: 35,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 100000000000
  },

  Indianapolis: {
    width: 20,
    marginRight: 5,
    resizeMode: 'contain'
  },
  containImage: {
    position: 'absolute',
    right: '5%',
    top: '10%',
},
backImage: {
    width: 300,
    height: 500,
    resizeMode: 'contain'
},
  containImage1: {
    position: 'absolute',
    left: '-15%',
    top: '13%',
},
backImage1: {
    width: 300,
    height: 250,
    resizeMode: 'contain'
},
backBubble: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    left: '20%',
    top:'-10%'
},
backBubble1: {
    width: 170,
    height: 110,
    resizeMode: 'contain',
    position: 'absolute',
    right: '-10%',
    top:'-10%'
},
  setText: {
    fontSize: 11
  },
  hiddenForm1: {
    width: 150,
    height: 130,
    position: 'absolute',
    top: 0,
    left: '35%',
  },
  LongArrow: {
    position: 'absolute',
    zIndex: 10000,
    left: -10,
    top: 120
  },
  biArrow: {
    position: 'absolute',
  },
  centerCards: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  crumbs: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    borderRadius: 10,
    margin: 4,
  },
  unSelectcrumbs: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: 8,
    height: 8,
    margin: 4,
    borderRadius: 3
  },
  bootomArrow: {
    position: 'absolute',
    right: 10,
    top: 80
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  instruction: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  subInstruction: {
    width: 150,
    borderRadius: 15,
    height:70,
    padding: 5,
    borderWidth: 1,
    borderColor: '#FF0000',
    backgroundColor: 'rgba(255,0,0,0.2)',
    marginLeft: 10
  },
  subInstructionText: {
    alignItems: 'center',
  },
  subText: {
    textAlign: 'center',
    fontSize: 11
  },
  listText: {
    fontSize: 13
  },
  clickLink: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 14,
  },
  linkBody: {
    width: '90%',
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#58A573',
    backgroundColor: 'rgba(35,65,45,0.2)',
    margin: 10
  },
  exampleBox: {
    backgroundColor: '#EEEEEE',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    padding: 15,
    height: 70
  },
  listType: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    borderRadius: 20,
    margin: 10
  },
  List: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  subInstruction2: {
    width: 150,
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#58A573',
    backgroundColor: 'rgba(35,65,45,0.2)',
    marginLeft: 10
  },
  exampleHeader: {
    fontSize: 15,
    textAlign: 'left',
    justifyContent: 'flex-start',
    width: 330,
    marginLeft: 40
  },
  cardBody: {
    backgroundColor: 'white',
    position: 'relative',
    borderWidth: 1,
    margin: 15,
    paddingTop:'3%',
    paddingBottom:'3%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '35%',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.80,
    shadowRadius: 20,

    elevation: 0,

    elevation: 7,
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: "bold"
  },
  cardDesc1: {
    color: '#20D109',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  cardDesc2: {
    color: '#FA1844',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',

  },
  subDesc: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
    color: '#1B6969',
    width: 300,
    fontWeight: 'bold'
  },
  image: {
    flex: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  setButtons: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  recordIcon2: {
    width: 100,
    height: 75,
    margin: 20,
    resizeMode: 'stretch',

  },
  setCars: {
    position: 'absolute',
    bottom: 1,
  },
  carImage: {
    marginTop: -10,
    marginLeft: 130,
  },
  record: {
    width: 70,
    height: 50,
    resizeMode: 'stretch',
    marginLeft: 5
  },

  // Driver 2
  exampleBox1: {
    backgroundColor: '#EEEEEE',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    height: 110,
  },
  exampleBox2: {
    backgroundColor: '#D0DFD9',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    height: 110,
  },
  listText1: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  questioning: {
    backgroundColor: 'white',
    position: 'relative',
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
    marginTop: '40%'
  },
  questioning1: {
    backgroundColor: 'white',
    position: 'relative',
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
    height: '75%',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.80,
    shadowRadius: 20,

    elevation: 0,

    elevation: 7,
  },
  questioningHeader: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign:'center'
  },
  subQuestioning: {
    fontSize: 15,
    marginTop: 2,
    color: '#58A573',
    fontWeight: 'bold'
  },
  desc: {
    fontWeight: 'bold',
    width: '90%',
    fontSize: 13,
    textAlign: 'center',
    margin: 5
  },
  set2ndLink: {
    fontSize: 13,
    textDecorationLine: 'underline',
    margin: 10
  },
  hiddenForm: {
    width: 200,
    height: 130,
    position: 'absolute',
    right: 0,
    top: 40,
    zIndex: 1000
  },
  // Driver 3
  res3Header: {
    fontSize: 19,
    width: '80%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resSubHeading: {
    fontSize: 20,
    color: '#F87E0A',
    fontWeight: 'bold'
  },
  resSubHeading2: {
    fontSize: 25,
    color: '#60A5A5',
    fontWeight: 'bold'
  },
  setSubtext: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#E734CD'
  },
  subInstruction3: {
    width: 180,
    borderColor: '#E734CD',
    backgroundColor: 'rgba(231,52,205,0.2)',
    borderRadius: 30,
    padding: 10,
    borderWidth: 1,
    marginLeft: 50,
  },
  bottomBody: {
    position: 'relative',
    backgroundColor: 'white',
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  subText3: {
    fontSize: 13,
    textAlign: 'center'
  },
  ifNo: {
    fontSize: 25,
    marginLeft: 15,
    color: '#F87E0A',
    fontWeight: 'bold'
  },
  setCrime: {
    width: '90%',
  },
  setFollow: {
    flexDirection: 'row',
    width: '100%'
  },
  subInstruction4: {
    width: 200,
    borderColor: '#FF0000',
    backgroundColor: 'rgba(255,0,0,0.2)',
    borderRadius: 30,
    padding: 10,
    borderWidth: 1,
    marginLeft: 20,
  },
  setbottomFont: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  },
  setBottom: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  ifCrime: {
    fontSize: 14,
    marginLeft: 10,
    color: '#E734CD',
    fontWeight: 'bold'
  },
  questioning3: {
    backgroundColor: 'white',
    position: 'relative',
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '85%',
    marginTop: '5%'
  },
  subInstruction5: {
    width: '90%',
    borderColor: '#F87E0A',
    backgroundColor: 'rgba(248,126,10,0.2)',
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    marginTop: 15
  },
});
export default Driver
