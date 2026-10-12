import React from 'react';

export function Arrow({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
      {diagonal ? <path d="M6 18 18 6M9 6h9v9" /> : <path d="M5 12h14m-5-5 5 5-5 5" />}
    </svg>
  );
}

export function Plus() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 5v14M5 12h14" /></svg>;
}

export function MenuIcon({ open }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7">{open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>;
}

export function WhatsAppIcon() {
  return <svg aria-hidden="true" viewBox="0 0 32 32" width="24" height="24" fill="currentColor"><path d="M16.04 3.2A12.7 12.7 0 0 0 5.2 22.5L3.5 28.8l6.44-1.69A12.78 12.78 0 1 0 16.04 3.2Zm0 2.55a10.2 10.2 0 0 1 0 20.4c-1.8 0-3.56-.47-5.1-1.36l-.37-.22-3.82 1 1.02-3.72-.24-.38a10.16 10.16 0 0 1 8.51-15.72Zm-4.49 4.68c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.75-.72 2-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35-.3-.15-1.75-.87-2.02-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.23-.65.08-.3-.15-1.26-.47-2.4-1.48a9.01 9.01 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57Z" /></svg>;
}
