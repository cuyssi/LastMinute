import os
import requests

api_key = os.getenv("WORLDNEWS_API_KEY")


def obtener_noticias(pais: str, categoria: str):
    url = "https://api.worldnewsapi.com/search-news"
    headers = {"x-api-key": api_key}
    params = {
        "text": categoria,
        "source-country": pais,
        "language": "es",
        "number": 10,
        "sort": "publish-time",
        "sort-direction": "desc"
    }

    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        data = response.json()

        noticias_filtradas = [
            {
                "titulo": n.get("title"),
                "url": n.get("url"),
                "fecha": n.get("publish_date"),
                "sentimiento": n.get("sentiment"),
                "imagen": n.get("image"),
                "autor": n.get("authors", []),
                "resumen": n.get("summary"),
                "categoria": categoria,
            }
            for n in data.get("news", [])
        ]

        return noticias_filtradas, None

    except requests.RequestException as e:
        print(f"⚠️ Error al llamar a WorldNewsAPI: {e}")
        return None, str(e)
