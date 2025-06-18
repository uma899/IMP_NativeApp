import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Test App</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.slider}>
          <Text>Slider Here</Text>
        </View>
        <View style={styles.test1}>
          <View style={styles.smBox}></View>
          <View style={styles.smBox}></View>
          <View style={styles.smBox}></View>
          <View style={styles.smBox}></View>
          <View style={styles.smBox}></View>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=',
            }}
            height={'50%'}
            width={'100%'}
          />
          <Text style={{ fontSize: 20, fontWeight: '500' }}>Title Here</Text>
          <Text style={{ fontSize: 16, fontWeight: '300' }}>
            Some Matter. dfgbhjn cvbhjnkm fghjk dfyghj dfgyhjk dfghjk fgyhj
            rtyguhjk fyughj gyuhj
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=',
            }}
            height={'50%'}
            width={'100%'}
          />
          <Text style={{ fontSize: 20, fontWeight: '500' }}>Title Here</Text>
          <Text style={{ fontSize: 16, fontWeight: '300' }}>
            Some Matter. dfgbhjn cvbhjnkm fghjk dfyghj dfgyhjk dfghjk fgyhj
            rtyguhjk fyughj gyuhj
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=',
            }}
            height={'50%'}
            width={'100%'}
            resizeMode='contain'
          />
          <Text style={{ fontSize: 20, fontWeight: '500' }}>Title Here</Text>
          <Text style={{ fontSize: 16, fontWeight: '300' }}>
            Some Matter. dfgbhjn cvbhjnkm fghjk dfyghj dfgyhjk dfghjk fgyhj
            rtyguhjk fyughj gyuhj
          </Text>
        </View>

        <View style={styles.cardContainer}>
            <View style={styles.smCard}></View>
            <View style={styles.smCard}></View>
            <View style={styles.smCard}></View>
            <View style={styles.smCard}></View>
            <View style={styles.smCard}></View>
            <View style={styles.smCard}></View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text>This is footer..</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },

  smCard: {
    flex: 1,
    alignItems: 'center',
    elevation: 8,
    maxWidth: 50
  },
  screen: {
    flex: 1,
  },
  header: {
    flex: 1,
    height: 30,
    width: '100%',
    backgroundColor: '#27679c',
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
  },

  content: {
    flex: 10,
    marginVertical: 5,
  },

  footer: {
    flex: 1,
    height: 30,
    width: '100%',
    backgroundColor: '#27679c',
  },

  slider: {
    height: 100,
    width: '80%',
    borderRadius: 15,
    backgroundColor: '#8a8a8a',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  test1: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
  },

  smBox: {
    height: 50,
    width: 80,
    borderRadius: 5,
    backgroundColor: '#8a8a8a',
  },

  card: {
    width: '80%',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
