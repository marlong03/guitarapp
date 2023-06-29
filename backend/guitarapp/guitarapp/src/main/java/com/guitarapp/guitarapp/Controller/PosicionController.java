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
import com.guitarapp.guitarapp.Service.PosicionService;
import com.guitarapp.guitarapp.Model.Posicion;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/posicion")
public class PosicionController {

    @Autowired
    private PosicionService posicionService;

    @GetMapping(path = "/get/all")
    public ArrayList<Posicion> obtenerPosiciones(){
        return posicionService.obtenerPosiciones();
    }
    @GetMapping(path = "/get/{id}")
    public Optional<Posicion>  obtenerPosiciones(@PathVariable Integer id){
        return posicionService.obtenerPosicion(id);
    }
    @PostMapping("/post")
    public Posicion crearPosicion(@RequestBody Posicion posicion){
        return posicionService.crearPosicion(posicion);
    }
    @PostMapping("/post/all")
    public Iterable<Posicion> crearPosiciones(@RequestBody Iterable<Posicion> posicion){
         return posicionService.saveAll(posicion);
    }
    @PutMapping("/put")
    public Posicion modificarPosicion(@RequestBody Posicion posicion){
        return posicionService.crearPosicion(posicion);
    }
    @DeleteMapping("/delete/{id}")
    public void eliminarPosicion(@RequestBody Integer id){
        posicionService.eliminarPosicion(id);
    }
    @GetMapping("filtro/{id}")
    public Iterable<Object[]> filtrar(@PathVariable Integer id){
        return posicionService.filtrar(id);
    }
     @GetMapping("filtro/cancion/{id}")
    public Iterable<Posicion> filtrarPorCancion(@PathVariable Integer id){
        return posicionService.filtrarPorCancion(id);
    }
   
}
