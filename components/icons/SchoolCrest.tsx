
import React from 'react';

export const SchoolCrest: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5zm0-6l10 5 10-5-10-5-10 5z"
      clipRule="evenodd"
    />
    <path d="M4 10.2V17l8 4v-6.8l-8-4zM12 14.2V21l8-4v-6.8l-8 4z" />
  </svg>
);
