# Usa l'immagine ufficiale di Node.js come base (versione LTS)
FROM node:20

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file di configurazione del progetto
COPY package.json package-lock.json* ./

# Installa le dipendenze
RUN npm install

# Copia tutto il resto del codice sorgente
COPY . .

# Espone la porta di default di Vite (5173)
EXPOSE 5173

# Comando per avviare l'applicazione in modalità sviluppo
CMD ["npm", "run", "dev"]
