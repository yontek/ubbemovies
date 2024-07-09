import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {productRows} from "../../dummyData"
import {Link } from "react-router-dom";
import { useState , useContext, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import {MovieContext} from "../../context/movieContext/MovieContext"
import{getMovies} from "../../context/movieContext/apiCalls"





export default function ProductList() {
  
   const {movies,dispatch} = useContext (MovieContext);

   useEffect(() =>{
    getMovies(dispatch);
   },[dispatch])


console.log(movies)

   

    

    const columns = [
       { field: '_id', headerName: 'ID', width: 70 },

      { field: 'movies', headerName: 'Movies',width: 200, renderCell:(params)=>{
          return(
              <div className="productListItem">
                  <img  className="productListImg" src={params.row.img} alt="" />
                  {params.row.title}
              </div>
          )
      } },
      { field: "genre", headerName: "Genre", width: 120 },
      { field: "year", headerName: "year", width: 120 },
      { field: "limit", headerName: "limit", width: 120 },
      { field: "isSeries", headerName: "isSeries", width: 120 },
  
     
      {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params)=>{
              return(
                  <>
                  <Link to={"/products/"+params.row.id}>
                  <button className="productListEdit">Edit</button>
                  </Link>
              
                  <DeleteOutlineOutlinedIcon className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>

                  </>
              )
          }
                  
                  
      },
        
    ];
    
  
  return (
  <div className="container">
        <DataGrid
        rows={movies}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
  
        />
       </div> 
    
  )
}
