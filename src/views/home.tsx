import Footer from "../components/footer";
import NavBar from "../components/navbar";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-blue-600 text-white py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Benvenuti a Mano nella Mano
                        </h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Un'associazione dedicata al supporto delle persone
                            in difficoltà attraverso iniziative sociali e
                            solidali.
                        </p>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-colors">
                            Scopri le nostre iniziative
                        </button>
                    </div>
                </section>

                {/* Feature Section */}
                <section className="py-16 px-4 bg-gray-100">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            I Nostri Progetti
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-48 bg-blue-200"></div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Assistenza famiglie
                                    </h3>
                                    <p className="text-gray-600">
                                        Supportiamo le famiglie in difficoltà
                                        con aiuti alimentari e materiali.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-48 bg-green-200"></div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Attività per bambini
                                    </h3>
                                    <p className="text-gray-600">
                                        Organizziamo laboratori e attività
                                        ricreative per i più piccoli.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-48 bg-purple-200"></div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Supporto anziani
                                    </h3>
                                    <p className="text-gray-600">
                                        Forniamo compagnia e assistenza agli
                                        anziani soli della comunità.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-gray-800 text-white py-16 px-4 text-center">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-3xl font-bold mb-6">
                            Unisciti a noi
                        </h2>
                        <p className="text-xl mb-8">
                            Abbiamo bisogno del tuo aiuto per fare la differenza
                            nella nostra comunità. Ogni piccolo contributo è
                            importante!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-colors">
                                Dona ora
                            </button>
                            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
                                Diventa volontario
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
