import { Link } from "react-router-dom";
import "../Style.css";

const Info = () => {
    return (
        <div className="info-container">
            {/* Banner */}
            <Link to="/"></Link>
            <section className="chi-siamo-banner">
                <div className="banner-content">
                    <h1>Chi Siamo</h1>
                    <p className="subtitle">
                        Mano nella Mano: insieme dal 2010
                    </p>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                        molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                        eleifend nibh porttitor. Ut in nulla enim. Phasellus
                        molestie magna non est bibendum non venenatis nisl
                        tempor.
                    </p>
                </div>
            </section>

            {/*Contatti */}
            <section className="contatti-section">
                <h2>Contattaci</h2>
                <div className="contact-form-container">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" required />
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
            </section>

            {/* Due colonne */}
            <section className="two-column-section">
                {/* Sostienici */}
                <div className="left-column">
                    <div className="sostienici-container">
                        <h2>Sostienici</h2>
                        <p>
                            La tua donazione è fondamentale per sostenere i
                            nostri progetti. Anche un piccolo contributo può
                            fare una grande differenza nella vita delle persone
                            che aiutiamo.
                        </p>

                        <div className="donation-options">
                            <h3>Come Donare</h3>
                            <div className="donation-method">
                                <h4>Bonifico Bancario</h4>
                                <p>IBAN: IT12A3456789012345678901234</p>
                                <p>Intestato a: Associazione Mano nella Mano</p>
                            </div>

                            <div className="donation-method">
                                <h4>5x1000</h4>
                                <p>Codice Fiscale: 91234567890</p>
                            </div>

                            <button className="donate-btn">Dona Ora</button>
                        </div>
                    </div>
                </div>

                {/* Google Maps */}
                <div className="right-column">
                    <div className="dove-siamo-container">
                        <h2>Dove Trovarci</h2>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246115484!2d12.489839!3d41.902783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61a155278919%3A0xcff7cfeedef9d2e8!2sColosseo!5e0!3m2!1sit!2sit!4v1617734641135!5m2!1sit!2sit"
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
                            <p>Via Roma, 123</p>
                            <p>00184 Roma, Italia</p>
                            <p>Tel: +39 06 1234567</p>
                            <p>Email: info@manonellamano.org</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Info;
