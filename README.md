# EcoShape Frontend

Aplicación web para el cálculo de volúmenes y resistencia de macetas y conos. Desarrollada con Next.js y TailwindCSS.

## 🚀 Características

- Cálculo de volumen de macetas cilíndricas
- Verificación de resistencia de macetas
- Cálculo de volumen de conos huecos
- Diseño neumórfico moderno
- Interfaz responsive

## 🛠 Tecnologías

- Next.js 14
- TailwindCSS
- React
- Flask (Backend)

## 📋 Prerrequisitos

- Node.js 18.17 o superior
- npm o yarn
- Python 3.8 o superior (para el backend)

## 🔧 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/jcgmU/EcoShapeFront.git
cd EcoShapeFront
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 📚 Estructura del Proyecto

```
frontend/
├── app/               # Páginas y rutas de la aplicación
├── components/        # Componentes reutilizables
│   ├── cards/        # Componentes de tarjetas
│   └── Header.js     # Componente de navegación
├── public/           # Archivos estáticos
└── styles/           # Estilos globales
```

## 🔗 API Endpoints

La aplicación se comunica con un backend Flask en `http://localhost:5001`:

- POST `/api/volumen-maceta` - Cálculo de volumen de macetas
- POST `/api/resistencia-maceta` - Verificación de resistencia
- POST `/api/volumen-cono` - Cálculo de volumen de conos

## 👥 Contribución

1. Fork del repositorio
2. Crear rama para nueva característica (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## ✉️ Contacto

Juan Carlos - [@jcgmU](https://github.com/jcgmU)

Enlace del proyecto: [https://github.com/jcgmU/EcoShapeFront](https://github.com/jcgmU/EcoShapeFront)
