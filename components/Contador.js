const Contador = () => {
  const [contador, setContador] = React.useState(0);
  const Aumentar = () => setContador(contador+1)
  const Disminuir = () => setContador(contador-1)
  const Reiniciar = () => setContador(0)
  return(
    <div>
      <h1 className = {contador===0? "reiniciar": contador>0? "mayor" : "menor" }>Contador:{contador} </h1>
      <hr/>
      <button onClick = {Aumentar}> Aumentar </button>
      <button onClick = {Disminuir}> Disminuir </button>
      <button onClick = {Reiniciar}> Reiniciar </button>
    </div>
  )
}
