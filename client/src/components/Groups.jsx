import React from "react";

const Groups = async () => {

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
            
            
        });
    }

    const json_raw = await request ('https://localhost:5000/dataBase/members.json');
    const json = JSON.parse(json_raw);

    
    return (
        <div>
            {json.map( el => <span> ${el.group_name} </span> )}
        </div>
    );
}

export default Groups;