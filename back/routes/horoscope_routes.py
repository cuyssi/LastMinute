from flask import Blueprint, jsonify, request
from services.translator_service import traducir_texto
from services.horoscope_service import obtener_horoscopos
from utils.cache_manager import cache_get, cache_set


horoscopo_bp = Blueprint("horoscopo_bp", __name__)


@horoscopo_bp.route("/horoscopo")
def horoscopo():
    signo = request.args.get("signo", "virgo").lower()
    cache_key = f"horoscopo_{signo}"

    cached = cache_get(cache_key)
    if cached:
        print(f"🧠 Usando caché para {cache_key}")
        return jsonify(cached)

    horoscopo, error = obtener_horoscopos(signo)
    if error:
        return jsonify({
            "error": "Falló la conexión con la API de horóscopo",
            "detalle": error
        }), 500

    horoscopo["horoscopo"] = traducir_texto(horoscopo["horoscopo"])
    horoscopo["signo"] = traducir_texto(horoscopo["signo"])

    cache_set(cache_key, horoscopo)
    return jsonify(horoscopo)
