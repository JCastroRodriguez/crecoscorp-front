export class CiRucManager {
    constructor() { }

    /**
     * METODO PARA VALIDAR CEDULA O RUC
     * AUTOR: JEAN CARLOS CASTRO
     * REF: https://minka.gob.ec/snippets/1
     */
    public static validarCiRuc(ciRuc: string, isRuc: boolean = false) {
        let total = 0;
        let longitud = ciRuc.length == 10 ? 10 : ciRuc.length == 13 ? 10 : ciRuc.length;
        let longcheck = longitud - 1;

        if (ciRuc !== "" && longitud === 10) {
            for (let i = 0; i < longcheck; i++) {
                if (i % 2 === 0) {
                    let aux = parseInt(ciRuc.charAt(i)) * 2;
                    if (aux > 9) aux -= 9;
                    total += aux;
                } else {
                    total += parseInt(ciRuc.charAt(i)); // parseInt o concatenará en lugar de sumar
                }
            }

            total = total % 10 ? 10 - total % 10 : 0;

            if (isRuc) {
                return parseInt(ciRuc.charAt(longitud - 1)) == total && ciRuc.substring(10) == '001';
            }

            return parseInt(ciRuc.charAt(longitud - 1)) == total;
        }

        return false;
    }
}