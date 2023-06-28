package com.guitarapp.guitarapp.Repostory;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.guitarapp.guitarapp.Model.Cancion;
@Repository
public interface CancionRepository extends CrudRepository<Cancion,Integer> {
    
    Cancion getCancionByIdcancion(Integer id);

    
} 