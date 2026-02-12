import {
  Parameter,
  Product
} from '../types';
import { get } from 'http';

const getBaseUrl = () => {
  const hostname = window.location.hostname;
  
  // If we are on a subdomain (e.g., www.kparalegal.com)
  // We want the API to be at the same subdomain
  if (hostname.includes('kparalegal.com')) {
    return `https://${hostname}/api`;
  }
  
  // Local development fallback
  return `http://localhost:8093/api`;
};

const API_BASE = getBaseUrl();


export const apiService = {
    getProducts: async (): Promise<Product[]> => {
        try {
        const url = `${API_BASE}/products`;
        const response = await fetch(url);
            
        if (!response.ok) {
            throw new Error(`Network response from ${url} was not ok: ${response.statusText}`);
        }
            
        return await response.json();
        } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
        }
    },

    getProductBySlug: async (slug: string): Promise<Product> => {
        try {
        const url = `${API_BASE}/products/${slug}`;
        const response = await fetch(url);
            
        if (!response.ok) {
            throw new Error(`Network response from ${url} was not ok: ${response.statusText}`);
        }
            
        return await response.json();
        } catch (error) {
        console.error(`Failed to fetch product with slug ${slug}:`, error);
        throw error;
        }
    },

    getParameters: async (environment?: string): Promise<Parameter[]> => {
        try {
        const url = `${API_BASE}/parameters${environment ? `/environment=${environment}` : ''}`;
        const response = await fetch(url);
            
        if (!response.ok) {
            throw new Error(`Network response from ${url} was not ok: ${response.statusText}`);
        }
            
        return await response.json();
        } catch (error) {
        console.error("Failed to fetch parameters:", error);
        throw error;
        }
    },
}