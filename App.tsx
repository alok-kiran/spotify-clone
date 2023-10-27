import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwsome from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require('./public/images/spotify-logo.jpeg')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.text}>Millions of songs.</Text>
      <Text style={styles.text}>Free on Spotify.</Text>
      <TouchableOpacity onPress={() => {}} style={styles.signUp}>
        <Text style={styles.signUpText}>Sign up free</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.otherSignUp}>
        <FontAwsome name="mobile" size={28} color="white" />
        <View style={styles.mobileIconSection}>
          <Text style={styles.otherSignUpText}>Continue with phone number</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.otherSignUp}>
        <>
          <FontAwsome name="google" size={24} color="white" />
        </>
        <View style={styles.otherIconSection}>
          <Text style={styles.otherSignUpText}>Continue with Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.otherSignUp}>
        <FontAwsome name="facebook" size={24} color="white" />
        <View style={styles.otherIconSection}>
          <Text style={styles.otherSignUpText}>Continue with Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.otherSignUp}>
        <FontAwsome name="apple" size={24} color="white" />
        <View style={styles.otherIconSection}>
          <Text style={styles.otherSignUpText}>Continue with Apple</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.logIn}>
        <View>
          <Text style={styles.otherSignUpText}>Log in</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(18,18,18)',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'CircularStd-Bold',
    fontSize: 32,
    textAlign: 'center',
  },
  logo: {
    width: 64,
    height: 64,
    marginBottom: 12,
  },
  signUp: {
    backgroundColor: '#1DB954',
    width: '90%',
    paddingVertical: 12,
    borderRadius: 100,
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  otherSignUp: {
    width: '90%',
    paddingVertical: 10,
    borderRadius: 100,
    marginBottom: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 4,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  logIn: {
    width: '90%',
    paddingVertical: 8,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  signUpText: {
    color: 'black',
    fontFamily: 'CircularStd-Bold',
    fontSize: 18,
  },
  otherSignUpText: {
    color: 'white',
    fontFamily: 'CircularStd-Bold',
    fontSize: 18,
  },
  mobileIconSection: {
    marginLeft: 16,
  },
  otherIconSection: {
    marginLeft: 24,
  },
});

export default App;
