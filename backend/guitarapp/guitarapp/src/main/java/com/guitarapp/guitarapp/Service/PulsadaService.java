package com.guitarapp.guitarapp.Service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import com.guitarapp.guitarapp.Model.Pulsada;
import com.guitarapp.guitarapp.Repostory.PulsadaRepository;

@Service
@RestController
public class PulsadaService {
    @Autowired
    private PulsadaRepository pulsadaRepository;

    public ArrayList<Pulsada> obtenerPulsadaes(){
        return (ArrayList<Pulsada>) pulsadaRepository.findAll();
    }
    public Optional<Pulsada> obtenerPulsada(Integer id){
        return pulsadaRepository.findById(id);
    }
    public Pulsada crearPulsada(Pulsada pulsada){
        return pulsadaRepository.save(pulsada);
    }
    public Iterable<Pulsada> crearPulsadas(Iterable<Pulsada> pulsadas){
        return pulsadaRepository.saveAll(pulsadas);
    }
    public void eliminarPulsada(Integer id){
        pulsadaRepository.deleteById(id);
    }
    
   
}
