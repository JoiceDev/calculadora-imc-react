import { useState } from "react"

function CalculaImc() {
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [resultado, setResultado] = useState('');
    
    const calculo = (e) => {
        e.preventDefault();
        const imc = (peso / (altura * altura)).toFixed(2);

        if (imc < 18.5) {
            return (
                setResultado(`Seu imc é ${imc}, você está abaixo do peso.`)            
            )            
        } else if (imc < 24.9) {
            return (
                setResultado(`Seu imc é ${imc}, você está no seu peso ideal.`)
            )
        } else if (imc >= 25) {
            return (
                setResultado(`Seu imc é ${imc}, você está com sobrepeso.`)
            )
        } else if (imc > 30) {
            return (
                setResultado(`Seu imc é ${imc}, você está com obesidade.`)
            )
        }
    }

    const styles = {
        input: {
            margin: '15px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
        }
    }

    return (
        <>
        <h1>Calculadora IMC</h1>
        <form onSubmit={calculo}>
            <input style={styles.input} type="number" value={peso} placeholder="Peso" step="0.01"  onChange={(e) => setPeso(parseFloat(e.target.value))} />
            <input style={styles.input} type="number" value={altura} placeholder="altura" step="0.01"  onChange={(e) => setAltura(parseFloat(e.target.value))} />
            <button type="submit" >Calcular</button>
        </form>
        <div>
            <p>Resultado: {resultado}</p>
        </div>
        </>
    )
}

export default CalculaImc