import { StringAlgo } from "./string/string-algo";

run();


function run() {
    console.log();
    console.log("*********************** STRING ***********************");
    console.log();
    console.log('getStringLengthNoSpace => ', StringAlgo.getStringLengthNoSpace("Bonjour le monde !"));
    console.log('personalizedGreeting => ', StringAlgo.personalizedGreeting("jean-pierre"));
    console.log('isExclamation => ', StringAlgo.isExclamation("Je suis très satisfait !"));
    console.log('reverseSentence => ', StringAlgo.reverseSentence("Une phrase dans le bon sens"));
    console.log('numberOfOccurence => ', StringAlgo.numberOfOccurence("Il y a 7 lettres E dans cette phrase, et 6 T", 'e'));
    console.log('formatToCamelCase => ', StringAlgo.formatToCamelCase("user_first_name"));
    console.log('numberOfVowel => ', StringAlgo.numberOfVowel("Il y 12 voyelles dans cette phrase la"));
    console.log('alternMajMin => ', StringAlgo.alternMajMin("Cette phrase doit alterner majuscule et minuscule"));
    console.log('removeDuplicates => ', StringAlgo.removeDuplicates("Il yy a deees lettres en troooooop icii, professseur Camilllllllle"));
    console.log('getInitials => ', StringAlgo.getInitials("Mehdi larek"));
    console.log('maskString => ', StringAlgo.maskString("1234567890123456", 5));
    console.log('isPalindrome => ', StringAlgo.isPalindrome("Eh ! ça va la vache ?"));
    console.log('longestSequence => ', StringAlgo.longestSequence("aaaaaaaabbbbbccc"));
    console.log('truncateString => ', StringAlgo.truncateString("Ceci est une très longue description d'un produit", 25));
    console.log('capitalizeWords => ', StringAlgo.capitalizeWords("bienvenue sur notre site web"));

    console.log();
    console.log();
    console.log();
    console.log("*********************** OBJECT 2 ***********************");
    console.log();

}