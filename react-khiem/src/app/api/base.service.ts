import { environment } from './../../environments/environment';
import axios from 'axios';

export class BaseService {
  url: any;
  public api: any;
  constructor() {
    this.api = axios.create({
      baseURL: environment.apiUrl,
      headers: {
        ['Content-Type']: 'application/json'
      }
    });
  }

  /**
   * Get the list of resource with pagination
   *
   * @param params
   */
  get(params: Object = {}): Promise<Object> {
    return this.api.get(`${this.url}/list`, { params });
  }

  /**
   * Get the list of all resource
   *
   * @param params
   */
  list(params: Object = {}): Promise<Object> {
    return this.api.post(`${this.url}/list`, params);
  }

  /**
   * Create new resource with given data
   *
   * @param params
   */
  create(params: Object = {}): Promise<Object> {
    return this.api.post(`${this.url}`, params);
  }
}
