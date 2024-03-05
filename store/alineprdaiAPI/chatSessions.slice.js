import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_chatsession_list = createAsyncThunk(
  "chatSessions/api_v1_chatsession_list",
  async payload => {
    const response = await apiService.api_v1_chatsession_list(payload)
    return response.data
  }
)
export const api_v1_chatsession_create = createAsyncThunk(
  "chatSessions/api_v1_chatsession_create",
  async payload => {
    const response = await apiService.api_v1_chatsession_create(payload)
    return response.data
  }
)
export const api_v1_chatsession_retrieve = createAsyncThunk(
  "chatSessions/api_v1_chatsession_retrieve",
  async payload => {
    const response = await apiService.api_v1_chatsession_retrieve(payload)
    return response.data
  }
)
export const api_v1_chatsession_update = createAsyncThunk(
  "chatSessions/api_v1_chatsession_update",
  async payload => {
    const response = await apiService.api_v1_chatsession_update(payload)
    return response.data
  }
)
export const api_v1_chatsession_partial_update = createAsyncThunk(
  "chatSessions/api_v1_chatsession_partial_update",
  async payload => {
    const response = await apiService.api_v1_chatsession_partial_update(payload)
    return response.data
  }
)
export const api_v1_chatsession_destroy = createAsyncThunk(
  "chatSessions/api_v1_chatsession_destroy",
  async payload => {
    const response = await apiService.api_v1_chatsession_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const chatSessionsSlice = createSlice({
  name: "chatSessions",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_chatsession_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_chatsession_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_chatsession_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_chatsession_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_chatsession_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_chatsession_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_chatsession_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_chatsession_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_chatsession_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_chatsession_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_chatsession_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_chatsession_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_chatsession_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_chatsession_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_chatsession_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_chatsession_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_chatsession_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_chatsession_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_chatsession_list,
  api_v1_chatsession_create,
  api_v1_chatsession_retrieve,
  api_v1_chatsession_update,
  api_v1_chatsession_partial_update,
  api_v1_chatsession_destroy,
  slice: chatSessionsSlice
}
