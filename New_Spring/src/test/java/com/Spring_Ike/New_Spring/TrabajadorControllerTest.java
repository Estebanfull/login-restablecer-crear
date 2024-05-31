package com.Spring_Ike.New_Spring;

import com.example.controller.TrabajadorController;
import com.example.model.Trabajador;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.example.service.TrabajadorService;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TrabajadorControllerTest {

    @Mock
    private TrabajadorService trabajadorService;

    @InjectMocks
    private TrabajadorController trabajadorController;

    @Test
    void testCreateTrabajador() {
        // Arrange
        Trabajador trabajador = new Trabajador();
        trabajador.setNombre("Juan Perez");
        trabajador.setCorreo("juan.perez@example.com");

        Trabajador savedTrabajador = new Trabajador();
        savedTrabajador.setId(1L);
        savedTrabajador.setNombre("Juan Perez");
        savedTrabajador.setCorreo("juan.perez@example.com");

        when(trabajadorService.createTrabajador(trabajador)).thenReturn(savedTrabajador);

        // Act
        ResponseEntity<Trabajador> response = trabajadorController.createTrabajador(trabajador);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(savedTrabajador, response.getBody());

        // Verify
        verify(trabajadorService, times(1)).createTrabajador(trabajador);
    }
}
