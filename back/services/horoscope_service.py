import requests


def obtener_horoscopos(signo: str):
    url = "https://api.api-ninjas.com/v1/horoscope"

    params = {"zodiac": signo}

    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()

        horoscopo = {
            "signo": data.get("sign"),
            "horoscopo": data.get("horoscope")
        }

        return horoscopo, None

    except requests.RequestException as e:
        print(f"⚠️ Error al llamar a horoscopeAPI: {e}")
        return None, str(e)
