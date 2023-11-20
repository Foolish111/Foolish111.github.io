const verbs = [
    { infinitif: "befehlen", present: "befiehlt", preterit: "befahl", parfait: "hat befohlen", traduction: "donner un ordre" },
    { infinitif: "beginnen", present: "beginnt", preterit: "begann", parfait: "hat begonnen", traduction: "commencer" },
    { infinitif: "beißen", present: "beißt", preterit: "biss", parfait: "hat gebissen", traduction: "mordre" },
    { infinitif: "beschreiben", present: "beschreibt", preterit: "beschrieb", parfait: "hat beschrieben", traduction: "décrire" },
    { infinitif: "bieten", present: "bietet", preterit: "bot", parfait: "hat geboten", traduction: "offrir" },
    { infinitif: "binden", present: "bindet", preterit: "band", parfait: "hat gebunden", traduction: "attacher" },
    { infinitif: "bleiben", present: "bleibt", preterit: "blieb", parfait: "ist geblieben", traduction: "rester" },
    { infinitif: "brechen", present: "bricht", preterit: "brach", parfait: "hat gebrochen", traduction: "casser / briser" },
    { infinitif: "dürfen", present: "darf", preterit: "durfte", parfait: "hat gedurft", traduction: "avoir le droit" },
    { infinitif: "empfangen", present: "empfängt", preterit: "empfing", parfait: "hat empfangen", traduction: "recevoir" },
    { infinitif: "empfehlen", present: "empfiehlt", preterit: "empfahl", parfait: "hat empfohlen", traduction: "recommander" },
    { infinitif: "empfinden", present: "empfindet", preterit: "empfand", parfait: "hat empfunden", traduction: "ressentir" },
    { infinitif: "erschrecken", present: "erschrickt", preterit: "erschrak", parfait: "ist erschrocken", traduction: "effrayer" },
    { infinitif: "erziehen", present: "erzieht", preterit: "erzog", parfait: "hat erzogen", traduction: "éduquer" },
    { infinitif: "essen", present: "isst", preterit: "aß", parfait: "hat gegessen", traduction: "manger" },
    { infinitif: "fahren", present: "fährt", preterit: "fuhr", parfait: "ist gefahren", traduction: "aller (en véhicule)" },
    { infinitif: "fallen", present: "fällt", preterit: "fiel", parfait: "ist gefallen", traduction: "tomber" },
    { infinitif: "fangen", present: "fängt", preterit: "fing", parfait: "hat gefangen", traduction: "attraper" },
    { infinitif: "fernsehen", present: "sieht fern", preterit: "sah fern", parfait: "hat ferngesehen", traduction: "regarder la télévision" },
    { infinitif: "finden", present: "findet", preterit: "fand", parfait: "hat gefunden", traduction: "trouver" },
    { infinitif: "fliegen", present: "fliegt", preterit: "flog", parfait: "ist geflogen", traduction: "voler (avion / oiseau)" },
    { infinitif: "fliehen", present: "flieht", preterit: "floh", parfait: "ist geflohen", traduction: "fuir" },
    { infinitif: "fließen", present: "fließt", preterit: "floß", parfait: "ist geflossen", traduction: "couler" },
    { infinitif: "frieren", present: "friert", preterit: "fror", parfait: "hat gefroren", traduction: "geler / avoir froid" },
    { infinitif: "geben", present: "gibt", preterit: "gab", parfait: "hat gegeben", traduction: "donner" },
    { infinitif: "gefallen", present: "gefällt", preterit: "gefiel", parfait: "hat gefallen", traduction: "plaire" },
    { infinitif: "gehen", present: "geht", preterit: "ging", parfait: "ist gegangen", traduction: "aller (à pied)" },
    { infinitif: "gelingen", present: "gelingt", preterit: "gelang", parfait: "ist gelungen", traduction: "réussir" },
    { infinitif: "genießen", present: "genießt", preterit: "genoss", parfait: "hat genossen", traduction: "jouir / savourer" },
    { infinitif: "geschehen", present: "geschieht", preterit: "geschah", parfait: "ist geschehen", traduction: "arriver / se passer" },
    { infinitif: "gewinnen", present: "gewinnt", preterit: "gewann", parfait: "hat gewonnen", traduction: "gagner" },
    { infinitif: "gießen", present: "gießt", preterit: "goss", parfait: "hat gegossen", traduction: "verser" },
    { infinitif: "gleichen", present: "gleicht", preterit: "glich", parfait: "hat geglichen", traduction: "ressembler" },
    { infinitif: "greifen", present: "greift", preterit: "griff", parfait: "hat gegriffen", traduction: "saisir" },
    { infinitif: "haben", present: "hat", preterit: "hatte", parfait: "hat gehabt", traduction: "avoir" },
    { infinitif: "halten", present: "hält", preterit: "hielt", parfait: "hat gehalten", traduction: "tenir / arrêter" },
    { infinitif: "hängen", present: "hängt", preterit: "hing", parfait: "hat gehangen", traduction: "être suspendu / être accroché" },
    { infinitif: "heißen", present: "heißt", preterit: "hieß", parfait: "hat geheißen", traduction: "s’appeler" },
    { infinitif: "helfen", present: "hilft", preterit: "half", parfait: "hat geholfen", traduction: "aider" },
    { infinitif: "kommen", present: "kommt", preterit: "kam", parfait: "ist gekommen", traduction: "venir" },
    { infinitif: "können", present: "kann", preterit: "konnte", parfait: "hat gekonnt", traduction: "pouvoir / savoir" },
    { infinitif: "kriechen", present: "kriecht", preterit: "kroch", parfait: "ist gekrochen", traduction: "ramper" },
    { infinitif: "laden", present: "lädt", preterit: "lud", parfait: "hat geladen", traduction: "charger" },
    { infinitif: "lassen", present: "lässt", preterit: "ließ", parfait: "hat gelassen", traduction: "laisser" },
    { infinitif: "laufen", present: "läuft", preterit: "lief", parfait: "ist gelaufen", traduction: "aller / courir" },
    { infinitif: "leiden", present: "leidet", preterit: "litt", parfait: "hat gelitten", traduction: "souffrir" },
    { infinitif: "leihen", present: "leiht", preterit: "lieh", parfait: "hat geliehen", traduction: "prêter" },
    { infinitif: "lesen", present: "liest", preterit: "las", parfait: "hat gelesen", traduction: "lire" },
    { infinitif: "liegen", present: "liegt", preterit: "lag", parfait: "hat gelegen", traduction: "être allongé / posé / situé" },
    { infinitif: "lügen", present: "lügt", preterit: "log", parfait: "hat gelogen", traduction: "mentir" },
    { infinitif: "mögen", present: "mag", preterit: "mochte", parfait: "hat gemocht", traduction: "aimer bien" },
    { infinitif: "müssen", present: "muss", preterit: "musste", parfait: "hat gemusst", traduction: "être obligé" },
    { infinitif: "nehmen", present: "nimmt", preterit: "nahm", parfait: "hat genommen", traduction: "prendre" },
    { infinitif: "pfeifen", present: "pfeift", preterit: "pfiff", parfait: "hat gepfiffen", traduction: "siffler" },
    { infinitif: "raten", present: "rät", preterit: "riet", parfait: "hat geraten", traduction: "conseiller" },
    { infinitif: "scheinen", present: "scheint", preterit: "schien", parfait: "hat geschienen", traduction: "briller / sembler" },
    { infinitif: "schieben", present: "schiebt", preterit: "schob", parfait: "hat geschoben", traduction: "pousser" },
    { infinitif: "schießen", present: "schießt", preterit: "schoss", parfait: "hat geschossen", traduction: "tirer (un projectile)" },
    { infinitif: "schlafen", present: "schläft", preterit: "schlief", parfait: "hat geschlafen", traduction: "dormir" },
    { infinitif: "schlagen", present: "schlägt", preterit: "schlug", parfait: "hat geschlagen", traduction: "frapper / battre / taper" },
    { infinitif: "schließen", present: "schließt", preterit: "schloss", parfait: "hat geschlossen", traduction: "fermer" },
    { infinitif: "schneiden", present: "schneidet", preterit: "schnitt", parfait: "hat geschnitten", traduction: "couper" },
    { infinitif: "schreiben", present: "schreibt", preterit: "schrieb", parfait: "hat geschrieben", traduction: "écrire" },
    { infinitif: "schreien", present: "schreit", preterit: "schrie", parfait: "hat geschrieen", traduction: "crier (fort)" },
    { infinitif: "schreiten", present: "schreitet", preterit: "schritt", parfait: "ist geschritten", traduction: "marcher / s’avancer" },
    { infinitif: "schweigen", present: "schweigt", preterit: "schwieg", parfait: "hat geschwiegen", traduction: "se taire" },
    { infinitif: "schwimmen", present: "schwimmt", preterit: "schwamm", parfait: "ist geschwommen", traduction: "nager" },
    { infinitif: "sehen", present: "sieht", preterit: "sah", parfait: "hat gesehen", traduction: "voir" },
    { infinitif: "sein", present: "ist", preterit: "war", parfait: "ist gewesen", traduction: "être" },
    { infinitif: "singen", present: "singt", preterit: "sang", parfait: "hat gesungen", traduction: "chanter" },
    { infinitif: "sinken", present: "singt", preterit: "sank", parfait: "ist gesunken", traduction: "couler" },
    { infinitif: "sitzen", present: "sitzt", preterit: "saß", parfait: "hat gesessen", traduction: "être assis" },
    { infinitif: "sollen", present: "soll", preterit: "sollte", parfait: "hat gesollt", traduction: "devoir / avoir l’obligation morale" },
    { infinitif: "sprechen", present: "spricht", preterit: "sprach", parfait: "hat gesprochen", traduction: "parler" },
    { infinitif: "springen", present: "springt", preterit: "sprang", parfait: "ist gesprungen", traduction: "sauter" },
    { infinitif: "stehen", present: "steht", preterit: "stand", parfait: "hat gestanden", traduction: "être debout" },
    { infinitif: "stehlen", present: "stiehlt", preterit: "stahl", parfait: "hat gestohlen", traduction: "voler / dérober" },
    { infinitif: "steigen", present: "steigt", preterit: "stieg", parfait: "ist gestiegen", traduction: "monter" },
    { infinitif: "sterben", present: "stirbt", preterit: "starb", parfait: "ist gestorben", traduction: "mourir" },
    { infinitif: "streiten", present: "streitet", preterit: "stritt", parfait: "hat gestritten", traduction: "(se) disputer" },
    { infinitif: "tragen", present: "trägt", preterit: "trug", parfait: "hat getragen", traduction: "porter" },
    { infinitif: "treffen", present: "trifft", preterit: "traf", parfait: "hat getroffen", traduction: "rencontrer" },
    { infinitif: "treten", present: "tritt", preterit: "trat", parfait: "ist getreten", traduction: "donner un coup de pied" },
    { infinitif: "trinken", present: "trinkt", preterit: "trank", parfait: "hat getrunken", traduction: "boire" },
    { infinitif: "trügen", present: "trügt", preterit: "trog", parfait: "hat getrogen", traduction: "tromper" },
    { infinitif: "tun", present: "tut", preterit: "tat", parfait: "hat getan", traduction: "faire (familier)" },
    { infinitif: "unterbrechen", present: "unterbricht", preterit: "unterbrach", parfait: "hat unterbrochen", traduction: "interrompre" },
    { infinitif: "unternehmen", present: "unternimmt", preterit: "unternahm", parfait: "hat unternommen", traduction: "entreprendre" },
    { infinitif: "verbieten", present: "verbietet", preterit: "verbot", parfait: "hat verboten", traduction: "interdire" },
    { infinitif: "verderben", present: "verdirbt", preterit: "verdarb", parfait: "ist verdorben", traduction: "corrompre / abîmer" },
    { infinitif: "vergessen", present: "vergisst", preterit: "vergaß", parfait: "hat vergessen", traduction: "oublier" },
    { infinitif: "verlassen", present: "verlässt", preterit: "verließ", parfait: "hat verlassen", traduction: "quitter" },
    { infinitif: "verlieren", present: "verliert", preterit: "verlor", parfait: "hat verloren", traduction: "perdre" },
    { infinitif: "vermeiden", present: "vermeidet", preterit: "vermied", parfait: "hat vermieden", traduction: "éviter" },
    { infinitif: "verzeihen", present: "verzeiht", preterit: "verzieh", parfait: "hat verziehen", traduction: "pardonner" },
    { infinitif: "wachsen", present: "wächst", preterit: "wuchs", parfait: "ist gewachsen", traduction: "pousser / grandir" },
    { infinitif: "waschen", present: "wäscht", preterit: "wusch", parfait: "hat gewaschen", traduction: "laver" },
    { infinitif: "weichen", present: "wreicht", preterit: "wich", parfait: "hat gewichen", traduction: "écarter / reculer" },
    { infinitif: "werben", present: "wirbt", preterit: "warb", parfait: "hat geworben", traduction: "faire de la publicité" },
    { infinitif: "werden", present: "wird", preterit: "wurde", parfait: "ist geworden", traduction: "devenir" },
    { infinitif: "werfen", present: "wirft", preterit: "warf", parfait: "hat geworfen", traduction: "lancer / jeter" },
    { infinitif: "wiegen", present: "wiegt", preterit: "wog", parfait: "hat gewogen", traduction: "peser" },
    { infinitif: "wissen", present: "weiß", preterit: "wusste", parfait: "hat gewusst", traduction: "savoir" },
    { infinitif: "wollen", present: "will", preterit: "wollte", parfait: "hat gewollt", traduction: "vouloir" },
    { infinitif: "wringen", present: "wringt", preterit: "wrang", parfait: "hat gewrungen", traduction: "tordre / essorer" },
    { infinitif: "ziehen", present: "zieht", preterit: "zog", parfait: "ist gezogen", traduction: "tirer (vers soi)" },
    { infinitif: "zwingen", present: "zwingt", preterit: "zwang", parfait: "hat gezwungen", traduction: "contraindre / obliger" },
    { infinitif: "reisen", present: "reist", preterit: "reiste", parfait: "ist gereist", traduction: "voyager" },
    

];

function generateVerbs(numVerbs, mode) {
    const verbsContainer = document.getElementById("verbsContainer");
    verbsContainer.innerHTML = "";

    for (let i = 0; i < numVerbs; i++) {
        const verb = verbs[i];
        const verbDiv = document.createElement("div");

        // Affiche ou masque les cases en fonction du mode
        const displayMode = mode === "random" ? "none" : "block";

        verbDiv.innerHTML = `
            <p>${i + 1}. Infinitif: ${verb.infinitif}</p>
            <p style="display: ${displayMode};">Présent: <input type="text" id="present_${i}"></p>
            <p style="display: ${displayMode};">Prétérit: <input type="text" id="preterit_${i}"></p>
            <p style="display: ${displayMode};">Parfait: <input type="text" id="parfait_${i}"></p>
        `;

        verbsContainer.appendChild(verbDiv);
    }
}

// Fonction pour calculer la note
function calculateScore() {
    const numVerbs = document.getElementById("numVerbs").value;
    const mode = document.getElementById("mode").value;
    let score = 0;

    for (let i = 0; i < numVerbs; i++) {
        const verb = verbs[i];

        // Vérifie les réponses en fonction du mode
        if (mode === "all" || mode === "random") {
            const presentInput = document.getElementById(`present_${i}`).value.toLowerCase();
            const preteritInput = document.getElementById(`preterit_${i}`).value.toLowerCase();
            const parfaitInput = document.getElementById(`parfait_${i}`).value.toLowerCase();

            if (presentInput === verb.present.toLowerCase() &&
                preteritInput === verb.preterit.toLowerCase() &&
                parfaitInput === verb.parfait.toLowerCase()) {
                score++;
            }
        }
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Votre note : ${score}/${numVerbs * 3}</p>`;
}

// Initialisation avec 20 verbes par défaut
generateVerbs(20, "all");
