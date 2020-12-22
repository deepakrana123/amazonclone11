import React,{useState,useEffect} from "react"
import './App.css';
import Header from "./Header";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"; 
import Cart from "./Cart";
import Home from "./Home";
import {db} from "./firebase";
import Login from "./Login";


function App() {

  const [ cartItems, setCartItems ] = useState([]);

  useEffect(() => {
    db.collection('cart-items').onSnapshot((snapshot)=>{
      let tempCartItems = []
      snapshot.docs.map((doc)=>{
          tempCartItems.push({
              id: doc.id,
              cartItem: doc.data()
          })
      })
      setCartItems(tempCartItems)
    })
  }, [])
  return (
	<Router>
    <div className="App">
   

   <Switch>
   <Route path="/login">
         <Login/>
       </Route>
   <Route path="/cart">
   <Header cartItems={cartItems}/>
   <Cart cartItems={cartItems}/>
   </Route>
   <Route path="/">
   <Header cartItems={cartItems}/>
   <Home/>
   </Route>
      
   </Switch>
  
        
     
  
	</div>
	</Router>
  );
}

export default App;