import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import './styles.css';

function Contato(){
    return (
        <>
            <Header />
            <div id="banner"></div>
            <div className="contato-container">
                <div className="contentContato">
                    <div id="contato-box">
                        <p id="contato">
                            Nome: Igor Silva<br />
                            e-mail: igorpsdsilva@gmail.com<br />
                            Numero: 55 11 959643578
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contato;