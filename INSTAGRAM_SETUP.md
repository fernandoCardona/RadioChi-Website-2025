# Configuración de la Integración con Instagram

Este documento explica cómo configurar la integración con Instagram para mostrar automáticamente posts y reels en el componente MyJournalSection.

## Requisitos previos

1. Una cuenta de Instagram profesional o de creador
2. Una cuenta de desarrollador de Facebook
3. Una aplicación de Facebook configurada

## Pasos para obtener un token de acceso de Instagram

### 1. Crear una aplicación de Facebook

1. Ve a [Facebook for Developers](https://developers.facebook.com/)
2. Inicia sesión con tu cuenta de Facebook
3. Haz clic en "Mis aplicaciones" y luego en "Crear aplicación"
4. Selecciona "Consumidor" como tipo de aplicación
5. Completa la información requerida y crea la aplicación

### 2. Configurar Instagram Basic Display

1. En el panel de la aplicación, ve a "Productos" en el menú lateral
2. Busca "Instagram Basic Display" y haz clic en "Configurar"
3. En "Configuración básica", añade la URL de tu sitio web en "Dominios del sitio web"
4. En "Redirección de OAuth", añade:
   - `https://tudominio.com/auth/instagram/callback`
   - `https://localhost:3000/auth/instagram/callback` (para desarrollo local)

### 3. Añadir un usuario de prueba de Instagram

1. Ve a "Roles" > "Usuarios de prueba"
2. Haz clic en "Añadir usuarios de prueba de Instagram"
3. Ingresa tu nombre de usuario de Instagram y haz clic en "Enviar"

### 4. Obtener un token de acceso

1. Ve a "Productos" > "Instagram Basic Display" > "Instagram Test Users"
2. Haz clic en "Generate Token" para tu usuario de prueba
3. Sigue las instrucciones para autorizar la aplicación
4. Copia el token de acceso generado

## Configuración en el proyecto

1. Crea un archivo `.env` en la raíz del proyecto basado en `.env.example`
2. Añade tu token de acceso:
   ```
   INSTAGRAM_ACCESS_TOKEN=tu_token_de_acceso_aqui
   ```

3. Reinicia el servidor de desarrollo para que los cambios surtan efecto

## Notas importantes

- Los tokens de acceso de Instagram Basic Display caducan después de 60 días
- Para un entorno de producción, considera implementar un proceso de renovación automática de tokens
- La API de Instagram tiene límites de tasa. Consulta la [documentación oficial](https://developers.facebook.com/docs/instagram-basic-display-api/overview) para más detalles

## Solución de problemas

Si encuentras errores al obtener datos de Instagram:

1. Verifica que tu token de acceso sea válido y no haya caducado
2. Asegúrate de que tu cuenta de Instagram esté configurada como cuenta profesional o de creador
3. Revisa los registros del servidor para ver mensajes de error específicos

Para más información, consulta la [documentación oficial de Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api).