
/////////////////// Tâche 01 :

async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 1 seconde
        console.log(value);
    }
}

// Exemple d'utilisation :
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);





//////////////////////Tâche 02 :

async function waitCall() {
    try {
        console.log("Récupérer des données depuis l'API");
        const data = await fetchDataFromAPI(); // Attendre la réponse de l'API
        console.log("Données récupérées avec succès:", data);
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
}

// Fonction simulant une requête à une API (remplacez cela par votre fonction réelle)
function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        // Simuler un délai de réponse de 1 seconde
        setTimeout(() => {
            const data = { example: "some data" };
            resolve(data);
        }, 1000);
    });
}

// Exemple d'utilisation
waitCall();


////////////////////  Tâche 3:

async function waitCall() {
    try {
        console.log("Récupérer des données depuis l'API");
        const data = await fetchDataFromAPI(); // Attendre la réponse de l'API
        console.log("Données récupérées avec succès:", data);
    } catch (error) {
        console.error("Échec de la récupération des données depuis l'API. S'il vous plait, vérifiez votre connexion internet.");
    }
}

// Fonction simulant une requête à une API (remplacez cela par votre fonction réelle)
function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        // Simuler un échec de l'appel API
        reject(new Error("Échec de la connexion à l'API"));
    });
}

// Exemple d'utilisation
waitCall();


async function chainedAsyncFunctions() {
    try {
        await firstAsyncFunction();
        await secondAsyncFunction();
        await thirdAsyncFunction();
    } catch (error) {
        console.error("Error:", error);
    }
}

async function firstAsyncFunction() {
    await delay(1000);
    console.log("First async function executed");
}

async function secondAsyncFunction() {
    await delay(1000);
    console.log("Second async function executed");
}

async function thirdAsyncFunction() {
    await delay(1000);
    console.log("Third async function executed");
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Exemple d'utilisation
chainedAsyncFunctions();



/////////////// Tâche 04 :


async function concurrentRequests() {
    try {
        // Effectuer deux appels d'API simultanément
        const [result1, result2] = await Promise.all([
            fetchDataFromAPI1(),
            fetchDataFromAPI2()
        ]);

        // Enregistrer les résultats combinés
        console.log("Combined results:", result1, result2);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Fonction simulant un appel à une API 1 (remplacez cela par votre fonction réelle)
function fetchDataFromAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from API 1");
        }, 1000);
    });
}

// Fonction simulant un appel à une API 2 (remplacez cela par votre fonction réelle)
function fetchDataFromAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from API 2");
        }, 1000);
    });
}

// Exemple d'utilisation
concurrentRequests();


///////////////// Tâche 5 :


async function parallelCalls(urls) {
    try {
        // Effectuer les appels d'API simultanément
        const responses = await Promise.all(urls.map(url => fetchDataFromURL(url)));

        // Enregistrer les réponses
        console.log("Responses:", responses);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Fonction simulant un appel à une URL (remplacez cela par votre fonction réelle)
function fetchDataFromURL(url) {
    return new Promise((resolve, reject) => {
        // Simuler une récupération de données à partir de l'URL
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, Math.random() * 2000); // Simuler un délai aléatoire entre 0 et 2 secondes
    });
}

// Exemple d'utilisation
const urls = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3'];
parallelCalls(urls);
