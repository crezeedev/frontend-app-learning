#!/bin/bash

# 1. Definir rutas
echo "⬇️  Descargando traducciones para Learning MFE..."
DEST_DIR="./src/i18n/messages"
DEST_FILE="$DEST_DIR/es-419.json"

# Crear directorio si no existe
mkdir -p $DEST_DIR

# 2. Descargar el archivo JSON oficial desde el repositorio de traducciones de Open edX
# Usamos curl para traer el json crudo.
curl -o $DEST_FILE https://raw.githubusercontent.com/openedx-i18n/openedx-i18n/master/edx-platform/locale/es_419/LC_MESSAGES/frontend-app-learning.json

# Verificación simple
if [ -f "$DEST_FILE" ]; then
    echo "✅ Archivo es-419.json creado exitosamente en $DEST_DIR"
else
    echo "❌ Error al descargar el archivo."
    exit 1
fi

# 3. NOTA IMPORTANTE PARA EL USUARIO
echo "---------------------------------------------------"
echo "⚠️  ATENCIÓN: Ahora debes registrar este archivo en src/i18n/index.js"
echo "    o src/i18n/index.jsx para que la app lo reconozca."
echo "---------------------------------------------------"
