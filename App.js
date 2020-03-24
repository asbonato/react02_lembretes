import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);

  //captura o texto digitado
  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete)
  };

  //para adicionar o que foi digitado
  const adicionarLembrete = () => {
    setLembretes(lembretes => [...lembretes, lembrete]);
    console.log(lembretes);
  }
  return (
    <View style={styles.telaPrincipalView}>
      <View style={styles.lembreteView}>
        {/*O usuário irá inserir os lembretes aqui*/}
        <TextInput placeholder="Lembrar..."
          style={styles.lembreteInputText}
          onChangeText={capturarLembrete}
          value={lembrete}
        />
        <Button title="+"
          onPress={adicionarLembrete}
        />
      </View>
      <ScrollView>
        {/*Aqui será exibida a lista de lembretes*/
          lembretes.map((lembrete) => 
          <View key={lembrete} style={styles.itemNaLista}>
            <Text>{lembrete}</Text>
          </View>)
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lembreteInputText: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 8
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});
