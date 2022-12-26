import React from "react";
import './styles.css';
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function Fotos(){
    return (
        <>
            <Header />
            <div id="banner"></div>
            <div className="fotos-container">
                <div className="fotos-content">
                    <div className="foto imagem-1"></div>
                    <div className="foto imagem-2"></div>
                    <div className="foto imagem-3"></div>
                    <div className="foto imagem-4"></div>
                    <div className="foto imagem-5"></div>
                    <div className="foto imagem-6"></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Fotos;