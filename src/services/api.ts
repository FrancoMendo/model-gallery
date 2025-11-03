/**
 * Configuración base de la API
 */

import { appConfig } from '../config/app.config';

interface RequestOptions extends RequestInit {
  timeout?: number;
}

/**
 * Cliente HTTP personalizado con configuración base
 */
class ApiClient {
  private baseUrl: string;
  private defaultTimeout: number;

  constructor(baseUrl: string, timeout: number) {
    this.baseUrl = baseUrl;
    this.defaultTimeout = timeout;
  }

  /**
   * Realiza una petición HTTP con timeout
   */
  private async fetchWithTimeout(
    url: string,
    options: RequestOptions = {}
  ): Promise<Response> {
    const { timeout = this.defaultTimeout, ...fetchOptions } = options;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await this.fetchWithTimeout(url, {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  /**
   * POST request
   */
  async post<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await this.fetchWithTimeout(url, {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  /**
   * PUT request
   */
  async put<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await this.fetchWithTimeout(url, {
      ...options,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await this.fetchWithTimeout(url, {
      ...options,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}

// Instancia singleton del cliente API
export const apiClient = new ApiClient(
  appConfig.api.baseUrl,
  appConfig.api.timeout
);

export default apiClient;

