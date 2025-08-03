import React, { useState } from 'react';
import './styles.css';

function AsteriskFieldValidation() {
  const [formData, setFormData] = useState({ name: '', location: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setSuccess('');
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' }); //
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.location.trim()) newErrors.location = 'Location is required.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess('Submitted Successfully!');
      setSubmittedData(formData);
      setFormData({ name: '', location: '' });
    }
  };

  return (
    <div className="container">
      <h1 className="title">Asterisk Field Validation</h1>
      <form data-testid="form" className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name <span className="asterisk">*</span>
          </label>
          <input
            data-testid="name-input"
            id="name"
            className={`input ${errors.name ? 'input-error' : ''}`}
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p data-testid="name-error" className="error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="location" className="label">
            Location <span className="asterisk">*</span>
          </label>
          <input
            data-testid="location-input"
            id="location"
            className={`input ${errors.location ? 'input-error' : ''}`}
            type="text"
            placeholder="Enter your location"
            value={formData.location}
            onChange={handleChange}
          />
          {errors.location && (
            <p data-testid="location-error" className="error">
              {errors.location}
            </p>
          )}
        </div>

        <button
          data-testid="submit-button"
          type="submit"
          className="submit-button"
        >
          Submit
        </button>
      </form>

      {success && submittedData && (
        <div className="success-message">
          <p data-testid="success-message">{success}</p>
          <p>Name: {submittedData.name}</p>
          <p>Location: {submittedData.location}</p>
        </div>
      )}
    </div>
  );
}

export default AsteriskFieldValidation;
