import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_payment_list = createAsyncThunk(
  "payments/api_v1_payment_list",
  async payload => {
    const response = await apiService.api_v1_payment_list(payload)
    return response.data
  }
)
export const api_v1_payment_create = createAsyncThunk(
  "payments/api_v1_payment_create",
  async payload => {
    const response = await apiService.api_v1_payment_create(payload)
    return response.data
  }
)
export const api_v1_payment_retrieve = createAsyncThunk(
  "payments/api_v1_payment_retrieve",
  async payload => {
    const response = await apiService.api_v1_payment_retrieve(payload)
    return response.data
  }
)
export const api_v1_payment_update = createAsyncThunk(
  "payments/api_v1_payment_update",
  async payload => {
    const response = await apiService.api_v1_payment_update(payload)
    return response.data
  }
)
export const api_v1_payment_partial_update = createAsyncThunk(
  "payments/api_v1_payment_partial_update",
  async payload => {
    const response = await apiService.api_v1_payment_partial_update(payload)
    return response.data
  }
)
export const api_v1_payment_destroy = createAsyncThunk(
  "payments/api_v1_payment_destroy",
  async payload => {
    const response = await apiService.api_v1_payment_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const paymentsSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_payment_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_payment_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_payment_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_payment_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_payment_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_payment_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_payment_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_payment_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_payment_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_payment_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_payment_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_payment_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_payment_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_payment_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_payment_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_payment_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_payment_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_payment_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_payment_list,
  api_v1_payment_create,
  api_v1_payment_retrieve,
  api_v1_payment_update,
  api_v1_payment_partial_update,
  api_v1_payment_destroy,
  slice: paymentsSlice
}
