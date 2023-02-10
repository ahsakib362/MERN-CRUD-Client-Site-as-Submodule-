import React, { useEffect, useState } from 'react';
import { Delete, Read } from '../../APIServices/CRUDServices';
import FullScreenLoader from '../Common/FullScreenLoader';
import "../../Assets/css/style.css";
import { SuccessToast,ErrorToast } from '../../helper/ValidationHelper';
import { withRouter } from 'react-router';


const ListTable =(props)=> {

  let [DataList,SetDataList] = useState([]);

  useEffect(()=>{
    Read().then((Result)=>{
      SetDataList(Result);
    })
  },[]);

  const UpdateItem = (id)=>{
    props.history.push("/UpdateProduct/"+id);
  }

  const DeleteItem = (id)=>{
    Delete(id).then((Result)=>{
      if(Result===true){
        SuccessToast("Deleted Successfully");
        props.history.push("/");
      }
      else{
        ErrorToast("Request Failed.Try Again...");
      }
    })
  }

  if(DataList.length>0){
    return(
      <div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Product Image</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              DataList.map((item,i)=>{
                return(
                  <tr>
                    <td>{item.ProductName}</td>
                    <td>{item.ProductCode}</td>
                    <td><img className='list-img' src={item.ProductImage}/></td>
                    <td>{item.UnitPrice}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.TotalPrice}</td>
                    <td>
                      <button onClick={UpdateItem.bind(this,item._id)} className='btn btn-primary w-30'>Update</button>
                      <button onClick={DeleteItem.bind(this,item._id)} className='btn btn-danger w-30 mx-1'>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )  
  }
  else{
    return (
      <div>
        <FullScreenLoader/>
      </div>
    ) 
  }

  
}

export default withRouter(ListTable);