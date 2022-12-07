import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image } from 'react-native';

export default function App() {
  const handleTextPress = () => console.log('Ты нажал на кнопку')
  const handleButtonPress = () => Alert.alert('Получишь результат','Основное сообщение',[
    {text: "Да", onPress: () => alert('Ты нажал на кнопку да')},
    {text:"Отмена", onPress: () => alert('Ты нажал на кнопку нет')}
  ]);
  const handleButtonPress2 = () => Alert.prompt('Молодец','Основное сообщение',text => alert(text))

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} style={styles.text} onPress={(handleTextPress)}>Open up App.js to start {'\n'}working on your app!!!!!</Text>
      <Button title={'Нажми на кнопку'} color='red' onPress={handleButtonPress}/>
      <Button title={'Кнопка 2'} onPress={handleButtonPress2}/>

      <Image source={require('./assets/adaptive-icon.png')}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color:'red',
    margin: 100
  },
});
