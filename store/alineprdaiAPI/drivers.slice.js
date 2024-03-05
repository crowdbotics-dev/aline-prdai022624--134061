import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_driver_list = createAsyncThunk(
  "drivers/api_v1_driver_list",
  async payload => {
    const response = await apiService.api_v1_driver_list(payload)
    return response.data
  }
)
export const api_v1_driver_create = createAsyncThunk(
  "drivers/api_v1_driver_create",
  async payload => {
    const response = await apiService.api_v1_driver_create(payload)
    return response.data
  }
)
export const api_v1_driver_retrieve = createAsyncThunk(
  "drivers/api_v1_driver_retrieve",
  async payload => {
    const response = await apiService.api_v1_driver_retrieve(payload)
    return response.data
  }
)
export const api_v1_driver_update = createAsyncThunk(
  "drivers/api_v1_driver_update",
  async payload => {
    const response = await apiService.api_v1_driver_update(payload)
    return response.data
  }
)
export const api_v1_driver_partial_update = createAsyncThunk(
  "drivers/api_v1_driver_partial_update",
  async payload => {
    const response = await apiService.api_v1_driver_partial_update(payload)
    return response.data
  }
)
export const api_v1_driver_destroy = createAsyncThunk(
  "drivers/api_v1_driver_destroy",
  async payload => {
    const response = await apiService.api_v1_driver_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const driversSlice = createSlice({
  name: "drivers",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_driver_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_driver_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driver_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driver_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_driver_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driver_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driver_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_driver_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driver_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driver_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_driver_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driver_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driver_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_driver_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driver_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driver_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_driver_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driver_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_driver_list,
  api_v1_driver_create,
  api_v1_driver_retrieve,
  api_v1_driver_update,
  api_v1_driver_partial_update,
  api_v1_driver_destroy,
  slice: driversSlice
}
