# Journal APP

La Journal APP es una aplicación que permite a los usuarios validar su identidad o registrarse para acceder a un diario personal. Una vez autenticados, los usuarios pueden agregar eventos que han ocurrido durante el día, incluyendo la fecha y descripciones. La aplicación proporciona funciones para crear, leer, actualizar y eliminar eventos.

El frontend de la aplicación se centra en la estructura y el diseño del calendario, haciendo uso de componentes de terceros para la interfaz de usuario. Se utilizan modales para la interacción con los eventos, y se configura Redux para gestionar el estado de la aplicación. Además, se implementa un CRUD local para el manejo de eventos y se hace uso de MomentJS para el manejo de fechas.

Este frontend es la primera fase del desarrollo MERN (Mongo, Express, React, Node), y está diseñado para ser integrado con el backend posteriormente.

El backend de la aplicación está construido con Node.js y Express, utilizando Mongoose para la interacción con la base de datos MongoDB. Se implementan modelos de datos, controladores y middlewares de Express para gestionar la lógica de negocio y la seguridad de la aplicación. Se utiliza JWT para la autenticación de usuarios, con encriptación de contraseñas y manejo de tokens. También se incluye soporte para CORS y revalidación de tokens.

El backend proporciona un CRUD completo para los eventos del calendario, con modelos y validaciones automáticas y personalizadas.

Se integra el frontend y el backend, con un enfoque específico en la autenticación y el manejo de tokens JWT. 

