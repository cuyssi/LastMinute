from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from routes.noticias_routes import noticias_bp
from routes.horoscope_routes import horoscopo_bp

load_dotenv()

app = Flask(__name__)
CORS(app)

app.register_blueprint(noticias_bp, url_prefix="/api")
app.register_blueprint(horoscopo_bp, url_prefix='/api')


@app.route("/api/api")
def api():
    return "Hola, soy el backend de noticias"


if __name__ == "__main__":
    app.run(debug=True)
