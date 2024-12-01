export enum AppRoutesEnum {
  BASE = '/',
  DASHBOARD = '/dashboard',
  SIGN_IN = '/sign-in',
  SING_UP = '/sign-up',
  ORDERS = '/orders',
  TERMS = '/terms',
  PRIVACY = '/privacy',
}

export enum ApiRoutesEnum  {
  AUTH = "/authenticate",
  RESTAURANTS = "/restaurants",
  USER = "/me",
  MANAGED_RESTAURANT = "/managed-restaurant",
  PROFILE = "/profile",
  SIGN_OUT = '/sign-out',
  ORDERS = '/orders',
  DAY_ORDERS_AMOUNT = '/metrics/day-orders-amount',
  MONTH_ORDERDS_AMOUNT ='/metrics/month-orders-amount',
  MONTH_ORDERDS_CANCELED_AMOUNT ='/metrics/month-canceled-orders-amount',
  MONTH_REVENUE = '/metrics/month-receipt',
  POPULAR_PRODUCTS = '/metrics/popular-products',
  DAILY_RECEIPT_IN_PERIOD = '/metrics/daily-receipt-in-period'
}