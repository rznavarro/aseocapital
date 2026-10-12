import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export function WhatsAppIcon({ className = 'w-5 h-5', color = '#25D366' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.5 11.8C20.5 16.7706 16.4706 20.8 11.5 20.8C9.9 20.8 8.4 20.4 7.1 19.6L3.5 20.7L4.6 17.2C3.7 15.7 3.2 14.1 3.2 12.3C3.2 7.32944 7.22944 3.3 12.2 3.3C17.1706 3.3 21.2 7.32944 21.2 12.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 14.4C17.2 14.2 15.7 13.5 15.4 13.4C15.1 13.3 14.9 13.2 14.7 13.6C14.5 14 13.9 14.7 13.7 14.9C13.5 15.1 13.3 15.1 13 14.9C12.7 14.7 11.7 14.4 10.6 13.4C9.7 12.6 9.1 11.6 8.9 11.3C8.7 11 8.9 10.8 9.1 10.6C9.2 10.5 9.4 10.3 9.6 10.1C9.7 9.9 9.8 9.8 9.9 9.6C10 9.4 10 9.2 9.9 9.1C9.8 9 9.2 7.6 9 7.1C8.8 6.6 8.6 6.7 8.4 6.7H7.9C7.7 6.7 7.4 6.8 7.1 7.1C6.8 7.4 6 8.2 6 9.8C6 11.4 7.2 12.9 7.4 13.1C7.6 13.3 9.8 16.7 13.1 18.1C16.4 19.5 16.4 19.1 17 19C17.6 18.9 18.8 18.2 19.1 17.4C19.4 16.6 19.4 15.9 19.3 15.7C19.2 15.5 19 15.4 18.7 15.2L17.5 14.4Z"
        fill={color}
      />
    </svg>
  );
}

export function PhoneIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function LocationIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function MailIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = 'w-4 h-4' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function CheckIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function CloseIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ChevronDownIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
