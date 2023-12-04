// cacheUtility.js

// Simple in-memory cache
let cache = {};

export const setCache = (key, data) => {
  cache[key] = {
    data,
    timestamp: new Date().getTime(),
  };
};

export const getCache = (key, ttl) => {
  const item = cache[key];
  if (!item) return null;

  const isExpired = new Date().getTime() - item.timestamp > ttl;
  if (isExpired) {
    delete cache[key];
    return null;
  }

  return item.data;
};

export const clearCache = () => {
  cache = {};
};
