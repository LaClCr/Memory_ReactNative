/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const JocMemoria = props => {
  const [cartes, setCartes] = useState(props.cartes);
  const [indexVoltejada, setIndexVoltejada] = useState(null);

  const voltejar = index => {
    let arrayCartes = [...cartes];
    arrayCartes[index].voltejat = true;
    setCartes(arrayCartes);

    if (indexVoltejada === null) {
      setIndexVoltejada(index); //si no hi ha ninguna voltejada la guardem per a despres
    } else {
      setTimeout(() => comprovar(index, arrayCartes), 500); //per a que done temps a vore la carta atrasem la funcio 0.5 segons
    }
  };

  const comprovar = (index, arrayCartes) => {
    if (arrayCartes[index].imatge === arrayCartes[indexVoltejada].imatge) {
      arrayCartes[index].emparellat = true;
      arrayCartes[indexVoltejada].emparellat = true;
    } else {
      arrayCartes[index].voltejat = false;
      arrayCartes[indexVoltejada].voltejat = false;
    }
    setIndexVoltejada(null);
    totesEmparellades();
  };


  //Comprova que totes tinguen parella
  const totesEmparellades = () => {
    let jocAcabat = true;
    cartes.map((element, indice) => {
      if (element.emparellat === false) {
        jocAcabat = false;
      }
    });

    if (jocAcabat) {
      props.acabar();
    }

  };
  return (
    <View >
      <StatusBar />
      <View style={stils.cartes}>
        {cartes.map((elemento, indice) => (
          <TouchableOpacity
            key={indice}
            onPress={() => voltejar(indice)}
            style={stils.pressCarta}>
            <Image
              style={stils.carta}
              source={
                elemento.voltejat || elemento.emparellat
                  ? elemento.imatge
                  : require('../data/imatges/backCard.png')
              }
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const stils = StyleSheet.create({

  contenidorPrincipal: {
    flex: 1,
    justifyContent: 'center',
  },
  cartes: {
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pressCarta: {
    borderColor: 'red',
    marginBottom: 10,
    flexDirection: 'row',
  },
  carta: {
    flexBasis: '24%',
    //flexShrink:1
    aspectRatio: 1,
  },
});

export default JocMemoria;
