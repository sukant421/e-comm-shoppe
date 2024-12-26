import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from './categorySlice';

export default function CategoryTabs() {

  const selectedCategory = useSelector((state)=>state.category.value)
  const dispatch = useDispatch();

  return (
    <div className='d-flex-center'>
        <div className={`cat-btn ${selectedCategory === "men" ? "cat-active" : ""}`} role='button' onClick={()=>dispatch(changeCategory("men"))}>Men</div>
        <div className={`cat-btn ${selectedCategory === "women" ? "cat-active" : ""}`} role='button' onClick={()=>dispatch(changeCategory("women"))}>Women</div>
        <div className={`cat-btn ${selectedCategory === "kids" ? "cat-active" : ""}`} role='button' onClick={()=>dispatch(changeCategory("kids"))}>Kids</div>
        <div className={`cat-btn ${selectedCategory === "beauty" ? "cat-active" : ""}`} role='button' onClick={()=>dispatch(changeCategory("beauty"))}>Beauty</div>
    </div>
  )
}
