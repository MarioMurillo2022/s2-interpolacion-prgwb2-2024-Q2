import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Button, Image } from 'react-native';
import { styles } from './stilos';

export default class CalculatorComponent extends Component {
    state = {
        num1: '',
        num2: '',
        operador: '',
        resultado: ''
    };

    evaluarOperador = () => {
        const num1 = parseFloat(this.state.num1);
        const num2 = parseFloat(this.state.num2);
        const operador = parseInt(this.state.operador);

        let resultado;
        let alerta;

        switch (operador) {
            case 1:
                resultado = num1 + num2;
                this.setState({ resultado: `El resultado es: ${resultado}` });
                break;
            case 2:
                resultado = num1 - num2;
                this.setState({ resultado: `El resultado es: ${resultado}` });
                break;
            case 3:
                resultado = num1 * num2;
                this.setState({ resultado: `El resultado es: ${resultado}` });
                break;
            case 4:
                if (num2 !== 0) {
                    resultado = num1 / num2;
                    this.setState({ resultado: `El resultado es: ${resultado}` });
                } else {
                    alerta = 'Error: No se puede dividir por cero';
                    this.setState({ resultado: alerta });
                }
                break;
            default:
                alerta = 'Operador inválido';
                this.setState({ resultado: alerta });
        }
        console.log("Resultado:", resultado);
    };

    limpiarCampos = () => {
        this.setState({
            num1: '',
            num2: '',
            operador: '',
            resultado: ''
        });
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{ marginTop: 50, fontSize: 40, textAlign: 'center', color: '#fca311', fontStyle: 'italic' }}> <Image
                        source={require('./calculadora.png')}
                        style={styles.image}
                    /> Calculadora</Text>
                    <View style={{ marginTop: 50 }}>
                        <Text style={styles.txtlabel}>Ingrese el primer numero</Text>
                    </View>
                    <TextInput
                        style={styles.txtinpts}
                        placeholder="Ingrese un numero"
                        keyboardType="numeric"
                        onChangeText={(text) => this.setState({ num1: text })}
                        value={this.state.num1}
                    />
                    <View>
                        <Text style={styles.txtlabel}>Ingrese el Segundo numero</Text>
                    </View>
                    <TextInput
                        style={styles.txtinpts}
                        placeholder="Ingrese un numero"
                        keyboardType="numeric"
                        onChangeText={(text) => this.setState({ num2: text })}
                        value={this.state.num2}
                    />
                    <View>
                        <Text style={styles.txtlabel}>Ingrese un numero de operador</Text>
                    </View>
                    <TextInput
                        style={styles.txtinpts}
                        placeholder="1 Suma/  2 Resta / 3 multiplicacion / 4 Division"
                        keyboardType="numeric"
                        onChangeText={(text) => this.setState({ operador: text })}
                        value={this.state.operador}
                    />
                    <Text>{this.state.resultado}</Text>
                    <View style={{ marginTop: 10 }}>
                        <Button title="Calcular" onPress={this.evaluarOperador} />
                        <View style={{ marginTop: 10, }}>
                            <Button title="Limpiar" onPress={this.limpiarCampos} color="#fca311" />
                        </View>
                    </View>

                    <Text style={{ marginTop: 20, fontSize: 40, textAlign: 'center', color: '#fca311', fontStyle: 'italic' }}>
                        Gracias!!</Text>
                </View>
            </ScrollView>
        )
    }
}
