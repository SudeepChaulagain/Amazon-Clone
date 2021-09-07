import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css'
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import { auth } from "../config/Firebase";
const Header = () => {
  const {state} = useContext(GlobalContext)
  const handleAuthentication = ()=>{
    if (state.user) {
      auth.signOut()
    }
  }
    return (
        <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
  
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
  
        <div className="header__nav">
          <Link to={!state.user && '/login'}>
            <div className="header__option" onClick={handleAuthentication}>
              <span className="header__optionLineOne">Hello {!state.user ? 'Guest' : state.user.email}</span>
              <span className="header__optionLineTwo">{state.user ? 'Sign Out': 'Sign In'}</span>
            </div>
            </Link>
  
         
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          
  
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Cart</span>
          </div>
  
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartIcon/>
              <span className="header__optionLineTwo header__basketCount">
                {state.basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    )
}

export default Header
