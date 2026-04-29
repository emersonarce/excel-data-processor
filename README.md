# 📊 Excel Data Processor

Aplicación web fullstack que permite subir archivos Excel, procesarlos automáticamente y visualizar los datos de forma estructurada en una interfaz moderna.

## 🌐 Demo en vivo

👉 https://excel-data-processor-2.onrender.com/

⚠️ Nota: El servidor puede tardar unos segundos en responder debido al uso del plan gratuito de Render.

---

## 🚀 Características

* Subida de archivos Excel desde el navegador
* Procesamiento y limpieza de datos
* Cálculo de métricas (total, suma, promedio)
* Visualización en tabla dinámica
* Validación de datos en backend
* Interfaz moderna y responsiva

---

## 🧠 Tecnologías utilizadas

* **Backend:** Node.js, Express
* **Frontend:** HTML, CSS, JavaScript
* **Procesamiento de datos:** XLSX
* **Otros:** Multer, CORS

---

## 📂 Estructura del proyecto

excel-data-processor/
│
├── backend/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── index.html
│   ├── app.js
│   ├── style.css
│
└── README.md

---

## ⚙️ Instalación

### 1. Clonar repositorio

git clone https://github.com/emersonarce/excel-data-processor.git

### 2. Backend

cd backend
npm install
node server.js

### 3. Frontend

Abrir el archivo `frontend/index.html` en el navegador

---

## 📊 Uso

Sube un archivo Excel con las columnas:

* `nombre`
* `valor`

Ejemplo:

| nombre | valor |
| ------ | ----- |
| Juan   | 10    |
| Ana    | 20    |

La aplicación procesará los datos y mostrará:

* Total de registros
* Suma de valores
* Promedio
* Tabla de datos

---

## 📸 Vista previa

![Vista de la app](screenshot.png)

---

## 🔥 Futuras mejoras

* Dashboard con gráficos
* Exportación de resultados
* Autenticación de usuarios
* Dockerización del proyecto
* Despliegue en AWS con Terraform

---

## 👨‍💻 Autor

Emerson Arce
Proyecto desarrollado como parte de portafolio enfocado en desarrollo, automatización y cloud.
