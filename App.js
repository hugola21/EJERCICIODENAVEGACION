
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const App = () => {
  const [screen, setScreen] = useState(1);
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleAccessButton = () => {
    setScreen(2);
  };

  const handleDivideButton = () => {
    const num1 = Number(number1);
    const num2 = Number(number2);

    if (num1 === 0 && num2 === 0) {
      setResult('INDETERMINACIÓN');
    } else if (num2 === 0) {
      setResult('NO EXISTE DIVISIÓN PARA CERO');
    } else {
      setResult(num1 / num2);
    }
  };

  const handleBackButton = () => {
    setScreen(1);
    setResult('');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {screen === 1 ? (
        <View>
          <Text style={{ fontSize: 20 }}>Bienvenido</Text>
          <Text> Aplicaciones móviles</Text>
          <Button title="Acceder" onPress={handleAccessButton} />
        </View>
      ) : (
        <View>
          <TextInput
            placeholder="Número 1"
            value={number1}
            onChangeText={text => setNumber1(text)}
          />
          <TextInput
            placeholder="Número 2"
            value={number2}
            onChangeText={text => setNumber2(text)}
          />
          <Button title="Dividir" onPress={handleDivideButton} />
          <Text>{result}</Text>
          <Button title="Regresar" onPress={handleBackButton} />
        </View>
      )}
    </View>
  );
};

export default App;