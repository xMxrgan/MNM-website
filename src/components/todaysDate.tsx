import "../Style.css";

const todaysDate = () => {
    const date = new Date();
    const weekDay = date.getDay(); // Adjust for array index (0-6 where 0 is Monday in the array)
    const dayOfMonth = date.getDate();
    const month = date.getMonth();

    const daysOfWeek = [
        "Domenica",
        "Lunedì",
        "Martedì",
        "Mercoledì",
        "Giovedì",
        "Venerdì",
        "Sabato",
    ];
    const monthNames = [
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

    // Adjust for Sunday (when getDay() returns 0)

    const formattedDate = `${daysOfWeek[weekDay]} ${dayOfMonth} ${monthNames[month]}`;

    return (
        <>
            <div className="dateTime-container">
                <p className="date">{formattedDate}</p>
            </div>
        </>
    );
};

export default todaysDate;
