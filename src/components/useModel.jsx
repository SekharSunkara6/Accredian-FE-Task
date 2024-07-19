// useModal.js

import { useCallback, useState } from "react";
import axios from "axios";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollTo = useCallback((selector) => {
    const anchor = document.querySelector(selector);
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onReferNowClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    console.log("Form submitted:", formData);
    try {
      const response = await axios.post('https://accredian-backend-task-1-q5wp.onrender.com/api/v1/createReferral', formData);
      if (response.status === 201) {
        alert('Referral created successfully');
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error('Error creating referral:', error);
      alert('Failed to create referral');
    }
  };

  return {
    isModalOpen,
    onReferNowClick,
    handleModalClose,
    handleFormSubmit,
    handleScrollTo
  };
};

export default useModal;
