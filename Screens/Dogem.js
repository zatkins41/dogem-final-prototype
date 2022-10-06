import React, { useState } from 'react';
//REPORT:
//I found online a way to make phone calls, send messages using react-native-communications. Wouldn't work so I had to import
//different components for each type of operation.
//I had to stop coding since we switched to Expo GL, and see if I can implement my code there and what would chande. 
//You'll need to install react-native-sms and react-native-phone-call to make it work using npm install in the CLI. 

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';

// Here I imported the SMS and Call component. I found a video using the react-native component but never worked




const App = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [bodySMS, setBodySMS] = useState();

    /*
    const initiateSMS = () => {
        // Checking if it has 10 digits
        if (mobileNumber.length != 10) {
            alert('Please insert correct contact number');
            return;
        }
        //Function to send messages
        SendSMS.send(
            {
                // Message body
                body: bodySMS,
                // Recipients Number
                recipients: [mobileNumber],
                // Triggering a complete response on Android
                successTypes: ['sent', 'queued'],
            },
            (completed, cancelled, error) => {
                if (completed) {
                    console.log('SMS Sent Completed');
                } else if (cancelled) {
                    console.log('SMS Sent Cancelled');
                } else if (error) {
                    console.log('Some error occured');
                }
            },
        );
    };

    const triggerCall = () => {
        const args = {
            number: mobileNumber,
            prompt: true,
            //Not asking the user for authorization. Made the program crash on 'false'
            skipCanOpen: true

        };
        //Making the phone call
        call(args).catch(console.error);
    };
*/


    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    DogEm
                </Text>
                {/*Taking the phone number from the user*/}
                <Text style={styles.titleTextsmall}>Enter Mobile Number</Text>
                <TextInput
                    value={mobileNumber}
                    onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
                    placeholder={'Enter Contact Number'}
                    keyboardType="numeric"
                    style={styles.textInput}
                />
                {/*Entering the SMS Body to send*/}
                <Text style={styles.titleTextsmall}>Enter SMS body</Text>
                <TextInput
                    value={bodySMS}
                    onChangeText={(bodySMS) => setBodySMS(bodySMS)}
                    placeholder={'Enter SMS Body'}
                    keyboardType="numeric"
                    style={styles.textInput}
                />
                {/*Send Message Button. calling the function initiateSMS on touch*/}
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonStyle}
                    onPress={initiateSMS}>
                    <Text style={styles.buttonTextStyle}>Send Message</Text>
                </TouchableOpacity>
                {/*Phone Call Button. Calling the function triggerCall on press*/}
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonStyle}
                    onPress={triggerCall}>
                    <Text style={styles.buttonTextStyle}>Phone Call</Text>
                </TouchableOpacity>





            </View>
        </SafeAreaView>
    );
};


export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        textAlign: 'center',
    },
    titleText: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#1035AC',
    },
    titleTextsmall: {
        marginVertical: 8,
        fontSize: 16,
    },
    buttonStyle: {
        justifyContent: 'center',
        marginTop: 15,
        padding: 10,
        backgroundColor: '#1035AC',
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
    },
});

