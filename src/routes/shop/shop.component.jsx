import {useEffect} from "react";
import { Routes,Route } from "react-router-dom";
import {useDispatch} from 'react-redux';

import CategoriesPreview from "../categories-preview/categories-preview.component";

import Category from "../category/category.component";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import { setCategories } from "../../store/categories/category.action.js";



const Shop = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {

    const fetchCategoriesFromFirestore = async () => {
        const categoryArray= await getCategoriesAndDocuments();
       
        dispatch(setCategories(categoryArray));
    };

 
}, []);



  return (
   <Routes>

    <Route  index element ={ <CategoriesPreview />} />
    <Route  path = ":category" element ={ <Category />} />
    
   </Routes>
  )
} 

export default Shop;

