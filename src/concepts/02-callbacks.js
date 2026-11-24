import { heroes } from "../data/heroes";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {
    
    const id = '5d86371f2343e37870b91ef1asda';
    findHero( id, (error, hero) => {
        
        if (error) {
            element.innerHTML = error;
            return
        }

        element.innerHTML = hero?.name || 'No hay heroe';
    } );
}




/**
 * 
 * @param {String} id 
 * @param {(error:String|null, hero: Object)=>void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id)

    if ( !hero ) {
        callback(`Hero with id ${ id } not found `)
        return; // void
    }

    callback( null, hero )
}