/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';
import JocMemoria from "./src/components/JocMemoria.js"

const imatges = [require("./src/data/imatges/1.png"), require("./src/data/imatges/2.png"), require("./src/data/imatges/3.png"), require("./src/data/imatges/4.png"), require("./src/data/imatges/5.png"), require("./src/data/imatges/6.png"), require("./src/data/imatges/7.png"), require("./src/data/imatges/8.png"), require("./src/data/imatges/9.png"), require("./src/data/imatges/10.png"), require("./src/data/imatges/11.png"), require("./src/data/imatges/12.png")]

const App = () => {
  const [enJoc, setEnJoc] = useState(false);
  const [cartes, setcartes] = useState([{}]);

  const acabarJoc = () => {
    Alert.alert("FELICITATS! Has guanyat el joc!");
    setEnJoc(false);
  }

  const pessButton = (numImatges) => {
    setEnJoc(!enJoc);

    //Agafem el array de imatges, el desorganitzem (per a que siga aleatori) i agafem el nombre de cartes necesari
    let array = barrejarArray(imatges).slice(0, numImatges).map((elemento, indice) => {
      return { "imatge": elemento, "emparellat": false, "voltejat": false }
    });

    //Dupliquem les cartesper a que tinguen parella
    array.map((elemento) => {
      array.push({ "imatge": elemento.imatge, "emparellat": false, "voltejat": false })
    });
    //les barregem per a que no estiguen en el mateix orde
    array = barrejarArray(array)
    setcartes(array);
  }

  //metode per a barrejar array
  const barrejarArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  }

  return (
    <View style={estils.contenidorPrincipal}>
      <StatusBar />
      {!enJoc ? (
        <View style={estils.contenidorPrincipal}>
          <View style={estils.contenidorBotons}>
            <Button labelStyle={{ fontSize: 20 }} icon={'alien'} textColor='white' buttonColor='#2a8c4a' mode='outlined' style={estils.botons} onPress={() => pessButton(4)} >Jugar 2X4</Button>
          </View>
          <View style={estils.contenidorBotons}>
            <Button labelStyle={{ fontSize: 20 }} icon={'alien'} textColor='white' buttonColor='#005187' mode='outlined' style={estils.botons} onPress={() => pessButton(8)}  >Jugar 4X4</Button>
          </View>
        </View>
      ) : (
        <JocMemoria cartes={cartes} acabar={() => acabarJoc()}></JocMemoria>)}
    </View>
  );
}

const estils = StyleSheet.create({
  contenidorPrincipal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  contenidorBotons: {
    padding: 30,
    flex: 1,
    justifyContent: "center",
  },
  botons: {
    padding: 30,
    borderRadius: 30,
    flex: 1,
    justifyContent: "center",
  },

});

export default App;
