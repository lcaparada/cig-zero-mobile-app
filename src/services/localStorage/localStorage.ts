export interface LocalStorage {
  getItem: <T>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, data: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}
