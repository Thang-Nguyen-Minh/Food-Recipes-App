import React from 'react'
import {Link, useLoaderData} from "react-router-dom";
import foodRecipe from '../assets/foodRecipe.jpg'
import {BsStopwatchFill} from "react-icons/bs";
import {FaHeart} from "react-icons/fa";
import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
export default function RecipeItems() {
    const allRecipes = useLoaderData();
    let path = window.location.pathname==="/myRecipe" ? true : false;
    return (
        <div className='card-container'>
            {
                allRecipes?.map((item, index) => {
                    return(
                        <div key={index} className='card'>
                            <img src={`http://localhost:5000/images/${item.coverImage}`} alt="" width="120px" height="100px"/>
                            <div className="card-body">
                                <div className="title">{item.title}</div>
                            </div>
                            <div className='icons'>
                                <div className='timer'><BsStopwatchFill/>30min</div>
                                {(!path) ? <FaHeart /> :
                                <div className='action'>
                                    <Link
                                        to={`/editRecipe/${item._id}`}
                                        className="editIcon"
                                    >
                                        <FaEdit/>
                                    </Link>
                                    <MdDelete className="deleteIcon"/>
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