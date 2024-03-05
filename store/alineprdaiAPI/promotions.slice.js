import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_promotion_list = createAsyncThunk(
  "promotions/api_v1_promotion_list",
  async payload => {
    const response = await apiService.api_v1_promotion_list(payload)
    return response.data
  }
)
export const api_v1_promotion_create = createAsyncThunk(
  "promotions/api_v1_promotion_create",
  async payload => {
    const response = await apiService.api_v1_promotion_create(payload)
    return response.data
  }
)
export const api_v1_promotion_retrieve = createAsyncThunk(
  "promotions/api_v1_promotion_retrieve",
  async payload => {
    const response = await apiService.api_v1_promotion_retrieve(payload)
    return response.data
  }
)
export const api_v1_promotion_update = createAsyncThunk(
  "promotions/api_v1_promotion_update",
  async payload => {
    const response = await apiService.api_v1_promotion_update(payload)
    return response.data
  }
)
export const api_v1_promotion_partial_update = createAsyncThunk(
  "promotions/api_v1_promotion_partial_update",
  async payload => {
    const response = await apiService.api_v1_promotion_partial_update(payload)
    return response.data
  }
)
export const api_v1_promotion_destroy = createAsyncThunk(
  "promotions/api_v1_promotion_destroy",
  async payload => {
    const response = await apiService.api_v1_promotion_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const promotionsSlice = createSlice({
  name: "promotions",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_promotion_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_promotion_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_promotion_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_promotion_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_promotion_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_promotion_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_promotion_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_promotion_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_promotion_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_promotion_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_promotion_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_promotion_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_promotion_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_promotion_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_promotion_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_promotion_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_promotion_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_promotion_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_promotion_list,
  api_v1_promotion_create,
  api_v1_promotion_retrieve,
  api_v1_promotion_update,
  api_v1_promotion_partial_update,
  api_v1_promotion_destroy,
  slice: promotionsSlice
}
