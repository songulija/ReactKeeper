import React from 'react';//import react module to use JSX code

//create Footer component as function
function Footer(){//return footer html component with <p>  
    const today = new Date().getFullYear();
    //to paste Javascript code inside html we use {}
    return <footer>
        <p>Copyright {today}</p>
    </footer>
}

export default Footer;//export Footer function(component) so we could use it in other files