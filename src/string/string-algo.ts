import { DOUBLE_CHAR } from "../constantes/double-char.constante";
import { VOWEL } from "../constantes/vowel.constante";

export abstract class StringAlgo {

    /** Créez une fonction qui prend une chaîne de caractères en paramètre et retourne sa longueur après avoir supprimé tous les espaces.
     * Case d'usage possible: Validation de la longueur d'un tweet ou d'un message SMS Entrée 
     * "Bonjour le monde !" Sortie attendue : 16 caractères */
    static getStringLengthNoSpace(text: string): number {
        return text.replace(/\s/g, "").length;
    }

    /** Développez une fonction qui accepte un prénom en paramètre et renvoie une salutation personnalisée en mettant 
     * la première lettre en majuscule.
     * Cas d'usage: Système de messagerie automatique ou e-mailing 
     * Entrée : "jean-pierre" Sortie attendue : "Bonjour Jean-Pierre" */
    static personalizedGreeting(firstname: string): string {
       const formatedName = this.formatFirstname(firstname);
        return `Bonjour ${formatedName}`;
    }

    static formatFirstname(firstname: string): string {
        const formatted: string[] = firstname.trim().split('');
        if (formatted.length > 0) formatted[0] = formatted[0].toUpperCase();
 
        // espace ou tiret
        for (let i = 1; i < formatted.length; i++) {
            // si on a des maj en plein milieu du nom (faute de frappe de l'utilisateur, ect...)
            formatted[i] = formatted[i].toLowerCase();
            if (formatted[i - 1] === ' ' || formatted[i - 1] === '-') {
                formatted[i] = formatted[i].toUpperCase();
            }
        }

        return formatted.join('');
    }



    /** Écrivez une fonction qui détermine si une chaîne de caractères se termine par un point d'exclamation.
     * Cas d'usage: Analyse de ton dans un service client 
     * Entrée : "Je suis très satisfait !" Sortie attendue : true */
    static isExclamation(text: string): boolean {
        return text.trim().endsWith('!');
    }


    /** 
     * Case d'usage: Dans un système de traduction automatique, il est parfois nécessaire d'inverser l'ordre des mots 
     * pour s'adapter à la structure grammaticale de la langue cible. Par exemple, dans la traduction du français vers le japonais, 
     * où l'ordre des mots est fondamentalement différent. 
     * La fonction pourrait être utilisée comme étape préliminaire dans ce processus de traduction. */
    static reverseSentence(sentence: string): string {
        const formatted: string[] = sentence.trim().split(' ');
        return formatted.reverse().join(' ');
    }


    /** Écrivez une fonction qui compte le nombre d'occurrences d'une lettre dans une chaîne
     * Cas d'usage: Dans un outil d'analyse de texte pour professeurs de langue, cette fonction permet d'évaluer la fréquence
     *  d'utilisation de certaines lettres dans les productions écrites des élèves. 
     * Cela peut aider à identifier des difficultés spécifiques ou des patterns d'écriture. */
    static numberOfOccurence(text: string, char: string): number {
        if (char.length !== 1) throw new Error('Charactere de test non valide');

        const formatted: string[] = text.trim().split('');
        let occurence = 0;

        for (let i=0; i<formatted.length; i++) {
            formatted[i].toLowerCase() === char.toLowerCase() ? occurence++ : '';
        }

        return occurence;
    }


    /** Écrivez une fonction qui convertit une chaîne en "camelCase"
     * Cas d'usage: Dans un système de migration de base de données, où les conventions de nommage diffèrent entre l'ancien et le nouveau système. 
     * Par exemple, lors de la conversion de noms de colonnes SQL (avec underscores) vers des propriétés JavaScript. */
    static formatToCamelCase(field: string) {
        const firstChar = field[0];
        const transformedRest = field.slice(1).replace(/_(.)/g, (_match, p1) => p1.toUpperCase());
        return (firstChar.toLowerCase() + transformedRest);
    }

    //TODO: a revoir?
    /** Écrivez une fonction qui compte le nombre de voyelles dans une chaîne
     * Cas d'usage: Dans une application d'aide à l'apprentissage de la poésie, cette fonction peut servir à analyser
     *  la sonorité des vers et identifier les assonances. Cela aide les élèves à comprendre la structure phonétique des poèmes. */
    static numberOfVowel(text: string): number {
        let nbOfVowel = 0;
        const formatted = text.trim().split('');
        const enumValues = Object.values(VOWEL) as string[];

        for (let i=0; i<formatted.length; i++) {
            for (let vowel of enumValues) {
                if (formatted[i] === vowel) {
                    nbOfVowel++;
                    continue;
                }
            }
        }
        return nbOfVowel;
    }

    /** Écrivez une fonction qui alterne majuscules et minuscules dans une chaîne
     * Cas d'usage: Dans un outil de génération de mots de passe mémorisables, cette fonction peut être utilisée pour créer des variantes
     *  visuellement distinctes d'un mot tout en conservant sa lisibilité. */
    static alternMajMin(text: string): string {
        const formatted: string[] = text.trim().split('');
        let isMaj: boolean = true;
        let result: string[] = [];

        for (let i=0; i<formatted.length; i++) {
            if (formatted[i] !== ' ') {
                let formattedChar: string = isMaj ? formatted[i].toUpperCase() : formatted[i].toLowerCase();
                result.push(formattedChar);
                isMaj = !isMaj;
            } else {
                result.push(formatted[i]);
            }
        }

        return result.join('');
    }


    // TODO: a revoir?
    /** Écrivez une fonction qui supprime les caractères en double consécutifs
     * Cas d'usage: Dans un système de nettoyage de données pour un service client, cette fonction peut être utilisée pour corriger 
     * les erreurs de frappe courantes dans les messages des utilisateurs, notamment les répétitions de caractères dues à des
     *  touches maintenues trop longtemps. */
    static removeDuplicates(text: string): string {
        const enumValues = Object.values(DOUBLE_CHAR) as string[];
        const formatted = text.trim().split('');
        let result = '';

        for (let i=0; i<formatted.length; i++) {
            // Si le caractère courant est différent du précédent, on l'ajoute au résultat
            if (formatted[i] !== formatted[i - 1]) {
                result += formatted[i];
            // On garde certaines lettres en doubles, celles qui peuvent l'etre   
            } else if (enumValues.includes(formatted[i])){
                if (formatted[i] !== formatted[i - 2]) {
                    result += formatted[i];
                }
            }
        }
        return result;
    }


    // TODO: a revoir?
    /** Écrivez une fonction qui extrait les initiales d'un nom complet
     * Cas d'usage: Dans un système de gestion des ressources humaines d'une grande entreprise, cette fonction est utilisée pour générer automatiquement
     *  des identifiants uniques pour les employés. 
     * Par exemple, lorsqu'un nouveau collaborateur rejoint l'entreprise */
    static getInitials(fullname: string): string {
        const formatted = fullname.trim().split(' ');
        let result: string = '';

        for (let f of formatted) {
            result += f.charAt(0).toUpperCase();
        }
        return result;
    }


    // TODO: a revoir
    /** Écrivez une fonction qui masque les caractères d'une chaîne sauf les N derniers
     * Cas d'usage: Dans une application bancaire sécurisée, cette fonction est essentielle pour l'affichage des données sensibles dans les relevés
     *  de compte et les rapports de transaction */
    static maskString(text: string, numberToShow: number): string {
        const formatted = text.trim().split('');
        const indexStart = formatted.length - numberToShow;
        let result = '';

        for (let i=indexStart; i<formatted.length; i++) {
            result += formatted[i];
        }

        return result;
    }


    /** Écrivez une fonction qui vérifie si une chaîne est un palindrome
     * Cas d'usage: Dans une application de vérification de marques déposées, cette fonction aide à identifier
     *  les noms de marque qui sont des palindromes,
     *  une caractéristique souvent recherchée pour leur mémorabilité */
    static isPalindrome(text: string): boolean {
        // supprime la punctuation mais conserve les accents, cédilles, ect... puis on enleve tous les espaces vide
        // NFD permet de séparer les lettres et leur accent, pour ensuite ne garder que la lettre
        const formatted = text.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\p{L}\p{N}\s']/gu, '').replace(/\s+/g, '').split('');

        for (let i=0; i<formatted.length; i++) {
            if (formatted[i].toLowerCase() !== formatted[formatted.length - (i + 1)].toLowerCase()) {
                return false;
            }
        }
        return true;
    }


    /** Écrivez une fonction qui trouve la plus longue séquence de caractères identiques
     * Cas d'usage: Dans un système de contrôle qualité pour l'impression de codes-barres, cette fonction détecte les erreurs potentielles d'impression
     *  dues à des répétitions excessives */
    static longestSequence(text: string): string {
        const formatted: string[] = text.trim().split('');
        let currentLong: number = 1;
        let maxLong: number = 0;
        let maxChar: string = '';

        for (let i = 1; i < formatted.length; i++) {
            if (formatted[i].toLowerCase() === formatted[i - 1].toLowerCase()) {
                currentLong++;
            } else {
                if (currentLong > maxLong) {
                    maxLong = currentLong;
                    maxChar = formatted[i - 1];
                }
                currentLong = 1;
            }
        }

        // Vérification finale après la dernière itération
        if (currentLong > maxLong) {
            maxLong = currentLong;
            maxChar = formatted[formatted.length - 1];
        }

        return maxChar.repeat(maxLong);
    }


    /** Écrivez une fonction qui formate un texte en ajoutant des points de suspension
     * Cas d'usage: Dans un système de gestion de contenu pour réseaux sociaux, cette fonction optimise les descriptions 
     * de produits pour différentes plateformes */
    static truncateString(text: string, maxLength: number): string {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "...";
    }


    /** Écrivez une fonction qui capitalise la première lettre de chaque mot
     * Cas d'usage: Dans un système de gestion documentaire, cette fonction standardise automatiquement les titres de documents 
     * pour maintenir une cohérence dans l'archivage */
    static capitalizeWords(text: string): string {
        const formatted: string[] = text.trim().split(' ');
        let result: string = '';

        for (let word of formatted) {
            const firstCar: string = word.charAt(0);
            const formattedWord: string = word.substring(1);
            result += firstCar.toUpperCase() + formattedWord + ' ';
        }

        return result.trim();
    }

}