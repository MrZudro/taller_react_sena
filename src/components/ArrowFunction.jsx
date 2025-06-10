import '../styles/ArrowFunction.css'

function ArrowFunction() {
    const numeros = [2,10,22,45,55,64,13,36]
    return (
        <div className="containerGen">
            <div className="containerUno">
                <h1>UNA FUNCION EN JS SE VE ASÍ</h1>
                <p><code><span className='resaltado'>function</span>{' esPar(numero){return numero % 2 === 0;}'}</code></p>
            </div>
            <div className="containerUno">
                <h1>UNA FUNCION DE TIPO FLECHA SE VE ASÍ</h1>
                <p><code><span className="resaltado">const</span>{' esPar = (numero) => numero % 2 === 0'}</code></p>
            </div>
            <div className="containerUno">
                <h1>UNA FUNCION DE TIPO FLECHA CON UN EJEMPLO</h1>
                <p>Numeros multiplicados por dos por medio de la funcion .map() y todo expuesto en una Arrow Function</p>
                <p><br /><span className='resaltado'>{numeros.map(num => num * 2).join(', ')}</span> </p>
                {/* Se entiende que se recorre la constante numero con map donde se crea la variable num y num tomará por retorno el valor de la opera
                cion num * 2 ademas la funcion join incluira a esa respuesta un caracter, en este caso la coma*/}

            </div>
        </div>
    )
}

export default ArrowFunction