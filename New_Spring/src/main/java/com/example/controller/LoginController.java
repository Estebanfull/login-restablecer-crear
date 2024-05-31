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
package com.example.controller;

import com.example.model.UsuarioModel;
import com.example.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/api/login")
    public String login(@RequestBody UsuarioModel usuario) {
        String correo = usuario.getCorreoElectronico();
        String clave = usuario.getClave();
        
        // Imprimir valores para depuración
    System.out.println("Correo proporcionado: " + correo);
    System.out.println("Clave proporcionada: " + clave);

        // Utilizamos el servicio para buscar el usuario por correo y clave
        UsuarioModel usuarioEncontrado = usuarioService.getUsuarioByCorreoYClave(correo, clave);
        if (usuarioEncontrado != null) {
            return "Credenciales válidas";
        } else {
            return "Credenciales incorrectas";
        }
    }
}
