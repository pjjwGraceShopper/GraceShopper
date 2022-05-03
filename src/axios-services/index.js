import axios from 'axios';
import {getUserCart, addItemToCart, deleteItemFromCart, clearCart, createUserCart, getUserCartIdxList, getUserCartSubTotal} from './Cart_ajax'
import {getUsers, registerUser, userLogin} from './users_ajax'
import { getLibrary, addMovie, updateMovie } from "./lib_ajax";
import { getMyLibrary, createUserLibrary, addToUserLibrary} from "./myLibrary_ajax"

// this file holds your frontend network request adapters
// think about each function as a service that provides data
// to your React UI through AJAX calls

// for example, if we need to display a list of users
// we'd probably want to define a getUsers service like this:

/* 
  export async function getUsers() {
    try {
      const { data: users } = await axios.get('/api/users')
      return users;
    } catch(err) {
      console.error(err)
    }
  }
*/

export async function getAPIHealth() {
  try {
    const { data } = await axios.get("/api/health");
    return data;
  } 
  catch (err) {
    console.error(err);
    return { healthy: false };
  }
}

export {
  getUserCart,
  getUserCartIdxList,
  addItemToCart,
  deleteItemFromCart,
  clearCart,
  createUserCart,
  registerUser,
  userLogin,
  getLibrary,
  getUserCartSubTotal,
  getMyLibrary,
  getUsers,
  createUserLibrary,
  addToUserLibrary, 
  addMovie,
  updateMovie
};

