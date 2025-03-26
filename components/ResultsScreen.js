import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GameContext } from './GameContext';

const ResultsScreen = ({ navigation }) => {
  const { score, playerCount } = useContext(GameContext);

  const restartGame = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over!</Text>
      
      {playerCount > 1 ? (
        <Text style={styles.subtitle}>
          Multiplayer Results
        </Text>
      ) : (
        <Text style={styles.subtitle}>
          Your Final Score
        </Text>
      )}

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{score} Points</Text>
      </View>

      <TouchableOpacity 
        style={styles.restartButton} 
        onPress={restartGame}
      >
        <Text style={styles.restartButtonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 22,
    color: '#666',
    marginBottom: 30
  },
  scoreContainer: {
    backgroundColor: '#007bff',
    padding: 30,
    borderRadius: 20,
    marginBottom: 30
  },
  scoreText: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold'
  },
  restartButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10
  },
  restartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultsScreen;