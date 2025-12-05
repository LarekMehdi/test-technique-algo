export abstract class ObjectAlgo {

    /** Écrivez une fonction qui récupère toutes les valeurs d'un objet */
    static getValues(object: {[key: string]: number}): number[] {
        let result: number[] = [];
        const keys = Object.keys(object);
        for (let k of keys) {
            result.push(object[k]);
        }

        return result;
    }

    /** Écrivez une fonction qui transforme les valeurs d'un objet */
    static transformValues(object: {[key: string]: number}, callback: (params: number) => number): {[key: string]: number} {
        let result: {[key: string]: number} = {};

        const keys = Object.keys(object);
        for (let k of keys) {
            result[k] = callback(object[k]);
        }
        return result;
    }
    
    /** Écrivez une fonction qui fusionne deux objets en sommant les valeurs numériques communes */
    static mergeObjects(object1: {[key: string]: number}, object2: {[key: string]: number}): {[key: string]: number} {
        let result: {[key: string]: number} = {};

        const keys = Object.keys(object1);
        for (let k of keys) {
            if (this.__hasPropertyNotNull(object2, k)) {
                const mergedValue = object1[k] + object2[k];
                result[k] = mergedValue;
            }
           
        }

        return result;
    }

    private static __hasPropertyNotNull(formData: {[key: string]: any}, key: string): boolean {
        return formData[key] != null && formData[key] !== '';
    }


    /** Écrivez une fonction qui filtre un objet selon une condition sur les valeurs */
    static filterObject(object: {[key: string]: number}, callback: (arg: number) => boolean): {[key: string]: number} {
        let result: {[key: string]: number} = {};

        const keys = Object.keys(object);
        for (let k of keys) {
            const passedFilter = callback(object[k]);
            if (passedFilter) result[k] = object[k];
        }

        return result;
    }

    /** Écrivez une fonction qui convertit un objet plat en objet imbriqué en utilisant les points comme séparateurs */
    static flatToNested(object: {[key: string]: any}): {[key: string]: any} {
        let result: {[key: string]: any} = {};

        const keys = Object.keys(object);
        for (let k of keys) {
            const value = object[k];
            const nestedKeys = k.trim().split('.');

            nestedKeys.reduce((acc, key, index) => {
                // dernière clé, on assigne la valeur
                if (index === nestedKeys.length - 1) {
                    acc[key] = value;
                } else {
                    // clé existe pas, on crée un objet vide
                    acc[key] = acc[key] || {};
                }
                return acc[key];
            }, result);
        }

        return result;
    }

    /** Écrivez une fonction qui trouve les clés d'un objet ayant une valeur spécifique */
    static findKeysByValue(object: {[key: string]: any}, value: any): string[] {
        let result: string[] = [];

        const keys = Object.keys(object);
        for (let k of keys) {
            if (object[k] === value) result.push(k);
        }

        return result;
    }

    /** Écrivez une fonction qui crée un objet à partir de deux tableaux */
    static createObjectFromArrays(array1: string[], array2: number[]): {[key: string]: number} {
        let result: {[key: string]: number} = {};
        
        for (let i=0; i<array1.length; i++) {
            const key = array1[i];
            const value = array2[i];
            result[key] = value;
        }

        return result;
    }


    /** Écrivez une fonction qui compte les occurrences de valeurs dans un objet */
    static countValues(object: {[key: string]: string}): {[key: string]: number} {
        let result: {[key: string]: number} = {};
        const values = Object.keys(object).map(key => object[key]);
        
        for (const v of values) {
            result[v] = (result[v] || 0) + 1;
        }

        return result;
    }

    /** Écrivez une fonction qui extrait certaines propriétés d'un objet */
    static extractProperties(object: {[key: string]: any}, properties: readonly string[]): {[key: string]: any} {
        let result: {[key: string]: any} = {};

        for (let p of properties) {
            result[p] = object[p];
        }

        return result;
    }


    /** Écrivez une fonction qui trie les propriétés d'un objet par valeur */
    static sortObjectByValue(object: {[key: string]: number}): {[key: string]: number} {
        let result: {[key: string]: number} = {};
        const values = Object.keys(object).map(key => object[key]);
        const sortedValues = values.sort((n1,n2) => n1 - n2);
        
        for (let value of sortedValues) {
            const keys = this.__getKeysByValue(object, value);

            if (keys !== undefined) {
                for (let k of keys) {
                    result[k] = value;
                }
            } 
        }

        return result;
    }

    private static __getKeysByValue(object: {[key: string]: number}, value: number): string[] | undefined {
        return Object.keys(object).filter(key => object[key] === value);
    }

    /** Écrivez une fonction qui trouve la valeur maximale dans un objet de nombres */
    static findMaxValue(object: {[key: string]: number}): number {
        let maxValue: number = Math.max(...Object.values(object));

        const values = Object.keys(object).map(key => object[key]);
        for (let value of values) {
            if (value > maxValue) maxValue = value;
        }

        return maxValue;
    }


    /** Écrivez une fonction qui créé un objet à partir d'un tableau de paires clé-valeur */
    static createObjectFromPairs(pairredArray: [string, number][]): {[key: string]: number} {
        let result: {[key: string]: number} = {};

        for (let pair of pairredArray) {
            result[pair[0]] = pair[1];
        }

        return result;
    }


    /** Écrivez une fonction qui recherche une valeur dans un objet imbriqué */
    static findValueInObject(obj: any, target: any, path: string[] = []): string[] | null {
        // Si l'objet est un objet et non une valeur primitive
        if (typeof obj === 'object' && obj !== null) {
            // itére sur les clefs de l'objet, pas sur celles de potentiels objets imbriqués
            for (const key in obj) {
                // permet d'ignorer de potentiel attributs hérités
                if (obj.hasOwnProperty(key)) {
                    const currentPath = [...path, key]; // On garde la trace des clés traversées
                    const result = this.findValueInObject(obj[key], target, currentPath); // on refait le traitement sur le potentiel objet imbriqué
                    
                    // Si on trouve la valeur, on la retourne
                    if (result) {
                        return result;
                    }
                }
            }
        } else {
            // Si la valeur correspond à la cible, on retourne le chemin
            if (obj === target) {
                return path;
            }
        }
    
        // Si rien n'a été trouvé, on retourne null
        return null;
    }


    /** Écrivez une fonction qui groupe les objets par une propriété spécifique */
    static groupByProperty(objects: {[key: string]: string}[], key: string): {[key: string]: {[key: string]: string}[]} {
        let result: {[key: string]: {[key: string]: string}[] } = {};

        for (const o of objects) {
            const value = o[key];

            if (result[value]) {
                result[value].push(o);
            } else {
                result[value] = [];
                result[value].push(o);
            }
        }
        return result;
    }


    /** Écrivez une fonction qui vérifie si un objet correspond à un schéma spécifique */
    static validateObject(schema: {[key: string]: string}, input: {[key: string]: string|number|boolean}): boolean {

        for (const key in input) {
            const value = input[key];
            const valueType = schema[key];
            if (typeof value !== valueType) return false;
        }

        return true;
    }


    /** Écrivez une fonction qui compare les modifications entre deux objets */
    static compareDifferences(oldObject: {[key: string]: string|number|boolean}, newObject: {[key: string]: string|number|boolean}): {[key: string]: {[key: string]: string|number|boolean}} {
        let result: {[key: string]: {[key: string]: string|number|boolean}} = {};

        // itérer sur le new pour les ajouts et modifications
        for (const key in newObject) {
            if (oldObject.hasOwnProperty(key)) {
                const oldValue = oldObject[key];
                const newValue = newObject[key];
                if (oldValue !== newValue) {
                    result[key] = {type: 'modified', old: oldValue, new: newValue};
                }
            } else {
                const newValue = newObject[key];
                result[key] = {type: 'added', new: newValue};
            }
        }

        // itérer sur le old pour les suppressions
        for (const key in oldObject) {
            if (!newObject.hasOwnProperty(key)) {
                const oldValue = oldObject[key];
                result[key] = {type: 'errased', old: oldValue};
            }
        }

        return result;
    }


    /** Écrivez une fonction qui convertit un objet en chaîne de paramètres d'URL */
    static objectToUrlParams(object: {[key: string]: string|number|boolean}): string {
        if (object.hasOwnProperty('query') && (typeof object.query === 'string')) {
            const query: string = object.query;
            const formattedQuery: string = encodeURIComponent(query);

            let result: string = `query=${formattedQuery}`;

            for (const key in object) {
                if (key !== 'query') {
                    const paramName = key;
                    const paramValue = object[key];

                    result += `&${paramName}=${paramValue}`;
                }
            }

            return result;
        }

        return '';
    }


    /** Écrivez une fonction qui génère un résumé statistique d'un objet contenant des nombres */
    static getObjectStats(object: {[key: string]: number}): {[key: string]: {[key: string]: number}} {
        let result: {[key: string]: {[key: string]: number}} = {};
        const values: number[] = Object.keys(object).map(key => object[key]);
        const n: number = values.length;

        const minValue: number = Math.min(...values);
        const maxValue: number = Math.max(...values);
        let total: number = 0;

        for (const value of values) {
            total += value;
        }

        const average: number = total / n;

        // BASIC
        let basic: {[key: string]: number} = {};
        basic.min = minValue;
        basic.max = maxValue;
        basic.average = average;
        basic.total = total;

        
        values.sort((a, b) => a - b);
        var i: number = values.length / 2;
        const median: number = i % 1 == 0 ? (values[i - 1] + values[i]) / 2 : values[Math.floor(i)];

        const mean: number = values.reduce((sum, num) => sum + num, 0) / n;
        const squaredDifferences = values.map(num => (num - mean) ** 2); // élève a la puissance (num - mean)^2
        const variance = squaredDifferences.reduce((sum, diff) => sum + diff, 0) / n;

        const standardDeviation = Math.sqrt(variance);
        // *100 pour deplacer la virgule, epsilon pour eviter les ereurs d'arrondi, /100 pour revenir au nombre de base
        const standardDeviationRounded = Math.round((standardDeviation + Number.EPSILON) * 100) / 100;
    
        // ADVANCED
        let advanced: {[key: string]: number} = {};
        advanced.median = median;
        advanced.variance = variance;
        advanced.standardDeviation = standardDeviationRounded;
       
        result.basic = basic;
        result.advanced = advanced;
        return result;
    }



}