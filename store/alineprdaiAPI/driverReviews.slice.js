import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_driverreview_list = createAsyncThunk(
  "driverReviews/api_v1_driverreview_list",
  async payload => {
    const response = await apiService.api_v1_driverreview_list(payload)
    return response.data
  }
)
export const api_v1_driverreview_create = createAsyncThunk(
  "driverReviews/api_v1_driverreview_create",
  async payload => {
    const response = await apiService.api_v1_driverreview_create(payload)
    return response.data
  }
)
export const api_v1_driverreview_retrieve = createAsyncThunk(
  "driverReviews/api_v1_driverreview_retrieve",
  async payload => {
    const response = await apiService.api_v1_driverreview_retrieve(payload)
    return response.data
  }
)
export const api_v1_driverreview_update = createAsyncThunk(
  "driverReviews/api_v1_driverreview_update",
  async payload => {
    const response = await apiService.api_v1_driverreview_update(payload)
    return response.data
  }
)
export const api_v1_driverreview_partial_update = createAsyncThunk(
  "driverReviews/api_v1_driverreview_partial_update",
  async payload => {
    const response = await apiService.api_v1_driverreview_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_driverreview_destroy = createAsyncThunk(
  "driverReviews/api_v1_driverreview_destroy",
  async payload => {
    const response = await apiService.api_v1_driverreview_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const driverReviewsSlice = createSlice({
  name: "driverReviews",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_driverreview_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_driverreview_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driverreview_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driverreview_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_driverreview_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driverreview_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driverreview_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_driverreview_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driverreview_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driverreview_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_driverreview_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driverreview_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driverreview_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_driverreview_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_driverreview_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driverreview_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_driverreview_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_driverreview_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_driverreview_list,
  api_v1_driverreview_create,
  api_v1_driverreview_retrieve,
  api_v1_driverreview_update,
  api_v1_driverreview_partial_update,
  api_v1_driverreview_destroy,
  slice: driverReviewsSlice
}
