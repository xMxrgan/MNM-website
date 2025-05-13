import "../Style.css";
import CopyButton from "../components/copyButton";
import NavBar from "../components/MNMnavbar";
// import NamesWall from "../assets/chiSiamo.jpg";

const Info = () => {
    const iban: string = "IT91H0832259430000000809031";
    // Using cFiscale in the 5x1000 section to fix the "never used" diagnostic
    const cFiscale: string = "91023590234";

    return (
        <>
            <div className="info-container">
                <NavBar />
                {/* Banner */}
                <section className="chi-siamo-banner">
                    <div className="banner-content">
                        <h1>Chi Siamo</h1>
                        <p className="subtitle">Mano nella Mano</p>
                    </div>
                </section>

                <div className="description">
                    Grazie ad un progetto regionale coordinato dall'ULSS, è
                    attivo il centro dedicato a tutte le persone affette da
                    demenza e sindrome di Alzheimer.
                    <br />
                    Volontari formati, affiancati da professionisti esperti,
                    conducono incontri, con una frequenza di tre incontri a
                    settimana a Bovolone e quattro incontri fissi a settimana a
                    Concamarise, finalizzati a mantenere attive le funzioni
                    primarie, proponendo attività non farmacologiche adeguate e
                    specifiche per la patologia.{" "}
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
                            <div className="address-details">
                                <h3>Indirizzo</h3>
                                <p>Via San Giovanni, 123</p>
                                <p>37050 Concamarise, Verona</p>
                                <p>Tel: +39 3442919781</p>
                                <p>Tel: +39 3498928351</p>
                                <p>
                                    Email: manonellamanoassociazione@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="legal-info"></section>

            <section>
                <div className="sponsor-section">
                    <h2>Sostenitori</h2>
                    <div className="sponsor-logos">
                        <img src={} alt="Sponsor 1" />
                        <img src={} alt="Sponsor 2" />
                        <img src={} alt="Sponsor 3" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Info;
