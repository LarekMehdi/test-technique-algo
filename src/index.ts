import { ObjectAlgo } from "./object/object-algo";
import { StringAlgo } from "./string/string-algo";

run();


function run() {
    console.log();
    console.log("*********************** STRING ***********************");
    console.log();
    console.log('getStringLengthNoSpace => ', "Bonjour le monde !");
    console.log('getStringLengthNoSpace => ', StringAlgo.getStringLengthNoSpace("Bonjour le monde !"));
    console.log();
    console.log('personalizedGreeting => ', "jean-pierre");
    console.log('personalizedGreeting => ', StringAlgo.personalizedGreeting("jean-pierre"));
    console.log();
    console.log('isExclamation => ', "Je suis très satisfait !");
    console.log('isExclamation => ', StringAlgo.isExclamation("Je suis très satisfait !"));
    console.log();
    console.log('reverseSentence => ', "Une phrase dans le bon sens");
    console.log('reverseSentence => ', StringAlgo.reverseSentence("Une phrase dans le bon sens"));
    console.log();
    console.log('numberOfOccurence => ', "Il y a 7 lettres E dans cette phrase, et 6 T", 'e');
    console.log('numberOfOccurence => ', StringAlgo.numberOfOccurence("Il y a 7 lettres E dans cette phrase, et 6 T", 'e'));
    console.log();
    console.log('formatToCamelCase => ', "user_first_name");
    console.log('formatToCamelCase => ', StringAlgo.formatToCamelCase("user_first_name"));
    console.log();
    console.log('numberOfVowel => ', "Il y 12 voyelles dans cette phrase la");
    console.log('numberOfVowel => ', StringAlgo.numberOfVowel("Il y 12 voyelles dans cette phrase la"));
    console.log();
    console.log('alternMajMin => ', "Cette phrase doit alterner majuscule et minuscule");
    console.log('alternMajMin => ', StringAlgo.alternMajMin("Cette phrase doit alterner majuscule et minuscule"));
    console.log();
    console.log('removeDuplicates => ', "Il yy a deees lettres en troooooop icii, professseur Camilllllllle");
    console.log('removeDuplicates => ', StringAlgo.removeDuplicates("Il yy a deees lettres en troooooop icii, professseur Camilllllllle"));
    console.log();
    console.log('getInitials => ', "Mehdi larek");
    console.log('getInitials => ', StringAlgo.getInitials("Mehdi larek"));
    console.log();
    console.log('maskString => ', "1234567890123456");
    console.log('maskString => ', StringAlgo.maskString("1234567890123456", 5));
    console.log();
    console.log('isPalindrome => ', "Eh ! ça va la vache ?");
    console.log('isPalindrome => ', StringAlgo.isPalindrome("Eh ! ça va la vache ?"));
    console.log();
    console.log('longestSequence => ', "aaaaaaaabbbbbccc");
    console.log('longestSequence => ', StringAlgo.longestSequence("aaaaaaaabbbbbccc"));
    console.log();
    console.log('truncateString => ', "Ceci est une très longue description d'un produit");
    console.log('truncateString => ', StringAlgo.truncateString("Ceci est une très longue description d'un produit", 25));
    console.log();
    console.log('capitalizeWords => ',"bienvenue sur notre site web");
    console.log('capitalizeWords => ', StringAlgo.capitalizeWords("bienvenue sur notre site web"));

    console.log();
    console.log();
    console.log();
    console.log("*********************** OBJECT 2 ***********************");
    console.log();
    const scores = {
        level1: 100,
        level2: 85,
        level3: 95
    };
    console.log('getValues => ', scores);
    console.log('getValues => ', ObjectAlgo.getValues(scores));
    console.log();

    const pricesInEuros = {
        book: 20,
        pen: 5,
        notebook: 10
    };
    const toDollars = (euros: number) => euros * 1.1;
    console.log('transformValues => ', pricesInEuros);
    console.log('transformValues => ', ObjectAlgo.transformValues(pricesInEuros, toDollars));
    console.log();

    const store1Sales = { january: 1000, february: 1200, march: 900 };
    const store2Sales = { january: 800, february: 950, march: 1100 };    
    console.log('mergeObjects => ', store1Sales);
    console.log('mergeObjects => ', store2Sales);
    console.log('mergeObjects => ', ObjectAlgo.mergeObjects(store1Sales, store2Sales));
    console.log();

    const inventory = {
        laptop: 0,
        smartphone: 5,
        tablet: 0,
        headphones: 8
    };
    const filter = (stock: number) => stock === 0;
    console.log('filterObject => ', inventory);
    console.log('filterObject => ', ObjectAlgo.filterObject(inventory, filter));
    console.log();

    const flatConfig = {
        'app.name': 'MyApp',
        'app.version': '1.0.0',
        'database.host': 'localhost',
        'database.port': 5432
    };
    console.log('flatToNested => ', flatConfig);
    console.log('flatToNested => ', ObjectAlgo.flatToNested(flatConfig));
    console.log();

    const productStock = {
        laptop: 0,
        mouse: 5,
        keyboard: 0,
        monitor: 3
    };
    console.log('findKeysByValue => ', productStock);
    console.log('findKeysByValue => ', ObjectAlgo.findKeysByValue(productStock, 0));
    console.log();

    const playerNames = ["Alice", "Bob", "Charlie"];
    const scores1 = [100, 85, 90];
    console.log('createObjectFromArrays => ', playerNames);
    console.log('createObjectFromArrays => ', scores1);
    console.log('createObjectFromArrays => ', ObjectAlgo.createObjectFromArrays(playerNames, scores1));
    console.log();

    const orderStatuses = {
        order1: "pending",
        order2: "delivered",
        order3: "pending",
        order4: "cancelled",
        order5: "pending"
    };
    console.log('countValues => ', orderStatuses);
    console.log('countValues => ', ObjectAlgo.countValues(orderStatuses));
    console.log();

    const userProfile = {
        name: "Jean Martin",
        email: "jean@email.com",
        password: "secret123",
        age: 35,
        address: "123 rue Principal"
    };
    const publicInfo = ["name", "age"] as const;
    console.log('extractProperties => ', userProfile);
    console.log('extractProperties => ', publicInfo);
    console.log('extractProperties => ', ObjectAlgo.extractProperties(userProfile, publicInfo));
    console.log();

    const playerScores = {
        Alice: 85,
        Bob: 92,
        Charlie: 78,
        David: 95
    };
    console.log('sortObjectByValue => ', playerScores);
    console.log('sortObjectByValue => ', ObjectAlgo.sortObjectByValue(playerScores));
    console.log();

    const gameScores = {
        level1: 850,
        level2: 920,
        level3: 880,
        level4: 1020
    };
    console.log('findMaxValue => ', gameScores);
    console.log('findMaxValue => ', ObjectAlgo.findMaxValue(gameScores));
    console.log();

    const productPairs: [string, number][] = [
        ["pommes", 2.5],
        ["bananes", 1.8],
        ["oranges", 2.2]
    ];
    console.log('createObjectFromPairs => ', productPairs);
    console.log('createObjectFromPairs => ', ObjectAlgo.createObjectFromPairs(productPairs));
    console.log();

    const config = {
        app: {
            name: "MonApp",
            settings: {
                theme: "dark",
                notifications: {
                    email: true,
                    push: false
                }
            }
        }
    };
    console.log('findValueInObject => ', config);
    console.log('findValueInObject => ', ObjectAlgo.findValueInObject(config, 'dark'));
    console.log();

    const students = [
        { name: "Alice", level: "Débutant" },
        { name: "Bob", level: "Intermédiaire" },
        { name: "Charlie", level: "Débutant" },
        { name: "David", level: "Avancé" }
    ];
    console.log('groupByProperty => ', students);
    console.log('groupByProperty => ', ObjectAlgo.groupByProperty(students, 'level'));
    console.log();

    const userSchema = {
        name: "string",
        age: "number",
        email: "string"
    };
    const userInput = {
        name: "Marie",
        age: 25,
        email: "marie@email.com"
    };
    console.log('validateObject => ', userSchema);
    console.log('validateObject => ', userInput);
    console.log('validateObject => ', ObjectAlgo.validateObject(userSchema, userInput));
    console.log();

    const oldProfile = {
        name: "Jean Dupont",
        email: "jean@email.com",
        age: 30,
        addresse: "25 rue de la liberté"
    };
    const newProfile = {
        name: "Jean Dupont",
        email: "jean.dupont@email.com",
        age: 31,
        phone: "0123456789"
    };
    console.log('compareDifferences => ', oldProfile);
    console.log('compareDifferences => ', newProfile);
    console.log('compareDifferences => ', ObjectAlgo.compareDifferences(oldProfile, newProfile));
    console.log();

    const searchParams = {
        query: "ordinateur portable",
        maxPrice: 1000,
        brand: "Dell",
        inStock: true
    };
    console.log('objectToUrlParams => ', searchParams);
    console.log('objectToUrlParams => ', ObjectAlgo.objectToUrlParams(searchParams));
    console.log();

    const monthlyRevenues = {
        january: 1000,
        february: 1200,
        march: 900,
        april: 1500
    };
    console.log('getObjectStats => ', monthlyRevenues);
    console.log('getObjectStats => ', ObjectAlgo.getObjectStats(monthlyRevenues));
    console.log();

}