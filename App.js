import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const [contadorLembretes, setContadorLembretes] = useState(0);

  //captura o texto digitado
  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete)
  };

  //para adicionar o que foi digitado
  const adicionarLembrete = () => {
    setLembretes(lembretes => {
      console.log(lembretes);
      setContadorLembretes(contadorLembretes + 1);
      return [...lembretes, {
        key: contadorLembretes.toString(),
        value: lembrete
      }];
    });
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
      <FlatList
        data={lembretes}/*coleção de lembretes*/
        renderItem={ /*mapeamento*/
          lembrete => (/*dado um lembrete gera uma view*/
            <View style={styles.itemNaLista}>
              <Text>{lembrete.item.value}</Text>
            </View>
          )
        }
      />
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
