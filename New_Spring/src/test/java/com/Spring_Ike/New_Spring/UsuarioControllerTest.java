package com.Spring_Ike.New_Spring;

import com.example.controller.UsuarioController;
import com.example.model.Usuario;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.example.service.UsuarioService;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UsuarioControllerTest {

    @Mock
    private UsuarioService usuarioService;

    @InjectMocks
    private UsuarioController usuarioController;

    @Test
    void testLogin_Successful() {
        // Arrange
        Usuario usuario = new Usuario();
        usuario.setCorreoElectronico("test@example.com");
        usuario.setClave("password");

        when(usuarioService.findByCorreoElectronicoAndClave("test@example.com", "password"))
                .thenReturn(Optional.of(usuario));

        // Act
        ResponseEntity<String> response = usuarioController.login(usuario);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Inicio de sesión exitoso", response.getBody());

        // Verify
        verify(usuarioService, times(1)).findByCorreoElectronicoAndClave("test@example.com", "password");
    }

    @Test
    void testLogin_Unsuccessful() {
        // Arrange
        Usuario usuario = new Usuario();
        usuario.setCorreoElectronico("test@example.com");
        usuario.setClave("password");

        when(usuarioService.findByCorreoElectronicoAndClave("test@example.com", "password"))
                .thenReturn(Optional.empty());

        // Act
        ResponseEntity<String> response = usuarioController.login(usuario);

        // Assert
        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
        assertEquals("Credenciales incorrectas", response.getBody());

        // Verify
        verify(usuarioService, times(1)).findByCorreoElectronicoAndClave("test@example.com", "password");
    }
}
