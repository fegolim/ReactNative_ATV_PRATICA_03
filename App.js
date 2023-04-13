import React from 'react'
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import { Comp1, Comp2, Comp3 } from './src/Botao'


const App = () => {
  return (
    <SafeAreaView style={style.app}>
      <>
      <View ><Comp1/></View>
      <View ><Comp2/></View>
      <View ><Comp3/></View>
      </>

    </SafeAreaView>
    

  )
}

const style = StyleSheet.create({


  app: {
    paddingTop: StatusBar.currentHeight,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#AAC2FF',
    flexGrow: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
   //flexDirection: 'column',
    padding: 140,    
  },

})

export default App;