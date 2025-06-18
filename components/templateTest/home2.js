import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions, // Import Dimensions for screen width
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window'); // Get screen width

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Test App</Text>
      </View>

      {/* Content Area (Scrollable) */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Slider */}
        <View style={styles.slider}>
          <Text style={styles.sliderText}>Slider Here</Text>
        </View>

        {/* Small Boxes */}
        <View style={styles.smBoxesContainer}>
          <View style={styles.smBox}></View>
          <View style={styles.smBox}></View>
          <View style={styles.smBox}></View>
          <View style={styles.smBox}></View>
          <View style={styles.smBox}></View>
        </View>

        {/* Cards */}
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=',
            }}
            style={styles.cardImage} // Use StyleSheet for image
            resizeMode="cover" // Changed to cover for better image fill
          />
          <Text style={styles.cardTitle}>Title Here</Text>
          <Text style={styles.cardDescription}>
            Some Matter. dfgbhjn cvbhjnkm fghjk dfyghj dfgyhjk dfghjk fgyhj rtyguhjk fyughj gyuhj
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=',
            }}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Title Here</Text>
          <Text style={styles.cardDescription}>
            Some Matter. dfgbhjn cvbhjnkm fghjk dfyghj dfgyhjk dfghjk fgyhj rtyguhjk fyughj gyuhj
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=',
            }}
            style={styles.cardImage}
            resizeMode="contain" // Original resizeMode for this specific image
          />
          <Text style={styles.cardTitle}>Title Here</Text>
          <Text style={styles.cardDescription}>
            Some Matter. dfgbhjn cvbhjnkm fghjk dfyghj dfgyhjk dfghjk fgyhj rtyguhjk fyughj gyuhj
          </Text>
        </View>

        {/* Small Cards Grid */}
        <View style={styles.smCardGrid}>
          <View style={styles.smCard}></View>
          <View style={styles.smCard}></View>
          <View style={styles.smCard}></View>
          <View style={styles.smCard}></View>
          <View style={styles.smCard}></View>
          <View style={styles.smCard}></View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>This is footer..</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light background for better contrast
  },
  header: {
    height: 60, // Fixed height for header
    width: '100%',
    backgroundColor: '#27679c',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#fff', // White text for header
  },
  contentContainer: { // Renamed from 'content' to clarify it's for ScrollView
    flexGrow: 1, // Allows ScrollView content to grow
    paddingVertical: 10,
    alignItems: 'center', // Center children horizontally within the scroll view
  },
  footer: {
    height: 50, // Fixed height for footer
    width: '100%',
    backgroundColor: '#27679c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
  slider: {
    height: 120, // Slightly increased height for visibility
    width: screenWidth * 0.9, // Use 90% of screen width
    borderRadius: 15,
    backgroundColor: '#8a8a8a',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  smBoxesContainer: { // Renamed from 'test1'
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute items evenly
    width: screenWidth * 0.95, // Use almost full width
    marginVertical: 10,
  },
  smBox: {
    height: 60, // Slightly larger box
    width: screenWidth / 6 - 10, // Distribute width for 5 boxes with some margin
    borderRadius: 8,
    backgroundColor: '#a0a0a0',
    marginHorizontal: 5, // Spacing between boxes
  },
  card: {
    width: screenWidth * 0.9, // Use 90% of screen width
    borderRadius: 10,
    backgroundColor: '#fff', // White background for cards
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginVertical: 10,
    overflow: 'hidden', // Ensures borderRadius clips content
    paddingBottom: 15, // Padding for text content
    alignItems: 'center', // Center text content
  },
  cardImage: {
    height: screenWidth * 0.45, // Dynamic height based on width
    width: '100%',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600', // Slightly bolder
    marginBottom: 5,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 14, // Slightly smaller font
    fontWeight: '300',
    color: '#555',
    paddingHorizontal: 15,
    textAlign: 'center',
  },
  smCardGrid: { // Renamed from 'cardContainer' to reflect grid nature
    flexDirection: 'row', // Changed to row for wrapping grid
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: screenWidth * 0.95, // Use almost full width
    marginVertical: 10,
  },
  smCard: {
    height: 80, // Larger small card
    width: (screenWidth * 0.95) / 3 - 15, // Roughly 3 cards per row
    borderRadius: 10,
    backgroundColor: '#b0b0b0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    margin: 7, // Margin for spacing in the grid
    justifyContent: 'center',
    alignItems: 'center',
  },
});