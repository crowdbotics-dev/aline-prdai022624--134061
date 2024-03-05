import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_restaurantpartner_list = createAsyncThunk(
  "restaurantPartners/api_v1_restaurantpartner_list",
  async payload => {
    const response = await apiService.api_v1_restaurantpartner_list(payload)
    return response.data
  }
)
export const api_v1_restaurantpartner_create = createAsyncThunk(
  "restaurantPartners/api_v1_restaurantpartner_create",
  async payload => {
    const response = await apiService.api_v1_restaurantpartner_create(payload)
    return response.data
  }
)
export const api_v1_restaurantpartner_retrieve = createAsyncThunk(
  "restaurantPartners/api_v1_restaurantpartner_retrieve",
  async payload => {
    const response = await apiService.api_v1_restaurantpartner_retrieve(payload)
    return response.data
  }
)
export const api_v1_restaurantpartner_update = createAsyncThunk(
  "restaurantPartners/api_v1_restaurantpartner_update",
  async payload => {
    const response = await apiService.api_v1_restaurantpartner_update(payload)
    return response.data
  }
)
export const api_v1_restaurantpartner_partial_update = createAsyncThunk(
  "restaurantPartners/api_v1_restaurantpartner_partial_update",
  async payload => {
    const response = await apiService.api_v1_restaurantpartner_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_restaurantpartner_destroy = createAsyncThunk(
  "restaurantPartners/api_v1_restaurantpartner_destroy",
  async payload => {
    const response = await apiService.api_v1_restaurantpartner_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const restaurantPartnersSlice = createSlice({
  name: "restaurantPartners",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_restaurantpartner_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_restaurantpartner_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantpartner_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantpartner_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_restaurantpartner_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantpartner_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantpartner_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_restaurantpartner_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantpartner_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantpartner_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_restaurantpartner_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantpartner_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_restaurantpartner_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_restaurantpartner_partial_update.fulfilled,
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
        api_v1_restaurantpartner_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_restaurantpartner_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_restaurantpartner_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_restaurantpartner_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_restaurantpartner_list,
  api_v1_restaurantpartner_create,
  api_v1_restaurantpartner_retrieve,
  api_v1_restaurantpartner_update,
  api_v1_restaurantpartner_partial_update,
  api_v1_restaurantpartner_destroy,
  slice: restaurantPartnersSlice
}
