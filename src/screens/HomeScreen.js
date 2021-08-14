import React from "react";
import { Text, StyleSheet, Button, View , TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Text style={styles.text}>Hoang Tung Lam</Text>
    <Button 
      onPress={() => navigation.navigate('Components')}
      title="Go to component page"
    />
    <Button 
      onPress={() => navigation.navigate('ListScreen')}
      title="Go to the List Demo"
    />
    <Button 
      onPress={() => navigation.navigate('ImageScreen')}
      title="Go to Image page"
    />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;