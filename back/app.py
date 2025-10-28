from flask import Flask, jsonify, request
from flask_cors import CORS
import worldnewsapi
from worldnewsapi.rest import ApiException
from flasgger import Swagger, swag_from
from dotenv import load_dotenv
import os
import time

load_dotenv()

api_key = os.getenv('WORLDNEWS_API_KEY')

app = Flask(__name__)
CORS(app)
swagger = Swagger(app)

noticias_cache = {}
CACHE_TTL = 60 * 60 * 24

@app.route("/api/api")
def api():
    return "hola soy el back"

@app.route("/api/noticias")
@swag_from("docs/noticias.yml")
def noticias():
    pais = request.args.get("pais", "es")
    categoria = request.args.get("categoria", "general")
    query = categoria
    cache_key = f"{pais}_{categoria}"

    if cache_key in noticias_cache:
        cached = noticias_cache[cache_key]
        if time.time() - cached["timestamp"] < CACHE_TTL:
            print(f"🧠 Usando caché para {cache_key}")
            return jsonify(cached["data"])

    config = worldnewsapi.Configuration(api_key={"apiKey": api_key})
    api = worldnewsapi.NewsApi(worldnewsapi.ApiClient(config))

    try:
        response = api.search_news(
            text=query,
            source_country=pais,
            language="es",
            number=10,
            sort="publish-time",
            sort_direction="desc",
        )

        noticias_filtradas = [
            {
                "titulo": n.title,
                "url": n.url,
                "fecha": n.publish_date,
                "sentimiento": n.sentiment,
                "imagen": getattr(n, "image", None),
                "autor": getattr(n, "authors", []),
                "resumen": getattr(n, "summary", None),
                "categoria": categoria,
            }
            for n in response.news
        ]

        noticias_cache[cache_key] = {
            "timestamp": time.time(),
            "data": noticias_filtradas
        }

        return jsonify(noticias_filtradas)

    except ApiException as e:
        print(f"⚠️ Error al llamar a WorldNewsAPI: {e}")
        return (
            jsonify({"error": "Falló la conexión con WorldNewsAPI", "detalle": str(e)}),
            500,
        )

if __name__ == "__main__":
    app.run(debug=True)
