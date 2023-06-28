package com.guitarapp.guitarapp.Service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import com.guitarapp.guitarapp.Model.Cancion;
import com.guitarapp.guitarapp.Repostory.CancionRepository;

@Service
@RestController
public class CancionService {
    @Autowired
    private CancionRepository cancionRepository;

    public ArrayList<Cancion> obtenerCanciones(){
        return (ArrayList<Cancion>) cancionRepository.findAll();
    }
    public Optional<Cancion> obtenerCancion(Integer id){
        return cancionRepository.findById(id);
    }
    public Cancion crearCancion(Cancion cancion){
        return cancionRepository.save(cancion);
    }
    public void eliminarCancion(Integer id){
        cancionRepository.deleteById(id);
    }
    public Cancion mostrarCanciones(){
        return cancionRepository.getCancionByIdcancion(1);
    }
}
