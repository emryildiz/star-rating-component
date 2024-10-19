import React, { createContext, useContext, useState } from "react";

// Verimizi alıyoruz
const initialStars = [
  { id: "1", active: false, tier: 1, text:"We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right." },
  { id: "2", active: false, tier: 2, text:"We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues." },
  { id: "3", active: false, tier: 3, text:"Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve." },
  { id: "4", active: false, tier: 4, text:"Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support." },
  { id: "5", active: false, tier: 5, text:"Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service." },
];

// StarContext ve provider'ı oluşturuyoruz
const StarContext = createContext();

export const StarProvider = ({ children }) => {
  const [stars, setStars] = useState(initialStars);
  const [activeStar, setStar ] = useState(stars[0]);

  // Yıldızın aktif durumu değiştirildiğinde diğerlerini de etkileyen fonksiyon
  const setActiveStar = (id, active) => {
    // Seçilen yıldızın tier değerini bul
    const selectedStar = stars.find((star) => star.id === id);
    if (!selectedStar) return;

    const selectedTier = selectedStar.tier;

    if(active === true)
    {
      setStar(selectedStar)
    }

    // Yeni yıldız dizisini oluştur
    const updatedStars = stars.map((star) => {
      // Eğer yıldızın tier'ı seçilenden küçükse veya eşitse active true yap
      if (star.tier <= selectedTier) {
        return { ...star, active: active };
      }
      // Diğerleri için active false kalır
      return { ...star, active: false };
    });
    // Durumu güncelle
    setStars(updatedStars);
  };

  return (
    <StarContext.Provider value={{ activeStar, stars, setActiveStar }}>
      {children}
    </StarContext.Provider>
  );
};

// Kullanım için Hook
export const useStars = () => useContext(StarContext);
