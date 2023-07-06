import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios"
import {  toast } from 'react-toastify';
const initialState = {
    
    userProduct: [],
    productOne:[],

    loading: false,
    errors: []
};
// create new product 
export const registreProduct= createAsyncThunk('product/createProduct', async (data, {rejectWithValue}) => {
    
    
    const Config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.post("api/product/createProduct", data, Config)
        return res.data
        
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})
// get all products
export const getallProduct = createAsyncThunk(
    'product/getAllProduct',
    async (data, { rejectWithValue }) => {
        console.log(data, )
      try {
        const response = await axios.get(`api/product/getAllProducts`, data);
        return response.data
      } catch (error) { console.log(error,"error")
        return rejectWithValue(error.response.data.errors);
      }
    }
  );
  // delete product
  export const deleteProduct = createAsyncThunk("product/deletetProduct", async (id, {rejectWithValue}) => {
   
    

    try {
        const res = await axios.delete(`api/product/deleteProduct/${id}`)
     
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})
// get product for user
export const getProductUser = createAsyncThunk("/Product/getProductUser", async (data,{rejectWithValue}) => {   
    console.log(data,"data")
    try {
        const Config={
            headers:{
                authorization:localStorage.getItem('token')
            }
        }
        const res = await axios.get(`/api/product/getPrductUser/${data}`,Config)
     
        return res.data
      
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})
// update product:
export const updateProduct= createAsyncThunk("Product/updateProduct", async (res,{rejectWithValue}) => {
    console.log(res.data,"ddddd")
    
             try {
                 const Config={
                     headers:{
                         authorization:localStorage.getItem('token')
                     }
                 }
           
              await  axios.put(`api/product/updatePrduct/${res.id}`,res.data ,Config)
          
             return res.data
            
         } catch (error) {
             console.log(error,"dkdkdkd")
             return rejectWithValue(error.response.data.errors)
           
         }
     })
     // get one product
     export const getOneProduct = createAsyncThunk("product/getOneProduct", async (id ,{rejectWithValue}) => {

    
    
   
        try {
            const res = await axios.get(`api/product/getOneProduct/${id}`)
         
            return res.data
          
        } catch (error) {
            return rejectWithValue(error.response.data.errors)
        }
     
    })

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers(builder) {
             builder
             // create new product
             .addCase(registreProduct.pending, (state, {payload}) => {
                state.loading = true
                
            
    
            }).addCase(registreProduct.fulfilled, (state, {payload}) => {
                state.userProduct = payload.product
              
               state.loading = false
             
               toast.success ('le produit est créé avec succés')
            
             
            }).addCase(registreProduct.rejected, (state, {payload}) => {
             
             
                state.loading = false
                state.errors= payload
              
            })
            // get all products
            .addCase(getallProduct.pending,(state, {payload}) => {
                state.loading = true
                
            
    
            }).addCase(getallProduct.fulfilled,(state, {payload}) => {
             state.userProduct = payload.Product
              
               state.loading = false
             
               toast.success ('voici nos produits')
            
             
            }).addCase(getallProduct.rejected, (state, {payload}) => {
             
             
                state.loading = false
                state.errors= payload
            
            })
 // delete product
 
  .addCase(deleteProduct.pending, (state, {payload}) => {
    state.loading = true
   

}).addCase(deleteProduct.fulfilled, (state, {payload}) => {
const id= payload
   state.loading = false

   toast.success ('le produt est supprimé avec succés')
 if (id){state.userProduct= state.userProduct.product.filter((product)=>product._id===id)}
}).addCase(deleteProduct.rejected, (state, {payload}) => {
 
 
    state.loading = false
    state.errors= payload

})
// get product user
.addCase(getProductUser.pending, (state, {payload}) => {
    state.loading = true
   
}).addCase(getProductUser.fulfilled, (state, {payload}) => {
   

  state.userProduct= payload
//    toast.success(payload.msg)
   
}).addCase(getProductUser.rejected, (state, {payload}) => {
 state.errors= payload
 
})
// update Product
.addCase(updateProduct.pending, (state, {payload}) => {
    state.loading = true
 
    
}).addCase(updateProduct.fulfilled, (state, {payload}) => {
    state.productOne= payload
   state.loading = false
//    toast.success(payload.msg);

}).addCase(updateProduct.rejected, (state, {payload}) => {
 
     state.loading = false
    state.errors= payload

})
// get one product 

.addCase(getOneProduct.pending, (state, {payload}) => {
    state.loading = true
    
}).addCase(getOneProduct.fulfilled, (state, {payload}) => {
   
   state.loading = false
   state.productOne = payload.product

   toast.success(payload.msg)
   
}).addCase(getOneProduct.rejected, (state, {payload}) => {
 
  
    state.loading = false

    state.errors= payload
  
})

    }




})



    export default ProductSlice.reducer
    