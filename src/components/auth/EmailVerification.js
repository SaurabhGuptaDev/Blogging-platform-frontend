// components/auth/EmailVerification.js
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './EmailVerification.css';

const EmailVerification = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = React.useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await api.get(`/verify-email/${token}`);
        setMessage(res.data.message);
      } catch (error) {
        console.error(error.response.data.message);
        setMessage(error.response.data.message);
      }
    };
    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="email-verification-container">
      <h2>Email Verification</h2>
      <p>{message}</p>
    </div>
  );
};

export default EmailVerification;
