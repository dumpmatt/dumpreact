import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { Image } from 'react-native';

const LogoutScreen = () => {
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [logoutSuccess, setLogoutSuccess] = useState(false);


  const handleLogout = () => {
    setConfirmLogout(true);
  };

  const handleCancel = () => {
    setogout(false);
  };

  const handleConfirm = () => {
    // Perform logout actions here
    // For example, clear user session or navigate to login screen
    setConfirmLogout(false);
    setLogoutSuccess(true);
    // Show success message for 2 seconds and then reset
    setTimeout(() => {
      setLogoutSuccess(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {!confirmLogout && !logoutSuccess && (
        <View style={styles.box}>
          <Button title="Logout" onPress={handout} />
        </View>
      )}

      {confirmLogout && !logoutSuccess && (
        <View style={styles.box}>
          <Text style={styles.text}>Do you want to log out?</Text>
          <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={handleCancel} style={styles.button} />
          <Button title="Logout" onPress={handleConfirm} style={styles.button} />
          </View>
        </View>
      )}

      {logoutSuccess && (
        <View style={[styles.box, styles.successBox]}>
          <Text style={styles.logoname}>Warehouse Inventory System</Text>
          <Image source={require('./assets/checkicon.png')} style={styles.checkImage}/>
          <Text style={styles.successText}>Successfully Logged Out</Text>
        </View>        
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
   
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    
  },
  button: {
    flex: 1,
    marginRight: 50,
    marginLeft: 50,
    paddingVertical: 50,
    paddingHorizontal: 50,

  },
  successBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    height: 206,
    width: 227,
  },

  logoname:{
    font: 'Times New Roman',
  fontsize: 12,
},
  successText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  checkImage: {
    marginTop: 15,
    marginBottom: 10, 
    width: 93,
    height: 94,
  },
});

export default LogoutScreen;