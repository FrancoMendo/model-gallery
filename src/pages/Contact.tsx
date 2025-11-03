/**
 * Página de Contacto
 */

import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { profileConfig } from '../config/profile.config';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simular envío - aquí irían a tu backend o servicio de email
    setTimeout(() => {
      // Por ahora, abrir email con los datos
      const emailBody = `
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Asunto: ${formData.subject}

Mensaje:
${formData.message}
      `.trim();

      const mailtoLink = `mailto:${profileConfig.social.email.address}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      setTimeout(() => setFormStatus('idle'), 3000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f8f9f7',
    }}>
      <Header />

      {/* Hero Section */}
      <section style={{
        backgroundColor: 'white',
        padding: '40px 20px',
        borderBottom: '1px solid #e3e6df',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '800',
            color: '#1a1a18',
            marginBottom: '16px',
          }}>
            Contacto
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#3f3f39',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            ¿Interesado en colaborar? Completa el formulario y me pondré en contacto contigo.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section style={{
        padding: '60px 20px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
        }}>
          {/* Información de Contacto */}
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            height: 'fit-content',
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1a1a18',
              marginBottom: '24px',
            }}>
              Información de Contacto
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}>
              {/* Email */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#f0f2ed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#467e03" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#707066',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    Email
                  </h3>
                  <a
                    href={`mailto:${profileConfig.social.email.address}`}
                    style={{
                      fontSize: '16px',
                      color: '#467e03',
                      textDecoration: 'none',
                      fontWeight: '500',
                    }}
                  >
                    {profileConfig.social.email.address}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#f0f2ed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#467e03" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#707066',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    Instagram
                  </h3>
                  <a
                    href={profileConfig.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '16px',
                      color: '#467e03',
                      textDecoration: 'none',
                      fontWeight: '500',
                    }}
                  >
                    {profileConfig.social.instagram.username}
                  </a>
                </div>
              </div>

              {/* Disponibilidad */}
              <div style={{
                marginTop: '24px',
                padding: '20px',
                backgroundColor: '#f0f2ed',
                borderRadius: '8px',
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1a1a18',
                  marginBottom: '8px',
                }}>
                  Disponibilidad
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#3f3f39',
                  margin: 0,
                  lineHeight: '1.6',
                }}>
                  Disponible para proyectos nacionales e internacionales. Tiempo de respuesta: 24-48 horas.
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1a1a18',
              marginBottom: '24px',
            }}>
              Enviar Mensaje
            </h2>

            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              {/* Nombre */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#3f3f39',
                  marginBottom: '8px',
                }}>
                  Nombre *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '2px solid #e3e6df',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#467e03'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e3e6df'}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#3f3f39',
                  marginBottom: '8px',
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '2px solid #e3e6df',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#467e03'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e3e6df'}
                />
              </div>

              {/* Teléfono */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#3f3f39',
                  marginBottom: '8px',
                }}>
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '2px solid #e3e6df',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#467e03'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e3e6df'}
                />
              </div>

              {/* Asunto */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#3f3f39',
                  marginBottom: '8px',
                }}>
                  Asunto *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '2px solid #e3e6df',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    backgroundColor: 'white',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#467e03'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e3e6df'}
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="Sesión Fotográfica">Sesión Fotográfica</option>
                  <option value="Campaña Publicitaria">Campaña Publicitaria</option>
                  <option value="Actuación">Actuación</option>
                  <option value="Colaboración">Colaboración</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#3f3f39',
                  marginBottom: '8px',
                }}>
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '2px solid #e3e6df',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#467e03'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e3e6df'}
                />
              </div>

              {/* Botón enviar */}
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                style={{
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'white',
                  backgroundColor: formStatus === 'sending' ? '#9fa499' : '#467e03',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: formStatus === 'sending' ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  if (formStatus !== 'sending') {
                    e.currentTarget.style.backgroundColor = '#3d6f03';
                  }
                }}
                onMouseLeave={(e) => {
                  if (formStatus !== 'sending') {
                    e.currentTarget.style.backgroundColor = '#467e03';
                  }
                }}
              >
                {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {/* Mensajes de estado */}
              {formStatus === 'success' && (
                <div style={{
                  padding: '16px',
                  backgroundColor: '#e3efd4',
                  color: '#335c02',
                  borderRadius: '8px',
                  fontSize: '14px',
                  textAlign: 'center',
                }}>
                  ✓ Mensaje enviado correctamente
                </div>
              )}

              {formStatus === 'error' && (
                <div style={{
                  padding: '16px',
                  backgroundColor: '#fee2e2',
                  color: '#b91c1c',
                  borderRadius: '8px',
                  fontSize: '14px',
                  textAlign: 'center',
                }}>
                  ✗ Error al enviar el mensaje. Intenta de nuevo.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

