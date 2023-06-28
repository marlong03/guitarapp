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

import com.guitarapp.guitarapp.Model.Acorde;
import com.guitarapp.guitarapp.Service.AcordeService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/acorde")
public class AcordeController {

    @Autowired
    private AcordeService acordeService;

    @GetMapping(path = "/get/all")
    public ArrayList<Acorde> obtenerAcordees(){
        return acordeService.obtenerAcordees();
    }
    @GetMapping(path = "/get/{id}")
    public Optional<Acorde>  obtenerAcordees(@PathVariable Integer id){
        return acordeService.obtenerAcorde(id);
    }
    @PostMapping("/post")
    public Acorde crearAcorde(@RequestBody Acorde acorde){
        return acordeService.crearAcorde(acorde);
    }
    @PutMapping("/put")
    public Acorde modificarAcorde(@RequestBody Acorde acorde){
        return acordeService.crearAcorde(acorde);
    }
    @DeleteMapping("/delete/{id}")
    public void eliminarAcorde(@RequestBody Integer id){
        acordeService.eliminarAcorde(id);
    }
   
}
