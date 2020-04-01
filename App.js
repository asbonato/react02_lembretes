import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import LembreteItem from './components/LembreteItem';
import LembreteInput from './components/LembreteInput';

export default function App() {
  const [lembretes, setLembretes] = useState([]);
  const [contadorLembretes, setContadorLembretes] = useState(0);

  //deletar lembrete
  const removerLembrete = (keyASerRemovida) => {
    setLembretes(lembretes => {
      return lembretes.filter ((lembrete) => {
        return lembrete.key !== keyASerRemovida
      })
    });
  };

  //para adicionar o que foi digitado
  const adicionarLembrete = (lembrete) => {
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
      <LembreteInput onAdicionarLembrete={adicionarLembrete}/>

      <FlatList
        data={lembretes}
        renderItem={ 
          lembrete => (
            <LembreteItem 
            chave={lembrete.item.key}
            lembrete={lembrete.item.value}
            onDelete={removerLembrete}/>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50
  }
});
