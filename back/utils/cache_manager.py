import time

_cache = {}
CACHE_TTL = 60 * 60 * 24  # 24h

def cache_get(key):
    data = _cache.get(key)
    if data and time.time() - data["timestamp"] < CACHE_TTL:
        return data["value"]
    return None

def cache_set(key, value):
    _cache[key] = {
        "timestamp": time.time(),
        "value": value
    }