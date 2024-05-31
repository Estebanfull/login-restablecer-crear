package com.Spring_Ike.New_Spring;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.controller.TrabajadorController;
import com.example.model.Trabajador;
import com.example.service.TrabajadorService;

public class TrabajadorControllerUpdateTest {

    private TrabajadorService trabajadorService;
    private TrabajadorController trabajadorController;

    @BeforeEach
    public void setUp() {
        trabajadorService = mock(TrabajadorService.class);
        trabajadorController = new TrabajadorController(trabajadorService);
    }

    @Test
    public void testUpdateTrabajador() {
        // Arrange
        Long trabajadorId = 1L;
        Trabajador trabajadorToUpdate = new Trabajador();
        trabajadorToUpdate.setId(trabajadorId);
        trabajadorToUpdate.setNombre("NuevoNombre");
        trabajadorToUpdate.setEdad(30);
        trabajadorToUpdate.setCargo("NuevoCargo");

        Trabajador updatedTrabajador = new Trabajador();
        updatedTrabajador.setId(trabajadorId);
        updatedTrabajador.setNombre("NuevoNombre");
        updatedTrabajador.setEdad(30);
        updatedTrabajador.setCargo("NuevoCargo");

        when(trabajadorService.updateTrabajador(trabajadorId, trabajadorToUpdate)).thenReturn(updatedTrabajador);

        // Act
        ResponseEntity<Trabajador> response = trabajadorController.updateTrabajador(trabajadorId, trabajadorToUpdate);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(updatedTrabajador, response.getBody());
    }
}
