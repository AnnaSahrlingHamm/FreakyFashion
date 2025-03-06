import React, { useState } from 'react';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    postal_code: '',
    city: '',
    phone_number: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Formulär skickat:', formData);
  
    try {
      const response = await fetch('http://localhost:8000/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Något gick fel vid skickande av formuläret');
      }
  
      const result = await response.json();
      console.log('Svar från servern:', result);
    } catch (error) {
      console.error('Fel:', error);
    }
  };

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <h3>Förnamn</h3>
      <input
        type="text"
        name="first_name"
        placeholder="Ange förnamn"
        value={formData.first_name}
        onChange={handleInputChange}
      />

      <h3>Efternamn</h3>
      <input
        type="text"
        name="last_name"
        placeholder="Ange efternamn"
        value={formData.last_name}
        onChange={handleInputChange}
      />

      <h3>E-post</h3>
      <input
        type="text"
        name="email"
        placeholder="Ange e-post"
        value={formData.email}
        onChange={handleInputChange}
      />

      <h3>Adress</h3>
      <input
        type="text"
        name="address"
        placeholder="Ange adress"
        value={formData.address}
        onChange={handleInputChange}
      />

      <h3>Postnummer</h3>
      <input
        type="text"
        name="postal_code"
        placeholder="Ange postnummer"
        value={formData.postal_code}
        onChange={handleInputChange}
      />

      <h3>Stad</h3>
      <input
        type="text"
        name="city"
        placeholder="Ange stad"
        value={formData.city}
        onChange={handleInputChange}
      />

      <h3>Telefonnummer</h3>
      <input
        type="text"
        name="phone_number"
        placeholder="Ange telefonnummer"
        value={formData.phone_number}
        onChange={handleInputChange}
      />

      <br />
      <br />
      <button type="submit">Skicka</button>
    </form>
  );
};

export default CustomerForm;