import React, { Component } from 'react';
import { Container, Header, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import {StyleSheet, ImageBackground, Image} from 'react-native'
import { color } from 'react-native-reanimated';
import Home from '../../assets/Dashboard/Home.svg'
function Dashboard({children}) {
    return (
        <Container>
        {/* <Header /> */}
        {children}
        <Footer>
          <FooterTab>
            <Button vertical>
              <ImageBackground source={Home} style={styles.image}>
              <Icon name="home" />
              <Text style={styles.sectionTitle}>Home</Text>
              </ImageBackground>
            </Button>
            <Button vertical>
              <Icon name="home" />
              <Text style={styles.sectionTitle}>Cam Corder</Text>
            </Button>
            <Button vertical active>
              <Icon active name="home" />
              <Text style={styles.sectionTitle}>Law Widget</Text>
            </Button>
            <Button vertical>
              <Icon name="home" />
              <Text style={styles.sectionTitle}>Definitions</Text>
            </Button>
            <Button vertical>
              <Icon name="news" />
              <Text style={styles.sectionTitle}>News</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
}

const styles = StyleSheet.create({
    
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      },
    sectionTitle: {
      fontSize: 7.2,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
export default Dashboard
