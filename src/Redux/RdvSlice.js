import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios"
import {  toast } from 'react-toastify';
const initialState = {
    
    userRDV: [],
    rdvOne:[],
  validate: false,
    loading: false,
    errors: []
};
// cree des rdv
export const registreRDV = createAsyncThunk('rdv/createAppoinment', async (data, {rejectWithValue}) => {
    
    
    const Config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.post("api/appoinment/createAppoinment", data, Config)
        return res.data
        
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})
//get rdv pour chaque doc:
export const getRDVDoc = createAsyncThunk("/rdv/getrdvDoc", async (data,{rejectWithValue}) => {   
    console.log(data,"data")
    try {
        const Config={
            headers:{
                authorization:localStorage.getItem('token')
            }
        }
        const res = await axios.get(`/api/appoinment/getDocApponment/${data}`,Config)
     
        return res.data
      
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})
// get les rdv deja reservé

export const getRDVDocreseve = createAsyncThunk("rdv/getrdvDocrv", async (id,{rejectWithValue}) => {
    console.log(id )
       
        const Config={
            headers:{
                authorization:localStorage.getItem('token')
            }
        }
    
        try {
            const res = await axios.get(`api/appoinment/getdocarespoinment/${id}`,Config)
         
            return res.data
          
        } catch (error) {
            return rejectWithValue(error.response.data.errors)
        }
    })
    // get rdv selon email Pa
export const getEmailRDV = createAsyncThunk("appoinment/emailAppoinment", async (email, {rejectWithValue}) => {
    try {
        const Config={
            headers:{
                authorization:localStorage.getItem('token')
            }
            
        }
        console.log(email,"sonyyyyyy")
       const res= await axios.get(`api/appoinment/getAppoinmentParEmail/${email}`,Config)
       
        return res.data
        
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})


// update appoinment 
export const updateAppoinment = createAsyncThunk("rdv/updateAppoinment", async (res,{rejectWithValue}) => {
   console.log(res.data,"ddddd")
   
            try {
                const Config={
                    headers:{
                        authorization:localStorage.getItem('token')
                    }
                }
          
             await  axios.put(`api/appoinment/updateAppoinment/${res.id}`,res.data ,Config)
         
            return res.data
           
        } catch (error) {
            console.log(error,"dkdkdkd")
            return rejectWithValue(error.response.data.errors)
          
        }
    })
 // update la valeur de emailPa en valeur de l"email de user
 export const updateemailPa = createAsyncThunk("rdv/updateEmailPa", async (res,{rejectWithValue}) => {
    console.log(res, 'sonia abbes' )
       
        
    
        try {
            const Config={
                headers:{
                    authorization:localStorage.getItem('token')
                }
            }
             await  axios.put(`api/appoinment/updateemailPa/${res.id}`,res.data,Config)
         
            return res.data
           
        } catch (error) {
            console.log(error,"dkdkdkd")
            return rejectWithValue(error.response.data.errors)
          
        }
    })
//update valide en false
export const updateValideT = createAsyncThunk("/appoinment/valideT", async(id,data,{rejectWithValue}) => {
  
    try {
        const res = await axios.post(`api/appoinment/updateValide/${id}`, data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})
//update valide en true
export const updateValideF = createAsyncThunk("/appoinment/valideF", async(id,data,{rejectWithValue}) => {
  
    try {
        const res = await axios.post(`api/appoinment/updateValidetr/${id}`, data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})
// delete rdv
export const deleteRdv= createAsyncThunk("profile/deletetUser", async (id, {rejectWithValue}) => {
   
    

    try {
        const res = await axios.delete(`api/appoinment/deleteApponment/${id}`)
     
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})
 // get one rdv
 export const getOneRdv = createAsyncThunk("rdv/getOnerdv", async (id ,{rejectWithValue}) => {

    
    
   
    try {
        const res = await axios.get(`api/appoinment/RdvOne/${id}`)
     
        return res.data
      
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
 
})

// find appoinment for each email

export const rdvSlice = createSlice({
    name: 'RDV',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        // create Rdv
        .addCase(registreRDV.pending, (state, {payload}) => {
            state.loading = true
            state.validate=false
        

        }).addCase(registreRDV.fulfilled, (state, {payload}) => {
            state.userRDV = payload.appoinment
          
           state.loading = false
           state.validate=true
           toast.success ('le RDV est crée avec succés')
        
         
        }).addCase(registreRDV.rejected, (state, {payload}) => {
         
         
            state.loading = false
            state.errors= payload
          
        })
       
        // get rdv pour chaque doc

        .addCase(getRDVDoc.pending, (state, {payload}) => {
            state.loading = true
            state.auth= false
        }).addCase(getRDVDoc.fulfilled, (state, {payload}) => {
           
           state.loading = false
          state.validate= true
          state.userRDV= payload
        //    toast.success(payload.msg)
           
        }).addCase(getRDVDoc.rejected, (state, {payload}) => {
         
          
            state.validate= false
            state.auth = false
            state.errors= payload
          
        })
        // get les rdv deja reservé
        .addCase(getRDVDocreseve.pending, (state, {payload}) => {
            state.loading = true
            state.auth= false
        }).addCase(getRDVDocreseve.fulfilled, (state, {payload}) => {
           
           state.loading = false
          state.validate= true
          state.userRDV= payload
        //    toast.success(payload.msg)
           
        }).addCase(getRDVDocreseve.rejected, (state, {payload}) => {
         
          
            state.validate= false
            state.auth = false
            state.errors= payload
          
        })
        // get rdv selon email
        .addCase(getEmailRDV.pending, (state, {payload}) => {
            state.loading = true
          
            
        }).addCase(getEmailRDV.fulfilled, (state, {payload}) => {
          state.userRDV=payload
           state.loading = false
        
       
        }).addCase(getEmailRDV.rejected, (state, {payload}) => {
         
          
            state.loading = false
            state.errors= payload

    })

    // update la valeur de emailPa en valeur de l"email de user
    .addCase(updateemailPa.pending, (state, {payload}) => {
        state.loading = true
        state.auth = false 
        
    }).addCase(updateemailPa.fulfilled, (state, {payload}) => {
        state.userRDV= payload
       state.loading = false
       toast.success(payload.msg);
   
    }).addCase(updateemailPa.rejected, (state, {payload}) => {
     
      state.auth= false
        state.loading = false
        state.errors= payload

})
// update appoinment :
.addCase(updateAppoinment.pending, (state, {payload}) => {
    state.loading = true
    state.auth = false 
    
}).addCase(updateAppoinment.fulfilled, (state, {payload}) => {
    state.userOne= payload
   state.loading = false
//    toast.success(payload.msg);

}).addCase(updateAppoinment.rejected, (state, {payload}) => {
 
  state.auth= false
    state.loading = false
    state.errors= payload

})
    //update valide en false
    .addCase(updateValideT.pending, (state, {payload}) => {
        state.loading = true
        state.auth = false 
        
    }).addCase(updateValideT.fulfilled, (state, {payload}) => {
        const id= payload
      state.auth= true
       state.loading = false
    
       if (id){state.userRDV= state.userRDV.map((Appoinments)=>Appoinments._id===id?payload:Appoinments)}
    }).addCase(updateValideT.rejected, (state, {payload}) => {
     
      state.auth= false
        state.loading = false
        state.errors= payload

})
// update valide en true
.addCase(updateValideF.pending, (state, {payload}) => {
    state.loading = true
    state.auth = false 
    
}).addCase(updateValideF.fulfilled, (state, {payload}) => {
    const id= payload
  state.auth= true
   state.loading = false

   if (id){state.userRDV= state.userRDV.map((Appoinments)=>Appoinments._id===id?payload:Appoinments)}
}).addCase(updateValideF.rejected, (state, {payload}) => {
 
  state.auth= false
    state.loading = false
    state.errors= payload

})
  // delete rdv
  .addCase(deleteRdv.pending, (state, {payload}) => {
    state.loading = true
   

}).addCase(deleteRdv.fulfilled, (state, {payload}) => {
const id= payload
   state.loading = false

//    toast.success ('le RDV est supprimé avec succés')
 if (id){state.userRDV= state.userRDV.rdv.filter((rdv)=>rdv._id===id)}
}).addCase(deleteRdv.rejected, (state, {payload}) => {
 
 
    state.loading = false
    state.errors= payload

})
// get one rdv
.addCase(getOneRdv.pending, (state, {payload}) => {
    state.loading = true
    
}).addCase(getOneRdv.fulfilled, (state, {payload}) => {
   
   state.loading = false
   state.rdvOne = payload.oneAppoinment

   toast.success(payload.msg)
   
}).addCase(getOneRdv.rejected, (state, {payload}) => {
 
  
    state.loading = false

    state.errors= payload
  
})

    }
})

export default rdvSlice.reducer