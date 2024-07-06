import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  FlatList,
} from 'react-native';
import i18next, {languageResources} from '../services/i18next';
import {useTranslation} from 'react-i18next';
import languagesList from '../services/languagesList.json';

const HomeScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const {t} = useTranslation();

  const changeLng = lng => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };
  const handleSignout = () => {
    navigation.navigate('Login');
    i18next.changeLanguage('en');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={visible}
        transparent={true}
        onRequestClose={() => setVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.languagesList}>
            <FlatList
              data={Object.keys(languageResources)}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.languageButton}
                  onPress={() => changeLng(item)}>
                  <Text style={styles.lngName}>
                    {languagesList[item].nativeName}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>{t('welcome')}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>{t('change-language')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSignout}>
        <Text style={styles.buttonText}>{t('SignOut')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 3,
    marginTop: 15,
    elevation: 2,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  text: {
    marginBottom: 30,
    fontSize: 18,
    color: 'black',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  languagesList: {
    width: '80%',
    maxHeight: '50%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 16,
    color: 'black',
  },
});

export default HomeScreen;
