import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importa HttpClient
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes'; // Importa las rutas definidas en app.routes.ts



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Optimización de detección de cambios
    provideRouter(routes), // Configuración de rutas
    provideHttpClient(),   // Proveedor para manejar peticiones HTTP
    FormsModule     
  ],
};
