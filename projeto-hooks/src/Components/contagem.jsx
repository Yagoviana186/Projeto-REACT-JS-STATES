import { useState } from "react";
function Contagem(){
    const [quantidade, aumentarQuantidade] =useState(1);

    return(
        <>
        <div>{quantidade}</div>
        <button onClick={()=>aumentarQuantidade(quantidade + 1)}>Aumentar</button>
        </>
    )
}

export default Contagem;