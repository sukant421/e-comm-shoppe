import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from './categorySlice';
import { useNavigate } from 'react-router-dom';

export default function CategoryTabs() {

  const selectedCategory = useSelector((state)=>state.category.value)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='d-flex-center'>
        <div className={`cat-btn ${selectedCategory === "men" ? "cat-active" : ""}`} role='button' onClick={()=>dispatch(changeCategory("men"))}>MEN</div>
        <div className={`cat-btn ${selectedCategory === "women" ? "cat-active" : ""}`} role='button' onClick={()=>dispatch(changeCategory("women"))}>WOMEN</div>
        <div className={`cat-btn ${selectedCategory === "kids" ? "cat-active" : ""}`} role='button' onClick={()=>dispatch(changeCategory("kids"))}>KIDS</div>
        <div className={`cat-btn ${selectedCategory === "beauty" ? "cat-active" : ""}`} role='button' onClick={()=>dispatch(changeCategory("beauty"))}>BEAUTY</div>
    </div>
  )
}
