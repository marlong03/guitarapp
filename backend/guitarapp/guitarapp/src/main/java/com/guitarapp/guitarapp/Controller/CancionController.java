package com.guitarapp.guitarapp.Controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guitarapp.guitarapp.Model.Cancion;
import com.guitarapp.guitarapp.Service.CancionService;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cancion")
public class CancionController {

    @Autowired
    private CancionService cancionService;

    @GetMapping(path = "/get/all")
    public ArrayList<Cancion> obtenerCanciones(){
        return cancionService.obtenerCanciones();
    }
    @GetMapping(path = "/get/{id}")
    public Optional<Cancion>  obtenerCanciones(@PathVariable Integer id){
        return cancionService.obtenerCancion(id);
    }
    @PostMapping("/post")
    public Cancion crearCancion(@RequestBody Cancion cancion){
        return cancionService.crearCancion(cancion);
    }
    @PutMapping("/put")
    public Cancion modificarCancion(@RequestBody Cancion cancion){
        return cancionService.crearCancion(cancion);
    }
    @DeleteMapping("/delete/{id}")
    public void eliminarCancion(@RequestBody Integer id){
        cancionService.eliminarCancion(id);
    }
     @GetMapping("/mostrar")
    public Cancion mostrarCanciones(){
        return cancionService.mostrarCanciones();
    }
    
    
}
