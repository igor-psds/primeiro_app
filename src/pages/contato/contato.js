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
                            nome: Igor Pova<br />
                            e-mail: xxxxx@email.com<br />
                            numero: 00 00-000000000
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contato;