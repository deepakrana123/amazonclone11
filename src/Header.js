import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom"; 


function Header(props) {

	console.log("header props",props)
	const getCount = () => {
        // init count with 0
        // loop through all the items
        // add quantity to count
        // return it
        let count = 0;
        props.cartItems.forEach(item => {
            count += parseInt(item.cartItem.quantity)
        });
        return count;
    } 
	return (
		<div className="header">
		<Link to="/">
		<div className="header_logo">
		<img src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png" alt=""/>
		</div>
		</Link>
		{/*Address */}
		<div className="header_optionaddress">
		{/*Address icon */}
		
		<div className="header_options">
		<span className="header_optionfirst">Hello</span>
		<span className="header_optionsecond"> select your address</span>
		</div>
		</div>
		<div className="header_search">
		<input className="header_searchInput"  type="text"/>
		<div className="header_searchIcon">
		<SearchIcon/>
		</div>
		</div>
			<div className="header_navItems">
			<Link to="/login">
			<div className="header_options">
			<span className="header_optionfirst">Hello</span>
		<span className="header_optionsecond">Account,SignIn</span>
			</div>
			</Link>
			<div className="header_options">
			<span className="header_optionfirst">Order</span>
		<span className="header_optionsecond">Return the oddres</span>
			</div>
			
			<Link to="/cart">
			<div className="Header-optionCart">
				<ShoppingBasketIcon />
				<span className="Header-cartCount">{getCount()}</span>
			</div>
			</Link>
			</div>
		
		</div>
	)
}

export default Header;
