from flask import Blueprint, jsonify, request
from services.worldnews_service import obtener_noticias
from utils.cache_manager import cache_get, cache_set

noticias_bp = Blueprint("noticias_bp", __name__)


@noticias_bp.route("/noticias")
def noticias():
    pais = request.args.get("pais", "es")
    categoria = request.args.get("categoria", "general")
    cache_key = f"{pais}_{categoria}"

    cached = cache_get(cache_key)
    if cached:
        print(f"🧠 Usando caché para {cache_key}")
        return jsonify(cached)

    noticias_filtradas, error = obtener_noticias(pais, categoria)
    if error:
        return jsonify({
            "error": "Falló la conexión con WorldNewsAPI",
            "detalle": error
        }), 500

    cache_set(cache_key, noticias_filtradas)
    return jsonify(noticias_filtradas)
