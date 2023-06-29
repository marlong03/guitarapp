package com.guitarapp.guitarapp.Service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import com.guitarapp.guitarapp.Model.Posicion;
import com.guitarapp.guitarapp.Repostory.PosicionRepository;

import jakarta.persistence.Tuple;

@Service
@RestController
public class PosicionService {
    @Autowired
    private PosicionRepository posicionRepository;

    public ArrayList<Posicion> obtenerPosiciones(){
        return (ArrayList<Posicion>) posicionRepository.findAll();
    }
    public Optional<Posicion> obtenerPosicion(Integer id){
        return posicionRepository.findById(id);
    }
    public Posicion crearPosicion(Posicion posicion){
        return posicionRepository.save(posicion);
    }
    public void eliminarPosicion(Integer id){
        posicionRepository.deleteById(id);
    }
    public Iterable<Object[]> filtrar(Integer id){
        return posicionRepository.filtrar(id);
    }
    public Iterable<Posicion> filtrarPorCancion(Integer id){
        return posicionRepository.findByIdCancion(id);
    }
      public Iterable<Posicion> saveAll(Iterable<Posicion> posicion){
        return posicionRepository.saveAll(posicion);
    }
    public Integer obtenerUltimoId(){
        return posicionRepository.obtenerUltimoId();
    }
}
