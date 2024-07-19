import React, { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ show, onClose, onSubmit }) => {
  const [referralName, setreferralName] = useState("");
  const [referralEmail, setreferralEmail] = useState("");
  const [referralDetails, setreferralDetails] = useState("");
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ referralName, referralEmail, referralDetails, referrerName, referrerEmail });
    setreferralName("");
    setreferralEmail("");
    setreferralDetails("");
    setReferrerName("");
    setReferrerEmail("");
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
        <h2 className="text-2xl mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Referral Name
            </label>
            <input
              id="name"
              type="text"
              value={referralName}
              onChange={(e) => setreferralName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Referral Email
            </label>
            <input
              id="email"
              type="email"
              value={referralEmail}
              onChange={(e) => setreferralEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="referral">
              Referral Details
            </label>
            <textarea
              id="referral"
              value={referralDetails}
              onChange={(e) => setreferralDetails(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="referrerName">
              Referrer Name
            </label>
            <input
              id="referrerName"
              type="text"
              value={referrerName}
              onChange={(e) => setReferrerName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="referrerEmail">
              Referrer Email
            </label>
            <input
              id="referrerEmail"
              type="email"
              value={referrerEmail}
              onChange={(e) => setReferrerEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Modal;
