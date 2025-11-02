from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from routes.noticias_routes import noticias_bp
# import os

# Cargar variables de entorno
load_dotenv()

# Inicializar app
app = Flask(__name__)
CORS(app)

# Importar rutas
app.register_blueprint(noticias_bp, url_prefix="/api")


@app.route("/api/api")
def api():
    return "Hola, soy el backend de noticias"


if __name__ == "__main__":
    app.run(debug=True)
