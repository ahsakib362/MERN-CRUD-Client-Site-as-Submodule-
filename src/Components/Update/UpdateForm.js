import React, { useEffect, useRef } from 'react';
import { ReadByID, Update } from '../../APIServices/CRUDServices';
import { ErrorToast, isEmpty, SuccessToast } from '../../helper/ValidationHelper';
import FullScreenLoader from '../Common/FullScreenLoader';
import { withRouter } from 'react-router';


function UpdateForm(props) {

  let ProductName,ProductCode,ProductImage,UnitPrice,Quantity,TotalPrice,Loader = useRef();

  let UpdateData = ()=>{
    let Product_Name = ProductName.value;
    let Product_Code = ProductCode.value;
    let Product_Image = ProductImage.value;
    let Unit_Price = UnitPrice.value;
    let Product_Quantity = Quantity.value;
    let Total_Price = TotalPrice.value;

    if(isEmpty(Product_Name)){
      ErrorToast("Product Name Required");
    }
    else if(isEmpty(Product_Code)){
      ErrorToast("Product Code Required");
    }
    else if(isEmpty(Product_Image)){
      ErrorToast("Product Image Required");
    }
    else if(isEmpty(Unit_Price)){
      ErrorToast("Product Unit Price Required");
    }
    else if(isEmpty(Product_Quantity)){
      ErrorToast("Product Quality Required");
    }
    else if(isEmpty(Total_Price)){
      ErrorToast("Product Total Price Required");
    }
    else{

      Loader.classList.remove("d-none");
      Update(props.id,Product_Name,Product_Code,Product_Image,Unit_Price,Product_Quantity,Total_Price).then((Result)=>{
        if(Result===true){
          Loader.classList.add("d-none");
          SuccessToast("Data Update Successfully");
          props.history.push("/");
        }
        else{
          ErrorToast("Request Failed Try Again");
        }
      })
    }
  }

  useEffect(()=>{
    ReadByID(props.id).then((Result)=>{
      ProductName.value=Result[0]['ProductName'];
      ProductCode.value=Result[0]['ProductCode'];
      ProductImage.value=Result[0]['ProductImage'];
      UnitPrice.value=Result[0]['UnitPrice'];
      Quantity.value=Result[0]['Quantity'];
      TotalPrice.value=Result[0]['TotalPrice'];
    })
  },[]);

  return (
    <div class="container">
     <div className='row'>
      <div className='col-md-4 p-2'>
        <label for="">Product Name</label>
        <input ref={(input)=>ProductName=input } type="text" className='form-control'/>
      </div>
      <div className='col-md-4 p-2'>
        <label for="">Product Code</label>
        <input ref={(input)=>ProductCode=input } type="text" className='form-control'/>
      </div>
      <div className='col-md-4 p-2'>
        <label for="">Product Image</label>
        <input ref={(input)=>ProductImage=input } type="text" className='form-control'/>
      </div>
      <div className='col-md-4 p-2'>
        <label for="">Unit Price</label>
        <input ref={(input)=>UnitPrice=input } type="text" className='form-control'/>
      </div>
      <div className='col-md-4 p-2'>
        <label for="">Quantity</label>
        <input ref={(input)=>Quantity=input } type="text" className='form-control'/>
      </div>
      <div className='col-md-4 p-2'>
        <label for="">Total Price</label>
        <input ref={(input)=>TotalPrice=input } type="text" className='form-control'/>
      </div>
     </div>
     <div className='row'>
      <div className='col-md-4 p-2'>
        <button onClick={UpdateData} className='btn btn-primary w-100'>Update</button>
      </div>
     </div>
     <div className='d-none' ref={(div)=>Loader=div }>
      <FullScreenLoader/>
     </div>
    
    </div>
  )
}

export default withRouter(UpdateForm);