import "../Style.css";

import { useState } from "react";

const CopyButton = ({
    textToCopy,
    buttonName,
}: {
    textToCopy: string;
    buttonName: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.log("Errore nella copia: ", err);
        }
    };

    return (
        <div>
            <button onClick={handleCopy} className="copyButton">
                {buttonName}
            </button>
            {copied && <p>Testo copiato!</p>}
        </div>
    );
};

export default CopyButton;
