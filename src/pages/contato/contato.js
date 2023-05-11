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
                        <form className="contato-form"
                            action="https://formspree.io/f/mayzyzkl"
                            method="POST"
                            id="form"
                        >
                            <h3>Entre em contato</h3>

                            <fieldset>
                                <input placeholder="Email" type="email" name="email" />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Nome" type="name" name="name" />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Telefone" type="phone" name="phone" />
                            </fieldset>
                            <fieldset>
                                <textarea className="contato-textarea" placeholder="Escreva sua mensagem..." name="message"></textarea>
                            </fieldset>
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contato;