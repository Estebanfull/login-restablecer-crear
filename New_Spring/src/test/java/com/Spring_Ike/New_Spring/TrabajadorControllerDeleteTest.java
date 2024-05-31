package com.Spring_Ike.New_Spring;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.controller.TrabajadorController;
import com.example.model.Trabajador;
import com.example.service.TrabajadorService;

public class TrabajadorControllerDeleteTest {

    private TrabajadorService trabajadorService;
    private TrabajadorController trabajadorController;

    @BeforeEach
    public void setUp() {
        trabajadorService = mock(TrabajadorService.class);
        trabajadorController = new TrabajadorController(trabajadorService);
    }

    @Test
    public void testDeleteTrabajador() {
        // Arrange
        Long trabajadorId = 1L;

        // Act
        ResponseEntity<Void> response = trabajadorController.deleteTrabajador(trabajadorId);

        // Assert
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        verify(trabajadorService, times(1)).deleteTrabajador(trabajadorId);
    }
}
