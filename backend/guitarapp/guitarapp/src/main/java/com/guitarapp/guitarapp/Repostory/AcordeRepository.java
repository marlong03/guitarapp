package com.guitarapp.guitarapp.Repostory;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.guitarapp.guitarapp.Model.Acorde;
@Repository
public interface AcordeRepository extends CrudRepository<Acorde,Integer> {
    

    
} 