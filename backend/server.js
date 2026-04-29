const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }
});

app.get('/', (req, res) => {
    res.send('API Excel Processor funcionando 🚀');
});

app.post('/upload', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                error: 'No se envió ningún archivo'
            });
        }

        if (!req.file.originalname.endsWith('.xlsx')) {
            return res.status(400).json({
                error: 'Solo se permiten archivos .xlsx'
            });
        }

        const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const data = XLSX.utils.sheet_to_json(sheet);

        if (data.length === 0) {
            return res.status(400).json({
                error: 'El archivo está vacío'
            });
        }

        const cleanedData = data.map((row, index) => {
            return {
                id: index + 1,
                nombre: row.nombre ? String(row.nombre).trim() : "Sin nombre",
                valor: row.valor ? Number(row.valor) : 0
            };
        });

        const total = cleanedData.length;
        const suma = cleanedData.reduce((acc, row) => acc + row.valor, 0);
        const promedio = total > 0 ? (suma / total) : 0;

        res.json({
            mensaje: "Archivo procesado correctamente",
            total_registros: total,
            suma_valores: suma,
            promedio: promedio,
            data: cleanedData
        });

    } catch (error) {
        console.error('Error procesando archivo:', error);

        res.status(500).json({
            error: 'Error interno procesando el archivo'
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
