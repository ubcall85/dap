import React from "react";

const Groups = () => {

    const { XMLHttpRequest } = require( 'xmlhttprequest' );

    async function request (){
        return new Promise( function( resolve, reject ) {

            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if ( this.readyState == 4 ) {
                    if ( this.status == 200 ) resolve( this.responseText ); 
                    else reject( this.status );
                }
            }
    
            xhr.open( 'GET', url, true );
            
            
        } );

        
    }

    (async () => {
        const request = await request ('https://localhost:5000/dataBase/members.json');
    })();

    
    return (
        <div></div>
    );
}

export default Groups;