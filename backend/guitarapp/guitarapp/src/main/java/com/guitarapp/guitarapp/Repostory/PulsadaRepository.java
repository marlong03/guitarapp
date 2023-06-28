package com.guitarapp.guitarapp.Repostory;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.guitarapp.guitarapp.Model.Pulsada;
@Repository
public interface PulsadaRepository extends CrudRepository<Pulsada,Integer> {
    

    
} 