import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {userRows} from "../../dummyData"
import { Link } from "react-router-dom";
import { useState } from "react";



export default function UserList() {
    const [data,setData] =useState(userRows);

    const handleDelete = (id)=>{

        setData(data.filter(item=>item.id !== id))
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200, renderCell:(params)=>{
            return(
                <div className="userListUser">
                    <img  className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 90,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 160,
          sortable:true,
         
        },

        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/user/"+params.row.id}>
                    <button className="userListEdit">Edit</button>
                    </Link>
                
                    <DeleteOutlineOutlinedIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>

                    </>
                )
            }
                    
                    
        },
          
      ];
      
      


  return (
    <div className="userList">
        <div style={{ height: 700, width: '100%' }}>
      <DataGrid 
      disableRowSelectionOnClick
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10},
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
  )
}
