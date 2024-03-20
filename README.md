# Journal APP

## Descripción

Journal APP es una aplicación de diario personal que te permite registrar eventos, guardar recuerdos y subir imágenes para cada día. La aplicación requiere registro para acceder, con la opción de registrarse mediante Google para mayor comodidad.

## Características

- **Registro de Usuario:** Los usuarios deben registrarse para acceder a la aplicación, con la opción de registrarse fácilmente mediante Google.
- **Registro de Eventos:** Los usuarios pueden guardar eventos que han experimentado en el día.
- **Guardado de Recuerdos:** La aplicación permite a los usuarios guardar recuerdos especiales.
- **Subida de Imágenes:** Los usuarios pueden subir imágenes para acompañar sus eventos y recuerdos.
- **Gestión de Eventos:** La aplicación permite actualizar, modificar y eliminar eventos registrados.

## Tecnologías Utilizadas

- **Material UI:** Utiliza componentes y funciones propias de Material UI para la interfaz de usuario.
- **Redux:** Implementa Redux para el manejo del estado de la aplicación, incluyendo store, middlewares, dispatch, acciones asíncronas y slices.
- **RTK Query:** Utiliza Redux Toolkit para la gestión eficiente del estado, con RTK Query para realizar consultas a la base de datos.
- **Firebase:** Emplea Firebase para la autenticación de usuarios (Google SignIn), almacenamiento de datos en Firestore y mantener el estado de la autenticación.
- **Redux Devtools:** Integra Redux Devtools para facilitar la depuración y supervisión del estado de la aplicación.
- **Thunk:** Utiliza Thunk como middleware de Redux para gestionar acciones asíncronas.
- **Formularios:** Implementa formularios para la entrada de datos por parte del usuario.
- **CRUD hacia Firestore:** Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) hacia Firestore para gestionar eventos y recuerdos.
- **Selección y Subida de Archivos:** Ofrece la funcionalidad de seleccionar y subir archivos, como imágenes, para acompañar los eventos.
- **Animaciones:** Incluye animaciones adicionales para mejorar la experiencia del usuario.
- **Limpieza en el Logout:** Realiza limpieza adecuada en el cierre de sesión para mantener la integridad de la aplicación.
