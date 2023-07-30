import React from 'react';

export function useDropdown() {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const toggleDropdown = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return { isExpanded, toggleDropdown };
}
