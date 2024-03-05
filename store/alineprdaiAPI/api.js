import axios from "axios"
const alineprdaiAPI = axios.create({
  baseURL: "https://aline-prdai022624--134061.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return alineprdaiAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_address_list(payload) {
  return alineprdaiAPI.get(`/api/v1/address/`)
}
function api_v1_address_create(payload) {
  return alineprdaiAPI.post(`/api/v1/address/`, payload)
}
function api_v1_address_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/address/${payload.id}/`)
}
function api_v1_address_update(payload) {
  return alineprdaiAPI.put(`/api/v1/address/${payload.id}/`, payload)
}
function api_v1_address_partial_update(payload) {
  return alineprdaiAPI.patch(`/api/v1/address/${payload.id}/`, payload)
}
function api_v1_address_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/address/${payload.id}/`)
}
function api_v1_cancellation_list(payload) {
  return alineprdaiAPI.get(`/api/v1/cancellation/`)
}
function api_v1_cancellation_create(payload) {
  return alineprdaiAPI.post(`/api/v1/cancellation/`, payload)
}
function api_v1_cancellation_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/cancellation/${payload.id}/`)
}
function api_v1_cancellation_update(payload) {
  return alineprdaiAPI.put(`/api/v1/cancellation/${payload.id}/`, payload)
}
function api_v1_cancellation_partial_update(payload) {
  return alineprdaiAPI.patch(`/api/v1/cancellation/${payload.id}/`, payload)
}
function api_v1_cancellation_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/cancellation/${payload.id}/`)
}
function api_v1_chatsession_list(payload) {
  return alineprdaiAPI.get(`/api/v1/chatsession/`)
}
function api_v1_chatsession_create(payload) {
  return alineprdaiAPI.post(`/api/v1/chatsession/`, payload)
}
function api_v1_chatsession_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/chatsession/${payload.id}/`)
}
function api_v1_chatsession_update(payload) {
  return alineprdaiAPI.put(`/api/v1/chatsession/${payload.id}/`, payload)
}
function api_v1_chatsession_partial_update(payload) {
  return alineprdaiAPI.patch(`/api/v1/chatsession/${payload.id}/`, payload)
}
function api_v1_chatsession_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/chatsession/${payload.id}/`)
}
function api_v1_customer_list(payload) {
  return alineprdaiAPI.get(`/api/v1/customer/`)
}
function api_v1_customer_create(payload) {
  return alineprdaiAPI.post(`/api/v1/customer/`, payload)
}
function api_v1_customer_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/customer/${payload.id}/`)
}
function api_v1_customer_update(payload) {
  return alineprdaiAPI.put(`/api/v1/customer/${payload.id}/`, payload)
}
function api_v1_customer_partial_update(payload) {
  return alineprdaiAPI.patch(`/api/v1/customer/${payload.id}/`, payload)
}
function api_v1_customer_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/customer/${payload.id}/`)
}
function api_v1_dispatch_list(payload) {
  return alineprdaiAPI.get(`/api/v1/dispatch/`)
}
function api_v1_dispatch_create(payload) {
  return alineprdaiAPI.post(`/api/v1/dispatch/`, payload)
}
function api_v1_dispatch_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/dispatch/${payload.id}/`)
}
function api_v1_dispatch_update(payload) {
  return alineprdaiAPI.put(`/api/v1/dispatch/${payload.id}/`, payload)
}
function api_v1_dispatch_partial_update(payload) {
  return alineprdaiAPI.patch(`/api/v1/dispatch/${payload.id}/`, payload)
}
function api_v1_dispatch_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/dispatch/${payload.id}/`)
}
function api_v1_driver_list(payload) {
  return alineprdaiAPI.get(`/api/v1/driver/`)
}
function api_v1_driver_create(payload) {
  return alineprdaiAPI.post(`/api/v1/driver/`, payload)
}
function api_v1_driver_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/driver/${payload.id}/`)
}
function api_v1_driver_update(payload) {
  return alineprdaiAPI.put(`/api/v1/driver/${payload.id}/`, payload)
}
function api_v1_driver_partial_update(payload) {
  return alineprdaiAPI.patch(`/api/v1/driver/${payload.id}/`, payload)
}
function api_v1_driver_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/driver/${payload.id}/`)
}
function api_v1_driverreview_list(payload) {
  return alineprdaiAPI.get(`/api/v1/driverreview/`)
}
function api_v1_driverreview_create(payload) {
  return alineprdaiAPI.post(`/api/v1/driverreview/`, payload)
}
function api_v1_driverreview_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/driverreview/${payload.id}/`)
}
function api_v1_driverreview_update(payload) {
  return alineprdaiAPI.put(`/api/v1/driverreview/${payload.id}/`, payload)
}
function api_v1_driverreview_partial_update(payload) {
  return alineprdaiAPI.patch(`/api/v1/driverreview/${payload.id}/`, payload)
}
function api_v1_driverreview_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/driverreview/${payload.id}/`)
}
function api_v1_favorites_list(payload) {
  return alineprdaiAPI.get(`/api/v1/favorites/`)
}
function api_v1_favorites_create(payload) {
  return alineprdaiAPI.post(`/api/v1/favorites/`, payload)
}
function api_v1_favorites_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/favorites/${payload.id}/`)
}
function api_v1_favorites_update(payload) {
  return alineprdaiAPI.put(`/api/v1/favorites/${payload.id}/`, payload)
}
function api_v1_favorites_partial_update(payload) {
  return alineprdaiAPI.patch(`/api/v1/favorites/${payload.id}/`, payload)
}
function api_v1_favorites_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/favorites/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return alineprdaiAPI.post(`/api/v1/login/`, payload)
}
function api_v1_notification_list(payload) {
  return alineprdaiAPI.get(`/api/v1/notification/`)
}
function api_v1_notification_create(payload) {
  return alineprdaiAPI.post(`/api/v1/notification/`, payload)
}
function api_v1_notification_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/notification/${payload.id}/`)
}
function api_v1_notification_update(payload) {
  return alineprdaiAPI.put(`/api/v1/notification/${payload.id}/`, payload)
}
function api_v1_notification_partial_update(payload) {
  return alineprdaiAPI.patch(`/api/v1/notification/${payload.id}/`, payload)
}
function api_v1_notification_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/notification/${payload.id}/`)
}
function api_v1_order_list(payload) {
  return alineprdaiAPI.get(`/api/v1/order/`)
}
function api_v1_order_create(payload) {
  return alineprdaiAPI.post(`/api/v1/order/`, payload)
}
function api_v1_order_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/order/${payload.id}/`)
}
function api_v1_order_update(payload) {
  return alineprdaiAPI.put(`/api/v1/order/${payload.id}/`, payload)
}
function api_v1_order_partial_update(payload) {
  return alineprdaiAPI.patch(`/api/v1/order/${payload.id}/`, payload)
}
function api_v1_order_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/order/${payload.id}/`)
}
function api_v1_payment_list(payload) {
  return alineprdaiAPI.get(`/api/v1/payment/`)
}
function api_v1_payment_create(payload) {
  return alineprdaiAPI.post(`/api/v1/payment/`, payload)
}
function api_v1_payment_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/payment/${payload.id}/`)
}
function api_v1_payment_update(payload) {
  return alineprdaiAPI.put(`/api/v1/payment/${payload.id}/`, payload)
}
function api_v1_payment_partial_update(payload) {
  return alineprdaiAPI.patch(`/api/v1/payment/${payload.id}/`, payload)
}
function api_v1_payment_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/payment/${payload.id}/`)
}
function api_v1_promotion_list(payload) {
  return alineprdaiAPI.get(`/api/v1/promotion/`)
}
function api_v1_promotion_create(payload) {
  return alineprdaiAPI.post(`/api/v1/promotion/`, payload)
}
function api_v1_promotion_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/promotion/${payload.id}/`)
}
function api_v1_promotion_update(payload) {
  return alineprdaiAPI.put(`/api/v1/promotion/${payload.id}/`, payload)
}
function api_v1_promotion_partial_update(payload) {
  return alineprdaiAPI.patch(`/api/v1/promotion/${payload.id}/`, payload)
}
function api_v1_promotion_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/promotion/${payload.id}/`)
}
function api_v1_restaurant_list(payload) {
  return alineprdaiAPI.get(`/api/v1/restaurant/`)
}
function api_v1_restaurant_create(payload) {
  return alineprdaiAPI.post(`/api/v1/restaurant/`, payload)
}
function api_v1_restaurant_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/restaurant/${payload.id}/`)
}
function api_v1_restaurant_update(payload) {
  return alineprdaiAPI.put(`/api/v1/restaurant/${payload.id}/`, payload)
}
function api_v1_restaurant_partial_update(payload) {
  return alineprdaiAPI.patch(`/api/v1/restaurant/${payload.id}/`, payload)
}
function api_v1_restaurant_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/restaurant/${payload.id}/`)
}
function api_v1_restaurantpartner_list(payload) {
  return alineprdaiAPI.get(`/api/v1/restaurantpartner/`)
}
function api_v1_restaurantpartner_create(payload) {
  return alineprdaiAPI.post(`/api/v1/restaurantpartner/`, payload)
}
function api_v1_restaurantpartner_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/restaurantpartner/${payload.id}/`)
}
function api_v1_restaurantpartner_update(payload) {
  return alineprdaiAPI.put(`/api/v1/restaurantpartner/${payload.id}/`, payload)
}
function api_v1_restaurantpartner_partial_update(payload) {
  return alineprdaiAPI.patch(
    `/api/v1/restaurantpartner/${payload.id}/`,
    payload
  )
}
function api_v1_restaurantpartner_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/restaurantpartner/${payload.id}/`)
}
function api_v1_restaurantreview_list(payload) {
  return alineprdaiAPI.get(`/api/v1/restaurantreview/`)
}
function api_v1_restaurantreview_create(payload) {
  return alineprdaiAPI.post(`/api/v1/restaurantreview/`, payload)
}
function api_v1_restaurantreview_retrieve(payload) {
  return alineprdaiAPI.get(`/api/v1/restaurantreview/${payload.id}/`)
}
function api_v1_restaurantreview_update(payload) {
  return alineprdaiAPI.put(`/api/v1/restaurantreview/${payload.id}/`, payload)
}
function api_v1_restaurantreview_partial_update(payload) {
  return alineprdaiAPI.patch(`/api/v1/restaurantreview/${payload.id}/`, payload)
}
function api_v1_restaurantreview_destroy(payload) {
  return alineprdaiAPI.delete(`/api/v1/restaurantreview/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return alineprdaiAPI.post(`/api/v1/signup/`, payload)
}
function modules_two_factor_authentication_enable_2fa_retrieve(payload) {
  return alineprdaiAPI.get(`/modules/two-factor-authentication/enable/2fa`)
}
function modules_two_factor_authentication_enable_2fa_create(payload) {
  return alineprdaiAPI.post(`/modules/two-factor-authentication/enable/2fa`)
}
function modules_two_factor_authentication_enable_2fa_destroy(payload) {
  return alineprdaiAPI.delete(`/modules/two-factor-authentication/enable/2fa`)
}
function modules_two_factor_authentication_google_authenticator_qr_retrieve(
  payload
) {
  return alineprdaiAPI.get(
    `/modules/two-factor-authentication/google/authenticator/qr`
  )
}
function modules_two_factor_authentication_send_otp_create(payload) {
  return alineprdaiAPI.post(`/modules/two-factor-authentication/send/otp`)
}
function modules_two_factor_authentication_verify_otp_create(payload) {
  return alineprdaiAPI.post(`/modules/two-factor-authentication/verify/otp`)
}
function modules_two_factor_authentication_verify_otp_create_2(payload) {
  return alineprdaiAPI.post(
    `/modules/two-factor-authentication/verify/otp/${payload.enable}`
  )
}
function rest_auth_login_create(payload) {
  return alineprdaiAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return alineprdaiAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return alineprdaiAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return alineprdaiAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return alineprdaiAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return alineprdaiAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return alineprdaiAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return alineprdaiAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return alineprdaiAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return alineprdaiAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return alineprdaiAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_address_list,
  api_v1_address_create,
  api_v1_address_retrieve,
  api_v1_address_update,
  api_v1_address_partial_update,
  api_v1_address_destroy,
  api_v1_cancellation_list,
  api_v1_cancellation_create,
  api_v1_cancellation_retrieve,
  api_v1_cancellation_update,
  api_v1_cancellation_partial_update,
  api_v1_cancellation_destroy,
  api_v1_chatsession_list,
  api_v1_chatsession_create,
  api_v1_chatsession_retrieve,
  api_v1_chatsession_update,
  api_v1_chatsession_partial_update,
  api_v1_chatsession_destroy,
  api_v1_customer_list,
  api_v1_customer_create,
  api_v1_customer_retrieve,
  api_v1_customer_update,
  api_v1_customer_partial_update,
  api_v1_customer_destroy,
  api_v1_dispatch_list,
  api_v1_dispatch_create,
  api_v1_dispatch_retrieve,
  api_v1_dispatch_update,
  api_v1_dispatch_partial_update,
  api_v1_dispatch_destroy,
  api_v1_driver_list,
  api_v1_driver_create,
  api_v1_driver_retrieve,
  api_v1_driver_update,
  api_v1_driver_partial_update,
  api_v1_driver_destroy,
  api_v1_driverreview_list,
  api_v1_driverreview_create,
  api_v1_driverreview_retrieve,
  api_v1_driverreview_update,
  api_v1_driverreview_partial_update,
  api_v1_driverreview_destroy,
  api_v1_favorites_list,
  api_v1_favorites_create,
  api_v1_favorites_retrieve,
  api_v1_favorites_update,
  api_v1_favorites_partial_update,
  api_v1_favorites_destroy,
  api_v1_login_create,
  api_v1_notification_list,
  api_v1_notification_create,
  api_v1_notification_retrieve,
  api_v1_notification_update,
  api_v1_notification_partial_update,
  api_v1_notification_destroy,
  api_v1_order_list,
  api_v1_order_create,
  api_v1_order_retrieve,
  api_v1_order_update,
  api_v1_order_partial_update,
  api_v1_order_destroy,
  api_v1_payment_list,
  api_v1_payment_create,
  api_v1_payment_retrieve,
  api_v1_payment_update,
  api_v1_payment_partial_update,
  api_v1_payment_destroy,
  api_v1_promotion_list,
  api_v1_promotion_create,
  api_v1_promotion_retrieve,
  api_v1_promotion_update,
  api_v1_promotion_partial_update,
  api_v1_promotion_destroy,
  api_v1_restaurant_list,
  api_v1_restaurant_create,
  api_v1_restaurant_retrieve,
  api_v1_restaurant_update,
  api_v1_restaurant_partial_update,
  api_v1_restaurant_destroy,
  api_v1_restaurantpartner_list,
  api_v1_restaurantpartner_create,
  api_v1_restaurantpartner_retrieve,
  api_v1_restaurantpartner_update,
  api_v1_restaurantpartner_partial_update,
  api_v1_restaurantpartner_destroy,
  api_v1_restaurantreview_list,
  api_v1_restaurantreview_create,
  api_v1_restaurantreview_retrieve,
  api_v1_restaurantreview_update,
  api_v1_restaurantreview_partial_update,
  api_v1_restaurantreview_destroy,
  api_v1_signup_create,
  modules_two_factor_authentication_enable_2fa_retrieve,
  modules_two_factor_authentication_enable_2fa_create,
  modules_two_factor_authentication_enable_2fa_destroy,
  modules_two_factor_authentication_google_authenticator_qr_retrieve,
  modules_two_factor_authentication_send_otp_create,
  modules_two_factor_authentication_verify_otp_create,
  modules_two_factor_authentication_verify_otp_create_2,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
