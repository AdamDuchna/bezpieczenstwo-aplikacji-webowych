import './App.css';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'


function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>...</ReactKeycloakProvider>
  );
}

export default App;
