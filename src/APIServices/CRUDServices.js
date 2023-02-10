import axios from "axios";

// Create
export function Create(ProductName,ProductCode,ProductImage,UnitPrice,Quantity,TotalPrice){
    let URL = "/api/v1/CreateProduct";
    let PostBody = {
        ProductName: ProductName,
        ProductCode: ProductCode,
        ProductImage: ProductImage,
        UnitPrice: UnitPrice,
        Quantity: Quantity,
        TotalPrice: TotalPrice
    }

    return axios.post(URL,PostBody).then((res)=>{
        if (res.status===200) {
            return true;
        } else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

// Read

export function Read(){
    let URL = "/api/v1/ReadProduct";
    return axios.get(URL).then((res)=>{
        if (res.status===200) {
            return res.data['data'];
        } else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

export function ReadByID(id){
    let URL = "/api/v1/ReadProductByID/"+id;
    return axios.get(URL).then((res)=>{
        if (res.status===200) {
            return res.data['data'];
        } else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

// Update

export function Update(id,ProductName,ProductCode,ProductImage,UnitPrice,Quantity,TotalPrice){
    let URL = "/api/v1/UpdateProduct/"+id;
    let PostBody = {
        ProductName: ProductName,
        ProductCode: ProductCode,
        ProductImage: ProductImage,
        UnitPrice: UnitPrice,
        Quantity: Quantity,
        TotalPrice: TotalPrice
    }
    return axios.post(URL,PostBody).then((res)=>{
        if (res.status===200) {
            return true;
        } else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

// Delete

export function Delete(id){
    let URL = "/api/v1/DeleteProduct/"+id;
    return axios.get(URL).then((res)=>{
        if (res.status===200) {
            return true;
        } else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}