import React, { useState } from 'react';
import { Alert, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [valorOriginal, setValorOriginal] = useState('');
  const [percentual, setPercentual] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    // Verificar se os campos estão preenchidos
    if (!nome || !valorOriginal || !percentual) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    // Converter valores para números
    const valor = parseFloat(valorOriginal);
    const aumento = parseFloat(percentual);

    // Calcular novo valor
    const valorAumento = valor * (aumento / 100);
    const novoValor = valor + valorAumento;

    // Armazenar resultados
    setResultado({
      nome,
      valorOriginal: valor,
      percentual: aumento,
      valorAumento,
      novoValor
    });
  };

  const limpar = () => {
    setNome('');
    setValorOriginal('');
    setPercentual('');
    setResultado(null);
  };

  return (
    <ImageBackground style={styles.container}>

      <View style={styles.calculadora}>
        <View style={styles.header}>
          <Image source={require('./assets/calculadora.png')} style={{ width: 100, height: 100 }} />
          <Text style={styles.titulo}>Calculadora de Aumento</Text>
        </View>

        <View style={styles.display}>
          {resultado ? (
            <View style={styles.resultadoDisplay}>
              <Text style={styles.resultadoTexto}>Produto: {resultado.nome}</Text>
              <Text style={styles.resultadoTexto}>Original: R$ {resultado.valorOriginal.toFixed(2)}</Text>
              <Text style={styles.resultadoTexto}>Aumento: {resultado.percentual}%</Text>
              <Text style={styles.resultadoTexto}>Valor do Aumento: R$ {resultado.valorAumento.toFixed(2)}</Text>
              <Text style={styles.novoValor}>Novo Valor: R$ {resultado.novoValor.toFixed(2)}</Text>
            </View>
          ) : (
            <Text style={styles.displayPlaceholder}>Insira os dados para calcular</Text>
          )}
        </View>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Nome do produto"
            placeholderTextColor="#8e8e8e"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.input}
            placeholder="Valor original"
            placeholderTextColor="#8e8e8e"
            keyboardType="numeric"
            value={valorOriginal}
            onChangeText={setValorOriginal}
          />

          <TextInput
            style={styles.input}
            placeholder="Percentual de aumento"
            placeholderTextColor="#8e8e8e"
            keyboardType="numeric"
            value={percentual}
            onChangeText={setPercentual}
          />

          <View style={styles.botoesRow}>
            <TouchableOpacity style={styles.botao} onPress={calcular}>
              <Text style={styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao, styles.botaoLimpar]} onPress={limpar}>
              <Text style={styles.botaoTexto}>Limpar</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

    </ImageBackground>

  );

}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  calculadora: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#111',
    borderRadius: 16,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    position: 'relative',
  },
  logo: {
    width: 60,
    height: 60,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffcc00',
    textAlign: 'center',
    flex: 1,
  },
  display: {
    backgroundColor: '#0a3b21',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    minHeight: 120,
    justifyContent: 'center',
  },
  displayPlaceholder: {
    color: '#75b798',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  resultadoDisplay: {
    alignItems: 'flex-start',
  },
  resultadoTexto: {
    color: '#75b798',
    fontSize: 16,
    marginBottom: 4,
  },
  novoValor: {
    color: '#ffcc00',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  inputArea: {
    marginTop: 10,
  },
  input: {
    height: 45,
    backgroundColor: '#333',
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 15,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#444',
  },
  botoesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  botao: {
    flex: 1,
    backgroundColor: '#00aa55',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  botaoLimpar: {
    backgroundColor: '#aa3333',
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imagem: {
    width: 10,
    height: 100
  }

});
