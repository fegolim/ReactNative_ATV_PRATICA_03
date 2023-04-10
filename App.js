import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BtCol1, BtCol2, BtCol3 } from './src/Botao'

export default function App() {
  return (
    <View style={style.App}>
      <View style={style.Coluna}>
        <BtCol1 />
      </View>
      <View style={style.Coluna}>
        <BtCol2 />
      </View>
      <View style={style.Coluna}>
        <BtCol3 />
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: "#AAAAAA",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  Coluna: {
    flexDirection: "column",
    margin: (6, 6)
  },
}
)