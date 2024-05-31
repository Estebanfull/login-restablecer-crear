/*
 * Copyright 2024 Esteban_Rey.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.example.service;

import com.example.model.TrabajadorModel;
import com.example.repository.TrabajadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrabajadorService {

    @Autowired
    private TrabajadorRepository trabajadorRepository;

    // Método para obtener todos los trabajadores
    public List<TrabajadorModel> getAllTrabajadores() {
        return (List<TrabajadorModel>) trabajadorRepository.findAll();
    }

    // Método para obtener un trabajador por su ID
    public Optional<TrabajadorModel> getTrabajadorById(Long id) {
        return trabajadorRepository.findById(id);
    }

    // Método para guardar un trabajador
    public TrabajadorModel saveTrabajador(TrabajadorModel trabajador) {
        return trabajadorRepository.save(trabajador);
    }

    // Método para eliminar un trabajador por su ID
    public void deleteTrabajador(Long id) {
        trabajadorRepository.deleteById(id);
    }

    public TrabajadorModel getTrabajadorByCorreoYClave(String correo, String clave) {
        if (correo == null || clave == null) {
            // Manejo del caso en el que correo o clave sean nulos
            return null;
        }
        // Utilizamos el método findByCorreoElectronicoAndClave del repositorio
        return trabajadorRepository.findByCorreoElectronicoAndClave(correo, clave);
    }

   public TrabajadorModel getTrabajadorByCorreo(String correo) {
    if (correo == null) {
        // Manejo del caso en el que el correo sea nulo
        return null;
    }
    // Utilizamos el método findByCorreoElectronico del repositorio
    return trabajadorRepository.findByCorreoElectronico(correo);
}

}
