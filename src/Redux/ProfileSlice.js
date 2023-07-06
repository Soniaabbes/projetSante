import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {  toast } from 'react-toastify';
import axios from "axios"
const initialState = {
    
    userMed: [],
 userMedOne:[],
  auth: false,
    loading: false,
    errors: [],
    searchname: "",
};
// get touts les médecins
export const getMedecin = createAsyncThunk("profile/alldoctors", async (data, {rejectWithValue}) => {
    try {
        const res = await axios.get("api/user/getusermedcin", data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})
// get tt les commerciales
export const getCommercial= createAsyncThunk("profile/allCommerciale", async (data, {rejectWithValue}) => {
    try {
        const res = await axios.get("api/user/getuserCommerciale", data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})
// get tout les patient:
export const getPatient = createAsyncThunk("profile/allpatient", async (data, {rejectWithValue}) => {
    try {
        const res = await axios.get("api/user/getuserPatient", data)
       
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})




//get all users
export const getAllUser= createAsyncThunk("profile/allUsers", async(data,{rejectWithValue})=>{
    const config={
        headers:{authorization:localStorage.getItem("token")}
      }
    try {
        const res = await axios.get('api/user/getAllUsers',data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})
// delete user 
export const deleteUser = createAsyncThunk("profile/deletetUser", async (id, {rejectWithValue}) => {
   
    

    try {
        const res = await axios.delete(`api/user/deleteUser/${id}`)
     
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})
// get one user
export const getOneUser = createAsyncThunk("profile/getOneUser", async (id ,{rejectWithValue}) => {

    
    

    try {
        const res = await axios.get(`api/user/userOne/${id}`)
     
        return res.data.oneUser
      
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})
// get user by email
export const getParEmail = createAsyncThunk("profile/getUserParEmail", async (email,{rejectWithValue}) => {

    
    

    try {
        const res = await axios.get(`api/user/getParEmail/${email}`)
     
        return res.data.oneUser
      
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})
// get tout les medecins addictocologie:
export const getAddictocologist = createAsyncThunk("profile/addictocologie", async (data, {rejectWithValue}) => {
    try {
        const res = await axios.get("api/user/getAddictocologist", data)
       console.log(data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})
// get les medecins selon specialite
export const getUsersBySpeciality = createAsyncThunk(
    'users/getBySpeciality',
    async (speciality, { rejectWithValue }) => {
      try {
        const response = await axios.get(`api/user/speciality/${speciality}`);
        return response.data.users;
      } catch (error) {
        return rejectWithValue(error.response.data.errors);
      }
    }
  );

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        searchName: (state, { payload }) => {
            state.searchname = payload;
          },
    },
    extraReducers(builder) {
        builder
        // get doctors
        .addCase(getMedecin.pending, (state, {payload}) => {
            state.loading = true
        

        }).addCase(getMedecin.fulfilled, (state, {payload}) => {
            state.userMed = payload.user
           state.loading = false
        
         
        }).addCase(getMedecin.rejected, (state, {payload}) => {
         
         
            state.loading = false
            state.errors= payload
          
        })
       
        // get tout les patients
        .addCase(getPatient.pending, (state, {payload}) => {
            state.loading = true
         

        }).addCase(getPatient.fulfilled, (state, {payload}) => {
            state.userMed = payload.user
           state.loading = false
        
        }).addCase(getPatient.rejected, (state, {payload}) => {
         
          
            state.loading = false
            state.errors= payload
          
        })
        // get tout les commerciales:
        .addCase(getCommercial.pending, (state, {payload}) => {
            state.loading = true
          
        }).addCase(getCommercial.fulfilled, (state, {payload}) => {
            state.userMed = payload.user
           state.loading = false
        
        }).addCase(getCommercial.rejected, (state, {payload}) => {
         
       
            state.loading = false
            state.errors= payload

    })

        // get all users
        .addCase(getAllUser.pending, (state, {payload}) => {
            state.loading = true
            
        }).addCase(getAllUser.fulfilled, (state, {payload}) => {
            state.userMed = payload.user
           state.loading = false
           localStorage.setItem("token", payload.token);
       
        }).addCase(getAllUser.rejected, (state, {payload}) => {
         
          
            state.loading = false
            state.errors= payload

    })

  







    // delete user
    .addCase(deleteUser.pending, (state, {payload}) => {
        state.loading = true
       

    }).addCase(deleteUser.fulfilled, (state, {payload}) => {
  const id= payload
 
       state.loading = false
       if (id){state.userMed= state.userMed.filter((user)=>user._id===id)}
       toast.success ('le profile est supprimé avec succés')
    
    }).addCase(deleteUser.rejected, (state, {payload}) => {
     
     
        state.loading = false
        state.errors= payload
    
})

// get one user

.addCase(getParEmail.pending, (state, {payload}) => {
    state.loading = true
   
}).addCase(getParEmail.fulfilled, (state, {payload}) => {
   
   state.loading = false
state.userMed=payload.oneUser
   toast.success(payload.msg)
   
}).addCase(getParEmail.rejected, (state, {payload}) => {
 
  
    state.loading = false
    state.auth = false
    state.errors= payload
  
})
// get userPar email
.addCase(getOneUser.pending, (state, {payload}) => {
    state.loading = true
    state.auth= false
}).addCase(getOneUser.fulfilled, (state, {payload}) => {
   
   state.loading = false
  state.auth= true
  state.userMedOne= payload
//    toast.success(payload.msg)
   
}).addCase(getOneUser.rejected, (state, {payload}) => {
 
  
    state.loading = false
    state.auth = false
    state.errors= payload
  
})

 // get doctors addictocologist
 .addCase(getAddictocologist.pending, (state, {payload}) => {
    state.loading = true


}).addCase(getAddictocologist.fulfilled, (state, {payload}) => {
    state.userMed= payload.user
   state.loading = false

 
}).addCase(getAddictocologist.rejected, (state, {payload}) => {
 
 
    state.loading = false
    state.errors= payload
  
})
// get user by speciality:
.addCase(getUsersBySpeciality.pending, (state) => {
    state.loading = true;
  
 
  })
  .addCase(getUsersBySpeciality.fulfilled, (state, {payload}) => {
    state.loading = false;
    state.userMed= payload;
   
  })
  .addCase(getUsersBySpeciality.rejected, (state, {payload}) => {
    state.loading = false;
  
    state.errors = payload;
  });

    }
})

export const {searchName}=profileSlice.actions

    export default profileSlice.reducer
    
