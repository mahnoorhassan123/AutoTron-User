import React from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

function SignupPage() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.mainContainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../../assets/signup.webp')}
              />
            </View>

            <View style={styles.loginContainer}>
              <Text style={styles.text_header}>Sign Up</Text>
              <View style={styles.action}>
                <FontAwesome
                  name="user-o"
                  color="#420475"
                  style={styles.smallIcon}
                />
                <TextInput
                  placeholder="Name"
                  placeholderTextColor="black"
                  style={styles.textInput}
                />
              </View>
              <View style={styles.action}>
                <FontAwesome
                  name="user"
                  color="#420475"
                  style={styles.smallIcon}
                />
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="black"
                  style={styles.textInput}
                />
              </View>
              <View style={styles.action}>
                <FontAwesome
                  name="phone"
                  color="#420475"
                  style={styles.smallIcon}
                />
                <TextInput
                  placeholder="Phone"
                  placeholderTextColor="black"
                  style={styles.textInput}
                />
              </View>
              <View style={styles.action}>
                <FontAwesome
                  name="lock"
                  color="#420475"
                  style={styles.smallIcon}
                />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="black"
                  style={styles.textInput}
                  secureTextEntry
                />
              </View>
            </View>

            <View style={styles.button}>
              <TouchableOpacity style={styles.inBut}>
                <View>
                  <Text style={styles.textSign}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.endText}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={{color: '#420475'}}>
                  Already have an account? Login here!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default SignupPage;
