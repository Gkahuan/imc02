import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/titulo';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizonte: 15,
    borderBottomColor: '#05b0ab',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forteBlue: {
    color:'blue',
    fontWeight: 'bold',
    fontSize: 30, 
  }
});
