package com.guitarapp.guitarapp.Repostory;


import org.hibernate.query.NativeQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.guitarapp.guitarapp.Model.Posicion;

import jakarta.persistence.Tuple;
@Repository
public interface PosicionRepository extends CrudRepository<Posicion,Integer> {
    
    @Autowired

    @Query(value = "select distinct nombre,primertraste,pulsada from posicion inner join acorde on posicion.idacorde = acorde.idacorde inner join pulsada on pulsada.idacorde = acorde.idacorde where idcancion = :id",nativeQuery = true)
    Iterable<Object[]>  filtrar(Integer id);
    @Query(value = "select * from posicion where idcancion = :id",nativeQuery = true)
    Iterable<Posicion> findByIdCancion(Integer id);
     @Query(value = "select idcancion from cancion order by idcancion desc limit 1",nativeQuery = true)
    Integer obtenerUltimoId();

    
} 