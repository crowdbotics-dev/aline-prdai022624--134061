import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_restaurantreview_list = createAsyncThunk(
  "restaurantReviews/api_v1_restaurantreview_list",
  async payload => {
    const response = await apiService.api_v1_restaurantreview_list(payload)
    return response.data
  }
)
export const api_v1_restaurantreview_create = createAsyncThunk(
  "restaurantReviews/api_v1_restaurantreview_create",
  async payload => {
    const response = await apiService.api_v1_restaurantreview_create(payload)
    return response.data
  }
)
export const api_v1_restaurantreview_retrieve = createAsyncThunk(
  "restaurantReviews/api_v1_restaurantreview_retrieve",
  async payload => {
    const response = await apiService.api_v1_restaurantreview_retrieve(payload)
    return response.data
  }
)
export const api_v1_restaurantreview_update = createAsyncThunk(
  "restaurantReviews/api_v1_restaurantreview_update",
  async payload => {
    const response = await apiService.api_v1_restaurantreview_update(payload)
    return response.data
  }
)
export const api_v1_restaurantreview_partial_update = createAsyncThunk(
  "restaurantReviews/api_v1_restaurantreview_partial_update",
  async payload => {
    const response = await apiService.api_v1_restaurantreview_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_restaurantreview_destroy = createAsyncThunk(
  "restaurantReviews/api_v1_restaurantreview_destroy",
  async payload => {
    const response = await apiService.api_v1_restaurantreview_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const restaurantReviewsSlice = createSlice({
  name: "restaurantReviews",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_restaurantreview_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_restaurantreview_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantreview_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantreview_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_restaurantreview_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantreview_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantreview_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_restaurantreview_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantreview_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantreview_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_restaurantreview_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantreview_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_restaurantreview_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_restaurantreview_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_restaurantreview_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_restaurantreview_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_restaurantreview_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantreview_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_restaurantreview_list,
  api_v1_restaurantreview_create,
  api_v1_restaurantreview_retrieve,
  api_v1_restaurantreview_update,
  api_v1_restaurantreview_partial_update,
  api_v1_restaurantreview_destroy,
  slice: restaurantReviewsSlice
}
