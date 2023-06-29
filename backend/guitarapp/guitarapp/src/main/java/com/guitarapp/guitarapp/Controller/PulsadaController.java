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

import com.guitarapp.guitarapp.Model.Pulsada;
import com.guitarapp.guitarapp.Service.PulsadaService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/pulsada")
public class PulsadaController {

    @Autowired
    private PulsadaService pulsadaService;

    @GetMapping(path = "/get/all")
    public ArrayList<Pulsada> obtenerPulsadaes(){
        return pulsadaService.obtenerPulsadaes();
    }
    @GetMapping(path = "/get/{id}")
    public Optional<Pulsada>  obtenerPulsadaes(@PathVariable Integer id){
        return pulsadaService.obtenerPulsada(id);
    }
    
    @PostMapping("/post")
    public Pulsada crearPulsada(@RequestBody Pulsada pulsada){
        return pulsadaService.crearPulsada(pulsada);
    }
     @PostMapping("/post/all")
    public Iterable<Pulsada> crearPulsadas(@RequestBody Iterable<Pulsada> pulsadas){
        return pulsadaService.crearPulsadas(pulsadas);
    }
    @PutMapping("/put")
    public Pulsada modificarPulsada(@RequestBody Pulsada pulsada){
        return pulsadaService.crearPulsada(pulsada);
    }
    @DeleteMapping("/delete/{id}")
    public void eliminarPulsada(@RequestBody Integer id){
        pulsadaService.eliminarPulsada(id);
    }
   
}


