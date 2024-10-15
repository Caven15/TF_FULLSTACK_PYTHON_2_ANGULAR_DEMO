import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockageSessionService {

    /**
     * Stocke un élément en JSON dans le local storage
     * @param clef  La clef  sous laquelle l'élément sera stocké
     * @param valeur  L'élément à stocker (il sera convertis en JSON)
     */
    definirLocalStorage(clef : string, valeur : any) :void {
        localStorage.setItem(clef, JSON.stringify(valeur));
    }

    /**
     * Récupère une élément JSON depuis le localStorage
     * @param clef La clef de l'élément à récupérer
     * @returns L'objet JSON ou null s'il n'existe pas
     */
    obetnirLocalStorage(clef : string): any | null{
        const item = localStorage.getItem(clef);
        return item ? JSON.parse(item) : null;
    }

    /**
     * Supprime un élément du localStorage
     * @param clef  Le clé de l'élément a supprimer
     */
    supprimerLocalStorage(clef : string) : void {
        localStorage.removeItem(clef)
    }

    /**
     * Stocke un élément en JSON dans le local storage
     * @param clef  La clef  sous laquelle l'élément sera stocké
     * @param valeur  L'élément à stocker (il sera convertis en JSON)
     */
    definirsessionStorage(clef : string, valeur : any) :void {
        sessionStorage.setItem(clef, JSON.stringify(valeur));
    }

    /**
     * Récupère une élément JSON depuis le sessionStorage
     * @param clef La clef de l'élément à récupérer
     * @returns L'objet JSON ou null s'il n'existe pas
     */
    obetnirsessionStorage(clef : string): any | null{
        const item = sessionStorage.getItem(clef);
        return item ? JSON.parse(item) : null;
    }

    /**
     * Supprime un élément du sessionStorage
     * @param clef  Le clé de l'élément a supprimer
     */
    supprimersessionStorage(clef : string) : void {
        sessionStorage.removeItem(clef)
    }
}
