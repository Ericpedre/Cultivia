import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput, ScrollView} 
from 'react-native';
import firebase from 'firebase';

//Se inicializa FireBase
firebase.initializeApp({
    apiKey: "AIzaSyC3HDZ41Ix0-_W38YbWUwRUgaTaAYmuOnk",
    authDomain: "reactcultivia.firebaseapp.com",
    databaseURL: "https://reactcultivia.firebaseio.com",
    projectId: "reactcultivia",
    storageBucket: "reactcultivia.appspot.com",
    messagingSenderId: "699167193279",
    appId: "1:699167193279:web:a67b5e4f565149cfd36e0a",
    measurementId: "G-6NZSC8VPTT"
});


class CultivIA extends Component { 

  constructor(props){
    super(props);
    this.state = {
      user : '',
      pass : '',
      confpass : ''
    }
  }
  
  saludo = () => { Alert.alert('Hola !')}
  
  help = () => { Alert.alert('Te auydo...')}
  
  contactenos = () => { Alert.alert('Twiter, Facebook, Instagram')}
   
  registrar = () => { 
    //Se confirma que las contraseñas coinsidan
    if (this.state.pass == this.state.confpass){
      //Se registra el usuario en FireBase
      firebase.auth().createUserWithEmailAndPassword(this.state.user, this.state.pass).catch(function(error) {
        //Si hay algun error se pone en un alert
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert(errorMessage)
  })}
  else {
    Alert.alert('Error: Las contraseñas no coinsiden')
  }; 
}

  //registrar = () => { Alert.alert('Usuario: ' + this.state.user + '\nContraseña: '+ this.state.pass)}

  render(){

    let {user} = this.state
    let {pass} = this.state
    let {confpass} = this.state
    
    return (
    
      
      <ImageBackground source={require('./assets/fondo.jpg')}  style={styles.container}>
        <ScrollView>
          <View style={styles.header}>

            <View style={styles.headerLeft}>
              <Image source={require("./assets/icon2.png")} style={styles.logo} />
            </View>

            <View style={styles.headerRight} >
              <Button title='Login' />
            </View>

          </View>

          <View style={styles.body}>
            <Text style={styles.textTitle} >Bienvenido a CultivIA</Text>
            <TextInput placeholder=' Nombre de usuario...' style={{borderWidth : 1,
              borderColor : 'white', width : 200, padding : 5, marginTop : 20, color : 'white'}}
              onChangeText={ (user) => this.setState({user}) }>
            </TextInput>

            <TextInput placeholder=' Contraseña...' style={{borderWidth : 1,
              borderColor : 'white', width : 200, padding : 5, marginTop : 10, color : 'white'}}
              onChangeText={ (pass) => this.setState({pass}) }>
            </TextInput>

            <TextInput placeholder=' Confirmar contraseña...' style={{borderWidth : 1,
              borderColor : 'white', width : 200, padding : 5, marginTop : 10, color : 'white'}}
              onChangeText={ (confpass) => this.setState({confpass}) }>
            </TextInput>

            <View style={styles.boton}>
              <Button title="Registrar" 
                color="green"
                name="BTlogin" 
                style={styles.boton}
                onPress={this.registrar}/>
            </View>
            <View style={{height : 80}} />
            <Text style={{color : 'white', fontSize : 40}}>
            ︾
            </Text>
  
            <View style={{marginTop : 10, alignItems : 'center'}}>
              <Image style={styles.imagen} source={require('./assets/cultivos/zanahoria.jpg')} />
              <Image style={styles.imagen} source={require('./assets/cultivos/tomate.jpg')} />
              <Image style={styles.imagen} source={require('./assets/cultivos/pepino.jpg')} />
              <Image style={styles.imagen} source={require('./assets/cultivos/sandia.jpg')} />
              <Image style={styles.imagen} source={require('./assets/cultivos/lechuga.jpg')} />
            </View>

          </View>

          <View style={styles.headerDown}>
            
              <Text style={styles.textWhite}>-</Text>
              <Text onPress={this.help} style={styles.textWhite}> Help </Text>
              <Text style={styles.textWhite}>·</Text>
              <Text onPress={this.contactenos} style={styles.textWhite}> Contactenos</Text>
              <Text style={styles.textWhite}>·</Text>
              <Text style={styles.textWhite}>Siguenos</Text>
              <Text style={styles.textWhite}>-</Text>
            
          </View>
        </ScrollView>
      </ImageBackground>
      
    )

  
  }

}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
    backgroundColor : 'green'
  },
  header : {
    flex : 0.4,
    flexDirection : 'row',
    marginTop : 30,fontSize : 20
    //backgroundColor : 'red'
  },
  headerLeft : {
    flex : 1,
    marginLeft : 10
    //backgroundColor : 'blue'
  },
  headerRight : {
    //backgroundColor : 'blue',
    flex : 1,
    marginTop : 12,
    marginLeft : 20,
    marginRight : 5
    
  },
  body : {
    flex : 1,
    alignItems : 'center',
    //justifyContent : 'center',
    marginTop : 70
  },
  logo : {
    width : 120,
    height : 60,
    //borderRadius : 50,
    resizeMode : 'contain'
  },
  negrita : {
    fontWeight : 'bold'
  },
  headerDown : {
    flex : 0.1,
    flexDirection : 'row',
    //alignItems : 'center',
    justifyContent : "space-around",
  },
  textWhite : {
    color : 'white',
  },
  textTitle : {
    color : 'white',
    fontSize : 24
  },
  imagen : {
    marginTop : 10,
    //width : 300,
    maxWidth : 300,
    maxHeight : 200,
    borderRadius : 50,
    resizeMode : 'contain'
  },
  boton : {
    marginTop : 10,
    height : 50
  }
})

export default CultivIA
