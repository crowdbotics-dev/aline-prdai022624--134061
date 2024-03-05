import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_favorites_list = createAsyncThunk(
  "favorites/api_v1_favorites_list",
  async payload => {
    const response = await apiService.api_v1_favorites_list(payload)
    return response.data
  }
)
export const api_v1_favorites_create = createAsyncThunk(
  "favorites/api_v1_favorites_create",
  async payload => {
    const response = await apiService.api_v1_favorites_create(payload)
    return response.data
  }
)
export const api_v1_favorites_retrieve = createAsyncThunk(
  "favorites/api_v1_favorites_retrieve",
  async payload => {
    const response = await apiService.api_v1_favorites_retrieve(payload)
    return response.data
  }
)
export const api_v1_favorites_update = createAsyncThunk(
  "favorites/api_v1_favorites_update",
  async payload => {
    const response = await apiService.api_v1_favorites_update(payload)
    return response.data
  }
)
export const api_v1_favorites_partial_update = createAsyncThunk(
  "favorites/api_v1_favorites_partial_update",
  async payload => {
    const response = await apiService.api_v1_favorites_partial_update(payload)
    return response.data
  }
)
export const api_v1_favorites_destroy = createAsyncThunk(
  "favorites/api_v1_favorites_destroy",
  async payload => {
    const response = await apiService.api_v1_favorites_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_favorites_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_favorites_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_favorites_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_favorites_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_favorites_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_favorites_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_favorites_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_favorites_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_favorites_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_favorites_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_favorites_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_favorites_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_favorites_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_favorites_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_favorites_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_favorites_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_favorites_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_favorites_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_favorites_list,
  api_v1_favorites_create,
  api_v1_favorites_retrieve,
  api_v1_favorites_update,
  api_v1_favorites_partial_update,
  api_v1_favorites_destroy,
  slice: favoritesSlice
}
