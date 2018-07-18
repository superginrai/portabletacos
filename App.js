import React from 'react';
import { StyleSheet, Text, View, Picker, Button, SectionList, Image, AlertIOS } from 'react-native';
import FadeInView from './FadeInView';

export default class App extends React.Component {




  render() {
    
    const AlertExample = () => {
    AlertIOS.alert(
      'Sync Complete',
      'All your data are belong to us.'
     );
    }

    return (
      <View style={styles.container}>
        {/* <Text> Hello Tacos!!!!  More tacos!!!!</Text> */}
        {/* <Picker
          style={{ height: 50, width: 200 }}>
          <Picker.Item label="Tacos" value="java" />
          <Picker.Item label="More Tacos" value="js" />
          <Picker.Item label="Even More Tacos" value="js" />
        </Picker> */}
        <Button
          onPress={AlertExample}
          title="Push For Tacos"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <FadeInView style={{ width: 250, height: 55, backgroundColor: 'powderblue' }}>
          <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Magic Tacos</Text>
        </FadeInView>
        <Image source={require('./images/HurricanePortable.jpg')} style={{ height: 500 }} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
