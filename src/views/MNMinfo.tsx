import "../Style.css";
import CopyButton from "../components/copyButton";
import NavBar from "../components/MNMnavbar";
import NamesWall from "../assets/namesWall.jpg";

const Info = () => {
    const iban: string = "IT91H0832259430000000809031";
    const cFiscale: string = "91023590234";

    return (
        <>
            <div className="info-container">
                <NavBar />
                {/* Banner */}

                <img className="info-banner" src={NamesWall} alt="Chi Siamo" />

                <div className="banner-content">
                    <h1>Associazione Mano nella Mano O.D.V.</h1>
                </div>
                <div className="description">
                    Grazie ad un progetto regionale coordinato dall'ULSS, è
                    attivo il centro dedicato a tutte le persone fragili, affette da
                    demenza o decadimento cognitivo.
                    <br />
                    Volontari formati, affiancati da professionisti esperti,
                    conducono incontri, con una frequenza di tre incontri a
                    settimana a Bovolone e quattro incontri fissi a settimana a
                    Concamarise, finalizzati a mantenere attive le funzioni
                    primarie, proponendo attività non farmacologiche adeguate e
                    specifiche per la patologia.
                </div>

                {/* Due colonne */}
                <section className="two-column-section">
                    {/* Sostienici */}
                    <div className="left-column">
                        <div className="sostienici-container">
                            <h3>
                                Sii il cambiamento che vuoi vedere nel mondo
                            </h3>
                            <p>
                                Ci sono luoghi al mondo dove più che le regole{" "}
                                <br /> è importante la gentilezza
                            </p>
                            <br />

                            <p>
                                Sostienici con una donazione: il tuo contributo
                                ci aiuta a offrire attività terapeutiche e
                                momenti di benessere a persone con Alzheimer.
                                Ogni gesto fa la differenza.
                            </p>

                            <div className="donation-options">
                                <h3>Come Donare</h3>
                                <div className="donation-method">
                                    <h4>Bonifico Bancario</h4>
                                    <p>IBAN: {iban}</p>
                                    <p>
                                        Intestato a: Associazione Mano nella
                                        Mano
                                    </p>
                                    {/* Fixed CopyButton by removing children property and using proper syntax */}
                                    <CopyButton
                                        textToCopy={iban}
                                        buttonName="Copia IBAN"
                                    />
                                </div>

                                <div className="donation-method">
                                    <h4>5x1000</h4>
                                    <p>Codice Fiscale: {cFiscale}</p>
                                    <CopyButton
                                        textToCopy={cFiscale}
                                        buttonName="Copia C.F."
                                    />
                                </div>

                            </div>
                            <div className="address-contacts">
        <h3>Contatti</h3>
        <p>Tel: +39 3442919781</p>
        <p>Tel: +39 3498928351</p>
        <p>Email: manonellamanoassociazione@gmail.com</p>
        <p>PEC: associazionemano@pec.it</p>
    </div>
                        </div>
                            
                    </div>

                    {/*Google Maps */}
                    <div className="right-column">
                        <div className="dove-siamo-container">
                            <h2>Dove Trovarci</h2>
                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.629326300283!2d11.14490027663315!3d45.214835871071024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f6f3698ec8ded%3A0x77a2cf626ddcba03!2sEx%20Chiesa%20antica%20dei%20Santi%20Lorenzo%20e%20Stefano%20di%20Concamarise!5e0!3m2!1sit!2sit!4v1744381530633!5m2!1sit!2sit"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    title="Mappa Sede"
                                ></iframe>
                            </div>
                            <div className="address-container">
    <div className="address-details">
        <h3>Concamarise</h3>
        <p>Via Piazza, Ex Chiesa Antica<br />37050, Concamarise VR</p>
    </div>
    <div className="address-details">
        <h3>Bovolone</h3>
        <p>Via Lino Turrini, Villa Panteo Zampieri<br />37051, Bovolone VR</p>
    </div>
    <div className="address-details">
        <h3>Salizzole</h3>
        <p>Piazza Castello<br />37056, Salizzole VR</p>
    </div>

</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Info;
