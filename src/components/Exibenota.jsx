function Exibenota(props)
{
    function Exibenota()
    {
        alert( "Sua média geral é :" + props.nota )
    }
    return(
        <div>
        <h1>{props.mensagem}</h1>
        <button onClick={Exibenota}>Veja sua nota</button>
        </div>
    )
}
export default Exibenota;