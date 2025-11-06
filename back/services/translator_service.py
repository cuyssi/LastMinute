from deep_translator import GoogleTranslator


def traducir_texto(texto: str) -> str:
    try:
        return GoogleTranslator(source="en", target="es").translate(texto)
    except Exception as e:
        print("⚠️ Error al traducir:", e)
        return texto  # Devuelve el texto original si falla
