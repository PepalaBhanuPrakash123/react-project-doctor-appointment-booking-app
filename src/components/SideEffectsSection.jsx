import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css';
import './side-effects-responsive.css';

const specialists = [
  {
    image: 'https://medical.rossu.edu/sites/g/files/krcnkv261/files/styles/atge_3_2_crop_md/public/2022-04/General-Surgery.jpg?h=f9d06ff2&itok=4reF5_6o',
    title: 'General Surgeon',
    description: 'Expert in surgical procedures including appendectomy, hernia repair, and other essential operations with post-op care.',
  },
  {
    image: 'https://midamortho.com/wp-content/uploads/2022/08/orthopedic-doctor.jpg',
    title: 'Orthopedist',
    description: 'Treats joint pain, arthritis, fractures, and spinal disorders with advanced diagnostics and physiotherapy support.',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1664302336737-37fce6daca3c?fm=jpg&q=60&w=3000',
    title: 'General Physician',
    description: 'Family doctor handling chronic conditions, preventive care, regular check-ups, and early detection of health risks.',
  },
  {
    image: 'https://www.newportchildren.com/wp-content/uploads/PediatricianRelationshipNewport.jpg',
    title: 'Pediatrician',
    description: 'Specialist in infant and child health, including vaccinations, nutrition advice, and developmental milestones.',
  },
  {
    image: 'https://drhanandermatologyclinic.com/wp-content/uploads/2024/09/top_5_best_skin_clinics_in_chennai_for_best_dermatologist.jpg',
    title: 'Dermatologist',
    description: 'Treats skin, hair, and nail disorders including acne, eczema, and skin allergies with modern dermatologic care.',
  },
  {
    image: 'https://img.freepik.com/free-photo/young-doctor-listen-female-patient-heart-chest-with-stethoscope-clinic-meeting-man-gp-checkup-examine-woman-client-with-phonendoscope-healthcare-concept_657921-829.jpg?semt=ais_hybrid&w=740',
    title: 'Cardiologist',
    description: 'Expert in heart health — treating hypertension, heart attacks, and cardiac-related issues with diagnostics and prevention.',
  },
  {
    image: 'https://www.breathewellbeing.in/blog/wp-content/uploads/2021/05/shutterstock_1726917898.jpg',
    title: 'Diabetologist',
    description: 'Focused on diabetes control, medication management, diet guidance, and long-term health improvement plans.',
  },
  {
    image: 'https://www.venkateshwarhospitals.com/images/ent-pic.jpg',
    title: 'ENT Specialist',
    description: 'Cares for conditions related to ear, nose, and throat including infections, sinus issues, and hearing loss.',
  },
];


const articles = [
  {
    category: 'CORONAVIRUS',
    title: '12 Coronavirus Myths and Facts That You Should Be Aware Of',
    author: 'Dr. Diana Borgio',
    image:
      'https://cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/MQDDQHNN3P6E6V3H5JD2CWUULU.jpg',
  },
  {
    category: 'VITAMINS AND SUPPLEMENTS',
    title: 'Eating Right to Build Immunity Against Cold and Viral Infections',
    author: 'Dr. Diana Borgio',
    image:
      'https://img.freepik.com/free-photo/mixed-fruits-with-apple-banana-orange-other_74190-938.jpg',
  },
];

export default function SideEffectsSection() {
  const navigate = useNavigate();

  const handleSeeArticles = () => {
    navigate('/articles');
  };

  return (
    <div>
      <section className="carousel-section">
        <h2 className="carousel-title">
          Book an appointment for an in-clinic consultation
        </h2>
        <p className="carousel-subtitle">
          Find experienced doctors across all specialties
        </p>

       <Splide
  options={{
    type: 'loop',
    perPage: 3,
    autoplay: true,
    interval: 2000,
    pauseOnHover: true,
    gap: '1.5rem',
    breakpoints: {
      1024: { perPage: 2 },
      768: { perPage: 1 }
    }
  }}
>
  {specialists.map((spec, idx) => (
    <SplideSlide key={idx}>
      <div className="specialist-card">
        <img src={spec.image} alt={spec.title} className="specialist-card-img" />
        <div className="specialist-card-body">
          <h3 className="specialist-title">{spec.title}</h3>
          <p className="specialist-description">{spec.description}</p>
        </div>
      </div>
    </SplideSlide>
  ))}
</Splide>
      </section>

      <div style={{ borderTop: '1px solid #eee', margin: '40px 0' }} />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>
              Read top articles from health experts
            </h2>
            <p style={{ color: '#555', marginBottom: '24px' }}>
              Health articles that keep you informed about good health
              practices and achieve your goals.
            </p>
            <button
              onClick={handleSeeArticles}
              style={{
                background: '#02b3e4',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                padding: '12px 32px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              See all articles
            </button>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '32px',
              flex: 2,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {articles.map((art, idx) => (
              <div
                key={idx}
                style={{
                  width: '320px',
                  background: '#fafafa',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={art.image}
                  alt={art.title}
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                  }}
                />
                <div style={{ padding: '18px' }}>
                  <div
                    style={{
                      color: '#02b3e4',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                    }}
                  >
                    {art.category}
                  </div>
                  <h4
                    style={{
                      margin: '8px 0',
                      fontSize: '1.18rem',
                      lineHeight: '1.4',
                    }}
                  >
                    {art.title}
                  </h4>
                  <div style={{ color: '#888', fontSize: '0.95rem' }}>
                    {art.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}