import React, { useState, useEffect } from 'react'
import { 
         Routes, 
         Route,
        useNavigate,
        } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import ItemsContainer from './containers/ItemsContainer'
import ItemDetails from './components/ItemDetails'
import FavoritesContainer from './containers/FavoritesContainer'
import SignupForm from './components/authentication/SignupForm'
import LoginForm from './components/authentication/LoginForm'
import Account from './components/Account'
import SellItemForm from './components/SellItemForm'
import EditItemForm from './components/EditItemForm'
import Listings from './components/Listings'
import PurchasedItems from './components/PurchasedItems'
import { BASE_URL } from './Globals'




const App = () => {

  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const [items, setItems] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
 
  const [listings, setListings] = useState([])
  const [listingToEdit, setListingToEdit] = useState(null);
  const [purchasedItems, setPurchasedItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [sold, setSold] = useState(false)

  
  const navigate = useNavigate()
  

  useEffect(() => {
    fetch(BASE_URL + "/me", {
      credentials: "include",
    })
    .then((res) => {
      if (res.ok) {
        res.json().then((user) =>{ 
          setCurrentUser(user)
          setAuthenticated(true)
          setFavorites(user.items)
        });
      } else {
        setAuthenticated(true)
      }
    });

    fetch(BASE_URL + "/items")
    .then((resp) => resp.json())
    .then((data) => {
        setItems(data)
        setItemList(data)
    })
 }, []);

 
const searchItems = term => {
  fetch(BASE_URL + "/items?search=" + term)
  .then(resp => resp.json())
  .then(data => setItemList(data))
}

const filterItems = filter => {
  if (filter === "") {
      setItemList(items)
  } else {
      fetch( BASE_URL + "/items?filter=" + filter)
      .then(resp => resp.json())
      .then(data => setItemList(data))
   }
}


const backToItems = () => {
  navigate("/items")
}

  
  const onBuyItem = (item) => {
    fetch(`${BASE_URL}/items/${item.id}/sold`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({sold: true})
    })
    .then(resp => resp.json())
    .then(itemSold => {
       setSelectedItem(itemSold)
       setSold(true)
       const updatedItemsAfterSell = items.filter(item => item.sold !== true)
       setItems(updatedItemsAfterSell)
       setItemList(updatedItemsAfterSell)
       
    })
  }
  
  

  const addItem = (listing) => {
     setItems([...items, listing])
     setItemList([...itemList, listing])
  }
const fetchListings = () => {
  fetch(BASE_URL + "/listings")
        .then((resp) => resp.json())
        .then((data) => setListings(data))
}
  const startEditing = (listing) => {
    setListingToEdit(listing)
  }

  const handleUpdateListing = (updatedListing) => {
      const updatedListings = items.map(originalItem => {
        if (originalItem.id === updatedListing.id) {
          return updatedListing;
        } else {
          return originalItem
        }
      })
      setItems(updatedListings)
      setItemList(updatedListings)
  }

  const handleDeleteListing = (id) => {
    const updatedListings = items.filter(item => item.id !== id)
    setItems(updatedListings)
    setItemList(updatedListings)
    navigate("/items")
  }

  const fetchPurchasedItems = () => {
    fetch(BASE_URL + "/purchased_items")
    .then(resp => resp.json())
    .then(data => setPurchasedItems(data))
  }

  const addFavorite = (item) => {
    const newFavorite = {
      favorite: {
        item_id: item.id, user_id: currentUser.id
      }
    }
    fetch(BASE_URL + "/favorite_items", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFavorite),
    })
    .then(resp => {
      if (resp.ok) {
        return resp.json()
      } else {
        return resp.json().then(errors => Promise.reject(errors))
      }
    })
    .then((newFav) => {
      setFavorites([...favorites, newFav])
      navigate("/items")
     })
  }

  const removeFavorite = (item) => {
    const foundFavorite = favorites.find((fav) => fav.id === item.id)
    
   return  fetch(`${BASE_URL}/favorite_items/${foundFavorite.id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => {
      const filteredFavorites = favorites.filter((fav) => fav.id !== foundFavorite.id)
        setFavorites(filteredFavorites)
    })
  }
  
   return (
      
<>
          <Navbar 
          auth={authenticated}
          setAuth={setAuthenticated}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          onBuyItem={onBuyItem}
           />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/items/:id" element={<ItemDetails
                                                                      selectedItem={selectedItem}
                                                                      setSelectedItem={setSelectedItem}
                                                                      backToItems={backToItems}
                                                                      onBuyItem={onBuyItem}
                                                                      addFavorite={addFavorite}
                                                                      removeFavorite={removeFavorite}
                                                                     currentUser={currentUser}
                                                                      />
                                                                      } />
          <Route path="/items" element={<ItemsContainer 
                                                                  items={items}
                                                                  itemList={itemList}
                                                                  searchItems={searchItems}
                                                                  filterItems={filterItems}
                                                                  removeFavorite={removeFavorite}
                                                                  currentUser={currentUser}
                                                                 />
                                                                }/>
          
          
          <Route path="/signup" element={<SignupForm 
                                                                   setCurrentUser={setCurrentUser}  
                                                                   setAuthenticated={setAuthenticated}
                                                                   setFavorites={setFavorites}
                                                                   />} />
          <Route path="/login" element={<LoginForm 
                                                                    setCurrentUser={setCurrentUser}
                                                                    setAuthenticated={setAuthenticated}
                                                                    setFavorites={setFavorites}
                                                                     />}
                                                                     />

         <Route 
            path="/favorites" 
            element={!authenticated ? <h2>Loading...</h2> : <FavoritesContainer  
            favorites={favorites} 
            removeFavorite={removeFavorite}
          /> }
          />
        
        <Route
            path="/listings"
            element={!authenticated ? <h2>Loading...</h2> : <Listings 
            listings={listings}
            fetchListings={fetchListings}
            
            startEditing={startEditing}
            handleDeleteListing={handleDeleteListing} />}
        />

        <Route 
             path="/purchased_items"
             element={!authenticated ? <h2>Loading...</h2> : <PurchasedItems
             purchasedItems={purchasedItems}
             fetchPurchasedItems={fetchPurchasedItems}
         />}
        />
        <Route
         path="/items/:id/edit"
          element={!authenticated ? (<h2>Loading...</h2> 
          ) : (
          <EditItemForm 
              items={items} 
              listings={listings}
              listingToEdit={listingToEdit} 
              handleUpdateListing={handleUpdateListing} 
              />)} 
          />

         <Route path="/items/new" element={!authenticated ? <h2>Loading...</h2> : <SellItemForm addItem={addItem} /> } />

          <Route path="/account" element={!authenticated ? <h2>Loading...</h2> : <Account />} />

         </Routes>
         <Footer />
     </>
    )

   
}

export default App