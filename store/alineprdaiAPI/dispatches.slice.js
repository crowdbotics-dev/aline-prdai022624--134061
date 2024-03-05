import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_dispatch_list = createAsyncThunk(
  "dispatches/api_v1_dispatch_list",
  async payload => {
    const response = await apiService.api_v1_dispatch_list(payload)
    return response.data
  }
)
export const api_v1_dispatch_create = createAsyncThunk(
  "dispatches/api_v1_dispatch_create",
  async payload => {
    const response = await apiService.api_v1_dispatch_create(payload)
    return response.data
  }
)
export const api_v1_dispatch_retrieve = createAsyncThunk(
  "dispatches/api_v1_dispatch_retrieve",
  async payload => {
    const response = await apiService.api_v1_dispatch_retrieve(payload)
    return response.data
  }
)
export const api_v1_dispatch_update = createAsyncThunk(
  "dispatches/api_v1_dispatch_update",
  async payload => {
    const response = await apiService.api_v1_dispatch_update(payload)
    return response.data
  }
)
export const api_v1_dispatch_partial_update = createAsyncThunk(
  "dispatches/api_v1_dispatch_partial_update",
  async payload => {
    const response = await apiService.api_v1_dispatch_partial_update(payload)
    return response.data
  }
)
export const api_v1_dispatch_destroy = createAsyncThunk(
  "dispatches/api_v1_dispatch_destroy",
  async payload => {
    const response = await apiService.api_v1_dispatch_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dispatchesSlice = createSlice({
  name: "dispatches",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_dispatch_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dispatch_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dispatch_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dispatch_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dispatch_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dispatch_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dispatch_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dispatch_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dispatch_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dispatch_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dispatch_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dispatch_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dispatch_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dispatch_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dispatch_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dispatch_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dispatch_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dispatch_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_dispatch_list,
  api_v1_dispatch_create,
  api_v1_dispatch_retrieve,
  api_v1_dispatch_update,
  api_v1_dispatch_partial_update,
  api_v1_dispatch_destroy,
  slice: dispatchesSlice
}
