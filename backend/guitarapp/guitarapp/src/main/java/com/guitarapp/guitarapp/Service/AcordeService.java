package com.guitarapp.guitarapp.Service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import com.guitarapp.guitarapp.Model.Acorde;
import com.guitarapp.guitarapp.Repostory.AcordeRepository;

@Service
@RestController
public class AcordeService {
    @Autowired
    private AcordeRepository acordeRepository;

    public ArrayList<Acorde> obtenerAcordees(){
        return (ArrayList<Acorde>) acordeRepository.findAll();
    }
    public Optional<Acorde> obtenerAcorde(Integer id){
        return acordeRepository.findById(id);
    }
    public Acorde crearAcorde(Acorde acorde){
        return acordeRepository.save(acorde);
    }
    public void eliminarAcorde(Integer id){
        acordeRepository.deleteById(id);
    }
   
}
