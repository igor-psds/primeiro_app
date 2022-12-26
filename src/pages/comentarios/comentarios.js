import React from "react";
import './styles.css';
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function Comentarios(){
    return(
        <>
            <Header />
            <div id="banner"></div>
            <form>
                <div className="caixa-comentarios">
                    <textarea name="comentario" id="" rows={10} placeholder=" Deixe seu comentário sobre o filme."></textarea>
                </div>
                <button className="button-comentarios">Enviar</button>
            </form>
            <Footer />
        </>
    )
}

export default Comentarios;