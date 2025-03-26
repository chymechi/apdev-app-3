import React, { useContext, useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { GameContext } from './GameContext';
import { EquationGenerators } from './EquationGenerators';

const { width, height } = Dimensions.get('window');

const GameSetupScreen = ({ navigation }) => {
  const { 
    setGameMode, 
    setDifficulty, 
    setPlayerCount 
  } = useContext(GameContext);
  
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium');
  const [players, setPlayers] = useState(1);

  const startGame = () => {
    if (selectedMode) {
      setGameMode(selectedMode);
      setDifficulty(selectedDifficulty);
      setPlayerCount(players);
      navigation.navigate('GamePlay');
    }
  };

  // Icons mapping for different modes
  const modeIcons = {
    calculus: 'stats-chart-outline',
    physics: 'thunderstorm-outline',
    autocad: 'construct-outline'
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

      <View style={styles.contentContainer}>
        {/* Game Mode Selection */}
        <Text style={styles.sectionTitle}>Select Challenge Mode</Text>
        <View style={styles.modeContainer}>
          {Object.keys(EquationGenerators).map(mode => (
            <TouchableOpacity
              key={mode}
              style={[
                styles.modeButton,
                selectedMode === mode && styles.selectedMode
              ]}
              onPress={() => setSelectedMode(mode)}
            >
              <Ionicons 
                name={modeIcons[mode]} 
                size={24} 
                color={selectedMode === mode ? '#fff' : '#4ecdc4'} 
              />
              <Text style={[
                styles.modeButtonText,
                selectedMode === mode && styles.selectedModeText
              ]}>
                {mode.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Difficulty Selection */}
        <Text style={styles.sectionTitle}>Select Difficulty</Text>
        <View style={styles.difficultyContainer}>
          {['easy', 'medium', 'hard'].map(level => (
            <TouchableOpacity
              key={level}
              style={[
                styles.difficultyButton,
                selectedDifficulty === level && styles.selectedDifficulty
              ]}
              onPress={() => setSelectedDifficulty(level)}
            >
              <Text style={[
                styles.difficultyButtonText,
                selectedDifficulty === level && styles.selectedDifficultyText
              ]}>
                {level.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Player Selection */}
        <Text style={styles.sectionTitle}>Number of Players</Text>
        <View style={styles.playerContainer}>
          {[1, 2].map(count => (
            <TouchableOpacity
              key={count}
              style={[
                styles.playerButton,
                players === count && styles.selectedPlayer
              ]}
              onPress={() => setPlayers(count)}
            >
              <Ionicons 
                name={count === 1 ? 'person-outline' : 'people-outline'} 
                size={24} 
                color={players === count ? '#fff' : '#4ecdc4'} 
              />
              <Text style={[
                styles.playerButtonText,
                players === count && styles.selectedPlayerText
              ]}>
                {count} Player{count > 1 ? 's' : ''}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Start Game Button */}
        <TouchableOpacity
          style={[
            styles.startButton,
            !selectedMode && styles.disabledButton
          ]}
          onPress={startGame}
          disabled={!selectedMode}
        >
          <LinearGradient
            colors={['#4ecdc4', '#45b7aa']}
            style={styles.buttonGradient}
          >
            <Ionicons 
              name="rocket-outline" 
              size={24} 
              color="white" 
            />
            <Text style={styles.startButtonText}>Launch Challenge</Text>
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
  sectionTitle: {
    fontSize: 18,
    color: 'white',
    marginVertical: 15,
    fontWeight: 'bold',
  },
  modeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  modeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 15,
    borderRadius: 10,
    width: '30%',
    justifyContent: 'center',
  },
  selectedMode: {
    backgroundColor: '#4ecdc4',
  },
  modeButtonText: {
    color: '#4ecdc4',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  selectedModeText: {
    color: 'white',
  },
  difficultyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  difficultyButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 15,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  selectedDifficulty: {
    backgroundColor: '#ff6b6b',
  },
  difficultyButtonText: {
    color: '#aaa',
    fontWeight: 'bold',
  },
  selectedDifficultyText: {
    color: 'white',
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  playerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    justifyContent: 'center',
  },
  selectedPlayer: {
    backgroundColor: '#ff6b6b',
  },
  playerButtonText: {
    color: '#aaa',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  selectedPlayerText: {
    color: 'white',
  },
  startButton: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  disabledButton: {
    opacity: 0.5,
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

export default GameSetupScreen;