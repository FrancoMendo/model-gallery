/**
 * Configuración del perfil de usuario/modelo
 */

export const profileConfig = {
  name: 'Magalí Matas',
  photo: '/src/assets/images/profile.jpg', // Cambia esta ruta por tu foto
  role: 'Modelo & Actriz Profesional',
  
  social: {
    instagram: {
      url: 'https://www.instagram.com/magalimatas/',
      username: '@tu_usuario',
    },
    email: {
      address: 'contacto@tumail.com',
      subject: 'Consulta desde Model Gallery',
    },
  },

  bio: 'Modelo y actriz profesional especializada en moda, editorial y comercial.',
} as const;

export default profileConfig;

