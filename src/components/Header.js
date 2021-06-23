import React from 'react'
import AddIcon from '@material-ui/icons/Add';



//Header

 const Header = (props) => {
     return(
        
        <div className = "headerContainer">
            <AddIcon className = "addIcon"/>
          <h2 className="title">{props.title}</h2>
        </div>
     )
 }

// class Header extends React.component{
//     render(){
//         return(
//             <div>
//                 <span>Create New Promo Code</span>
//             </div>
//         )
//     }
// }

export default Header;

