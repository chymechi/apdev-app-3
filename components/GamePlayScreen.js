import React, { useState, useContext, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  Dimensions 
} from 'react-native';
import { GameContext } from './GameContext';
import { generateEquation, DIFFICULTY_LEVELS } from './EquationGenerators';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const GamePlayScreen = ({ navigation }) => {
  const { 
    gameMode, 
    difficulty, 
    playerCount, 
    score, 
    setScore 
  } = useContext(GameContext);

  const [currentEquation, setCurrentEquation] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(DIFFICULTY_LEVELS[difficulty].timeLimit);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  useEffect(() => {
    setCurrentEquation(generateEquation(gameMode, difficulty));

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const checkAnswer = () => {
    if (userAnswer.trim() === currentEquation.solution.trim()) {
      setScore(prev => prev + currentEquation.points);
      
      if (currentPlayer < playerCount) {
        setCurrentPlayer(prev => prev + 1);
      }

      setCurrentEquation(generateEquation(gameMode, difficulty));
      setUserAnswer('');
    } else {
      Alert.alert('Calculation Error', 'Recheck your solution!');
    }
  };

  const endGame = () => {
    navigation.navigate('Results');
  };

  if (!currentEquation) return null;

  return (
    <LinearGradient
      colors={['#1c2b4a', '#3a5075']}
      style={styles.container}
    >
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusItem}>
          <Ionicons name="time-outline" size={24} color="#fff" />
          <Text style={styles.statusText}>{timeRemaining}s</Text>
        </View>
        
        <View style={styles.statusItem}>
          <Ionicons name="trophy-outline" size={24} color="#fff" />
          <Text style={styles.statusText}>{score} pts</Text>
        </View>
        
        {playerCount > 1 && (
          <View style={styles.statusItem}>
            <Ionicons name="person-outline" size={24} color="#fff" />
            <Text style={styles.statusText}>P{currentPlayer}</Text>
          </View>
        )}
      </View>

      {/* Challenge Card */}
      <View style={styles.challengeCard}>
        <View style={styles.challengeHeader}>
          <Text style={styles.categoryText}>
            {currentEquation.category} Challenge
          </Text>
          <View style={styles.difficultyBadge}>
            <Text style={styles.difficultyText}>{difficulty.toUpperCase()}</Text>
          </View>
        </View>

        <Text style={styles.equationText}>
          {currentEquation.equation}
        </Text>

        <TextInput
          style={styles.input}
          value={userAnswer}
          onChangeText={setUserAnswer}
          placeholder="Enter Solution"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
        />

        <TouchableOpacity 
          style={styles.submitButton} 
          onPress={checkAnswer}
        >
          <Ionicons name="checkmark-circle" size={24} color="white" />
          <Text style={styles.submitButtonText}>Validate Solution</Text>
        </TouchableOpacity>
      </View>

      {/* Engineering Background Elements */}
      <View style={styles.backgroundElements}>
        <View style={styles.gridLine1}></View>
        <View style={styles.gridLine2}></View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
  statusBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 10,
    borderRadius: 10,
  },
  statusText: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  challengeCard: {
    width: width * 0.9,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  categoryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  difficultyBadge: {
    backgroundColor: '#ff6b6b',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  difficultyText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  equationText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    color: '#fff',
    fontSize: 18,
  },
  submitButton: {
    flexDirection: 'row',
    backgroundColor: '#4ecdc4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default GamePlayScreen;