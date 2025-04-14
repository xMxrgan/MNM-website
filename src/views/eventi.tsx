import "../Style.css";

const Eventi = () => {
    const todayDate = new Date();
    const weekDay = todayDate.getDay();
    const getDay = todayDate.getDate();
    const getMonth = todayDate.getMonth();
    // const getYear = todayDate.getFullYear();

    const getHours = todayDate.getHours();
    const getMinutes = todayDate.getMinutes();

    const daysOfWeek = [
        "Lunedì",
        "Martedì",
        "Mercoledì",
        "Giovedì",
        "Venerdì",
        "Sabato",
        "Domenica",
    ];
    const months = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre",
    ];

    const formattedDate = `${daysOfWeek[weekDay]} ${getDay} ${months[getMonth]}`;
    const formattedTime = `${getHours}:${getMinutes.toString().padStart(2, "0")}`;

    return (
        <>
            <div className="dateTime-container">
                <p className="date">{formattedDate}</p>
                <p className="time">{formattedTime}</p>
            </div>
        </>
    );
};

export default Eventi;
