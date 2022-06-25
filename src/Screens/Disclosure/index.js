import * as React from 'react';
import { Container, CheckBox, Body, ListItem } from 'native-base';
import { StyleSheet, Image, View, Text } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function Interactions({ navigation }) {
    return (
        <Container style={styles.body}>
            <View style={styles.textContainer}>
           
                <Text style={styles.heading}>
                    Disclaimer
                </Text>
                <View style={styles.subContainer}>
                    <Text style={styles.descText}>
                        The materials available
                        On this App are for informational
                        purposes only and not for the
                        purpose of providing legal advice.
                        You should contact your attorney
                        to obtain advice with respect to
                        any particular issue or problem.
                        Use of and access to this App
                        or any of the links
                        contained within the app do not
                        create an attorney-client
                        relationship between Mr. Politick
                        and the user or browser. The
                        opinions expressed at or through
                        this app are the opinions of the
                        individual author and may not
                        reflect the opinions of the
                        Company. To enter you must agree
                        To these terms.
            </Text>

            <ListItem>
            <CheckBox  onPress={() => navigation.navigate('Home')} checked={true} style={styles.check}/>
            <Body>
              <Text style={styles.checkText}>By clicking you agree to this disclosure</Text>
            </Body>
          </ListItem>

                </View>
            </View>
            <View style={styles.bottomCars}>
                <Image source={require('../../assets/disclosureCars.png')} />
            </View>
        </Container>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#D1B66D',

    },
    subContainer: {
        backgroundColor: '#F0F0F0',
        borderWidth: 1,
        borderRadius:10,
        borderColor:'gray',
        padding:10,
        textAlign:'center',
        
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    descText:{
        fontSize:10,
        textAlign:'center'
    },
    heading: {
        fontSize: 17,
        fontWeight: "800",
    },
    bottomCars: {
        marginTop: '45%'
    },
    textContainer: {
        width: '80%',
        backgroundColor: '#F6C7B6',
        padding: 20,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        marginTop: '1%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

    },
    check:{
        width:25,
        height:25,
        backgroundColor:'white',
        borderColor:'gray'
    },
    checkText:{
        marginLeft:10,
        fontSize:10
    },
});
export default Interactions
