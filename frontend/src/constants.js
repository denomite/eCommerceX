import process from 'process';
export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ''; // This is the base URL for the backend API;
export const PRODUCT_URL = '/api/products'; // This is the URL for the products endpoint;
export const USERS_URL = '/api/users'; // This is the URL for the users endpoint;
export const ORDERS_URL = '/api/orders'; // This is the URL for the orders endpoint;
export const PAYPAL_URL = '/api/config/paypal'; // This is the URL for the PayPal endpoint;