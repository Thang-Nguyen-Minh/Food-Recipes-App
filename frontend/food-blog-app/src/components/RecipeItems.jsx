import React, {useEffect, useState} from 'react'
import {Link, useLoaderData} from "react-router-dom";
import foodRecipe from '../assets/foodRecipe.jpg'
import {BsStopwatchFill} from "react-icons/bs";
import {FaHeart} from "react-icons/fa";
import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import axios from "axios";
export default function RecipeItems() {
    const recipes = useLoaderData();
    let path = window.location.pathname==="/myRecipe" ? true : false;
    const [allRecipes, setAllRecipes] = useState();
    console.log(allRecipes)
    useEffect(()=>{
        setAllRecipes(recipes)
    },[recipes])
    const onDelete = async (id) => {
        console.log(id);
        await axios.delete(`http://localhost:5000/recipe/${id}`)
            .then(res => {
                console.log(res)
            })
        setAllRecipes(recipes=>recipes.filter(recipe=>recipe.id !== id))
    }
    return (
        <div className='card-container'>
            {
                recipes?.map((item, index) => {
                    return(
                        <div key={index} className='card'>
                            <img src={`http://localhost:5000/images/${item.coverImage}`} alt="" width="120px" height="100px"/>
                            <div className="card-body">
                                <div className="title">{item.title}</div>
                            </div>
                            <div className='icons'>
                                <div className='timer'><BsStopwatchFill/>{item.time}</div>
                                {(!path) ? <FaHeart /> :
                                <div className='action'>
                                    <Link
                                        to={`/editRecipe/${item._id}`}
                                        className="editIcon"
                                    >
                                        <FaEdit/>
                                    </Link>
                                    <MdDelete className="deleteIcon"
                                    onClick={() => onDelete(item._id)}
                                    />
                                </div>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}