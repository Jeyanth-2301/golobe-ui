import React from 'react';
import ConfirmationForm from './ConfirmationForm';

const Main = () => {
  const bookingDetails = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    checkInDate: '2023-08-10',
    checkOutDate: '2023-08-15',
    roomType: 'Deluxe Room',
  };

  return (
    <div>
      <ConfirmationForm bookingDetails={bookingDetails} />
    </div>
  );
};

export default Main;
