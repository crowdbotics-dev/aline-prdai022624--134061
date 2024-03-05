import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_customer_list = createAsyncThunk(
  "customers/api_v1_customer_list",
  async payload => {
    const response = await apiService.api_v1_customer_list(payload)
    return response.data
  }
)
export const api_v1_customer_create = createAsyncThunk(
  "customers/api_v1_customer_create",
  async payload => {
    const response = await apiService.api_v1_customer_create(payload)
    return response.data
  }
)
export const api_v1_customer_retrieve = createAsyncThunk(
  "customers/api_v1_customer_retrieve",
  async payload => {
    const response = await apiService.api_v1_customer_retrieve(payload)
    return response.data
  }
)
export const api_v1_customer_update = createAsyncThunk(
  "customers/api_v1_customer_update",
  async payload => {
    const response = await apiService.api_v1_customer_update(payload)
    return response.data
  }
)
export const api_v1_customer_partial_update = createAsyncThunk(
  "customers/api_v1_customer_partial_update",
  async payload => {
    const response = await apiService.api_v1_customer_partial_update(payload)
    return response.data
  }
)
export const api_v1_customer_destroy = createAsyncThunk(
  "customers/api_v1_customer_destroy",
  async payload => {
    const response = await apiService.api_v1_customer_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_customer_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customer_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customer_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customer_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customer_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customer_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customer_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customer_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customer_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customer_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customer_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customer_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customer_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customer_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customer_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customer_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customer_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customer_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_customer_list,
  api_v1_customer_create,
  api_v1_customer_retrieve,
  api_v1_customer_update,
  api_v1_customer_partial_update,
  api_v1_customer_destroy,
  slice: customersSlice
}
