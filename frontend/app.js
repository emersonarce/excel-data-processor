async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert("Selecciona un archivo primero");
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://excel-data-processor-na1d.onrender.com/upload', {

        method: 'POST',
        body: formData
    });

    const data = await response.json();

    renderData(data);
}

function renderData(data) {
    let html = `
        <div class="summary">
            <h3>Resumen</h3>
            <p><strong>Total registros:</strong> ${data.total_registros}</p>
            <p><strong>Suma:</strong> ${data.suma_valores}</p>
            <p><strong>Promedio:</strong> ${data.promedio}</p>
        </div>
    `;

    html += "<table>";
    html += "<tr><th>Nombre</th><th>Valor</th></tr>";

    data.data.forEach(row => {
        html += `
            <tr>
                <td>${row.nombre}</td>
                <td>${row.valor}</td>
            </tr>
        `;
    });

    html += "</table>";

    document.getElementById('result').innerHTML = html;
}
