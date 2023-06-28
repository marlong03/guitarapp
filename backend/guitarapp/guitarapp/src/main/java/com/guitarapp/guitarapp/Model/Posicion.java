package com.guitarapp.guitarapp.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table( name = "posicion")
public class Posicion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer idposicion;
    Integer posicion;
    @ManyToOne
    @JoinColumn(name = "idcancion")
    Cancion idcancion;
    @ManyToOne
    @JoinColumn(name = "idacorde")
    Acorde idacorde;
    public Posicion() {
    }
    public Posicion(Integer idposicion, Integer posicion, Cancion idcancion, Acorde idacorde) {
        this.idposicion = idposicion;
        this.posicion = posicion;
        this.idcancion = idcancion;
        this.idacorde = idacorde;
    }
    public Integer getIdposicion() {
        return idposicion;
    }
    public void setIdposicion(Integer idposicion) {
        this.idposicion = idposicion;
    }
    public Integer getPosicion() {
        return posicion;
    }
    public void setPosicion(Integer posicion) {
        this.posicion = posicion;
    }
    public Cancion getIdcancion() {
        return idcancion;
    }
    public void setIdcancion(Cancion idcancion) {
        this.idcancion = idcancion;
    }
    public Acorde getIdacorde() {
        return idacorde;
    }
    public void setIdacorde(Acorde idacorde) {
        this.idacorde = idacorde;
    }

    

}
