import cherrypy
import os
from jinja2 import Environment, FileSystemLoader

# Configuración del entorno Jinja2
TEMPLATES_DIR = os.path.join(os.path.dirname(__file__), 'templates')
STATIC_DIR = os.path.join(os.path.dirname(__file__), 'static')
env = Environment(loader=FileSystemLoader(TEMPLATES_DIR))

class MyApp:
    @cherrypy.expose
    def index(self):
        # Renderiza la página principal
        template = env.get_template('index.html')
        return template.render()

    @cherrypy.expose
    def form(self, name="", age=""):
        # Validación de datos enviados
        error = ""
        if cherrypy.request.method == "POST":
            if not name or not age:
                error = "Por favor, completa todos los campos."
            elif not age.isdigit():
                error = "La edad debe ser un número."
        template = env.get_template('form.html')
        return template.render(name=name, age=age, error=error)

# Configuración general
config = {
    '/': {
        'tools.staticdir.on': True,
        'tools.staticdir.dir': STATIC_DIR,
        'tools.staticdir.index': 'index.html',
    }
}

if __name__ == '__main__':
    # Página de errores personalizada
    cherrypy.config.update({
        'error_page.default': os.path.join(TEMPLATES_DIR, 'error.html')
    })
    cherrypy.quickstart(MyApp(), '/', config)
