
import { Fragment ,useContext} from "react";
import { Outlet, Link } from "react-router-dom";

import {useSelector} from "react-redux";

import CartIcons from "../../component/cart-icon/cart-icon.component";
import CartDropDown from "../../component/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as CrownLogo } from "../../asset/007 crown.svg";
import
 {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink
}
 from "./navigation.styles.jsx";
 import {selectCurrentUser} from "../../store/user/user.selector"
import { signOutUser } from "../../utils/firebase/firebase.utils";


const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)

   
    const {isCartOpen} = useContext(CartContext);
  
    return (
         <Fragment>
            <NavigationContainer>
                <LogoContainer to= "/">
                    
                <CrownLogo className="logo" />
                
                </LogoContainer>
                <NavLinks>
                <NavLink to="/shop">
                    SHOP
                </NavLink>
                {
                    currentUser ?(
                        <NavLink as = "span" className="nav-link" onClick={signOutUser}>
                        {""}
                        SIGN OUT {""}
                        </NavLink>
                    ):(
                    <NavLink to="/auth">
                    SIGN IN
                    </NavLink>
                    )
                }
                    <CartIcons />
                </NavLinks>
                {/* short circuit operator && evaluates truthiness on both sides */}
                {isCartOpen && <CartDropDown />}
            </NavigationContainer>
               <Outlet />
            
        </Fragment>
      
    )
}
  
export default Navigation;