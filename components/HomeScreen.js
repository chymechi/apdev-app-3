import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions,
  Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const startGame = () => {
    navigation.navigate('GameSetup');
  };

  return (
    <LinearGradient
      colors={['#1c2b4a', '#3a5075']}
      style={styles.container}
    >
      {/* Background Technical Elements */}
      <View style={styles.backgroundElements}>
        <View style={styles.gridLine1}></View>
        <View style={styles.gridLine2}></View>
      </View>

      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>CIVIL ENGINEERING</Text>
          <Text style={styles.subTitle}>SPEED MATH CHALLENGE</Text>
        </View>

        {/* Illustration or Icon */}
        <View style={styles.illustrationContainer}>
          <Ionicons 
            name="calculator-outline" 
            size={width * 0.3} 
            color="#4ecdc4" 
          />
        </View>

        {/* Start Game Button */}
        <TouchableOpacity 
          style={styles.startButton} 
          onPress={startGame}
        >
          <LinearGradient
            colors={['#4ecdc4', '#45b7aa']}
            style={styles.buttonGradient}
          >
            <Ionicons 
              name="play-circle-outline" 
              size={24} 
              color="white" 
            />
            <Text style={styles.startButtonText}>Start Challenge</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  gridLine1: {
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  gridLine2: {
    position: 'absolute',
    top: '60%',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  contentContainer: {
    width: width * 0.9,
    alignItems: 'center',
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
  subTitle: {
    fontSize: 16,
    color: '#4ecdc4',
    letterSpacing: 1,
  },
  illustrationContainer: {
    marginBottom: 30,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 100,
    padding: 30,
  },
  startButton: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default HomeScreen;