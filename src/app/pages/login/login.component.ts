import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Asumimos que es un componente Standalone (lo estándar en Angular moderno)
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,         // Necesario para directivas como *ngIf, *ngFor, etc.
    ReactiveFormsModule   // ¡Esencial para los formularios reactivos!
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      // Definimos los campos del formulario y sus validaciones
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Un "getter" para acceder fácilmente a los controles del formulario desde el HTML
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    // Si el formulario no es válido, no hacemos nada
    if (this.loginForm.invalid) {
      // Marcar todos los campos como "tocados" para que se muestren los errores
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    // --- SIMULACIÓN DE LLAMADA A API ---
    // Aquí es donde llamarías a tu servicio de autenticación
    console.log('Datos enviados:', this.loginForm.value);
    
    setTimeout(() => {
      // Simulación de respuesta exitosa
      if (this.loginForm.value.email === 'test@test.com' && this.loginForm.value.password === 'password') {
        console.log('¡Login exitoso!');
        // Aquí redirigirías al usuario al dashboard, por ejemplo:
        // this.router.navigate(['/dashboard']);
      } else {
        // Simulación de respuesta con error
        this.errorMessage = 'El correo electrónico o la contraseña son incorrectos.';
      }
      
      this.isLoading = false;
    }, 1500); // Simulamos 1.5 segundos de espera de la red
  }
}