import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Chat from './components/Chat';

const container = document.getElementById('chat-root');
if (container) {
  createRoot(container).render(
    <StrictMode>
      <Chat />
    </StrictMode>
  );
}
