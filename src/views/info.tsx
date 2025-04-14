import "../Style.css";
import CopyButton from "../components/copyButton";

const Info = () => {
    const iban: string = "IT91H0832259430000000809031";
    // Using cFiscale in the 5x1000 section to fix the "never used" diagnostic
    const cFiscale: string = "91023590234";
    return (
        <>
            <div className="info-container">
                {/* Banner */}

                <section className="chi-siamo-banner">
                    <div className="banner-content">
                        <h1>Chi Siamo</h1>
                        <p className="subtitle">Mano nella Mano</p>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam in dui mauris. Vivamus hendrerit arcu
                            sed erat molestie vehicula. Sed auctor neque eu
                            tellus rhoncus ut eleifend nibh porttitor. Ut in
                            nulla enim. Phasellus molestie magna non est
                            bibendum non venenatis nisl tempor. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Nullam
                            in dui mauris. Vivamus hendrerit arcu sed erat
                            molestie vehicula. Sed auctor neque eu tellus
                            rhoncus ut eleifend nibh porttitor. Ut in nulla
                            enim. Phasellus molestie magna non est bibendum non
                            venenatis nisl tempor. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nullam in dui mauris.
                            Vivamus hendrerit arcu sed erat molestie vehicula.
                            Sed auctor neque eu tellus rhoncus ut eleifend nibh
                            porttitor. Ut in nulla enim. Phasellus molestie
                            magna non est bibendum non venenatis nisl tempor.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam in dui mauris. Vivamus hendrerit arcu
                            sed erat molestie vehicula. Sed auctor neque eu
                            tellus rhoncus ut eleifend nibh porttitor. Ut in
                            nulla enim. Phasellus molestie magna non est
                            bibendum non venenatis nisl tempor.
                        </p>
                    </div>
                </section>

                {/*
                <section className="contatti-section">
                    <h2>Contattaci</h2>
                    <div className="contact-form-container">
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="oggetto">Oggetto</label>
                                <input
                                    type="text"
                                    id="oggetto"
                                    name="oggetto"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="messaggio">Messaggio</label>
                                <textarea
                                    id="messaggio"
                                    name="messaggio"
                                    rows={5}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn">
                                Invia Messaggio
                            </button>
                        </form>
                    </div>
                </section> */}

                {/* Due colonne */}
                <section className="two-column-section">
                    {/* Sostienici */}
                    <div className="left-column">
                        <div className="sostienici-container">
                            <h2>Sostienici</h2>
                            <p>
                                La tua donazione è fondamentale per sostenere i
                                nostri progetti. Anche un piccolo contributo può
                                fare una grande differenza nella vita delle
                                persone che aiutiamo.
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

            <section> Sponsor section</section>
        </>
    );
};

export default Info;
