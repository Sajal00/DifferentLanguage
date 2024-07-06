import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

const OTPModal = ({visible, onClose, navigation, otp}) => {
  const [enteredOtp, setEnteredOtp] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleVerify = () => {
    if (enteredOtp === otp) {
      setAlertMessage('OTP Verified Successfully!');
      setShowAlert(true);
      setEnteredOtp('');
      onClose(); // Close the modal after successful verification
      navigation.navigate('Home');
    } else {
      setAlertMessage('Invalid OTP. Please try again.');
      setShowAlert(true);
    }
  };

  useEffect(() => {
    let timeoutId;
    if (visible) {
      timeoutId = setTimeout(() => {
        setAlertMessage(`Your OTP is: ${otp}`);
        setShowAlert(true);
      }, 500); // Adjust the delay as needed
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Enter OTP</Text>
          <TextInput
            style={styles.input}
            value={enteredOtp}
            onChangeText={setEnteredOtp}
            maxLength={4}
            keyboardType="numeric"
            placeholder="4-digit OTP"
            placeholderTextColor="blue"
          />
          <TouchableOpacity style={styles.button} onPress={handleVerify}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
        {showAlert && (
          <View style={styles.alertContainer}>
            <View style={styles.alertBox}>
              <Text style={styles.alertText}>{alertMessage}</Text>
              <TouchableOpacity
                onPress={() => setShowAlert(false)}
                style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    color: 'blue',
  },
  input: {
    color: 'blue',
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: '#007BFF',
    fontSize: 16,
  },
  alertContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 40,
    zIndex: 9999,
    alignItems: 'center',
  },
  alertBox: {
    backgroundColor: '#f8d7da',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  alertText: {
    color: '#721c24',
  },
});

export default OTPModal;
