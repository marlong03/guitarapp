package com.guitarapp.guitarapp.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "acorde")
public class Acorde {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    Integer idacorde;
    String nombre;
    Integer primertraste;
    public Acorde() {
    }
    public Acorde(Integer idacorde, String nombre, Integer primertraste) {
        this.idacorde = idacorde;
        this.nombre = nombre;
        this.primertraste = primertraste;
    }
    public Integer getIdacorde() {
        return idacorde;
    }
    public void setIdacorde(Integer idacorde) {
        this.idacorde = idacorde;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public Integer getPrimertraste() {
        return primertraste;
    }
    public void setPrimertraste(Integer primertraste) {
        this.primertraste = primertraste;
    }

    
}
