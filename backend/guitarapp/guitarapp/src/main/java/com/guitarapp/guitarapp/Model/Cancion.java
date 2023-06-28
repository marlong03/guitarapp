package com.guitarapp.guitarapp.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table(name = "cancion")

public class Cancion {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer idcancion;
    private String autor;
    private String nombre;
    private String letra;

    public Cancion() {
    }
    public Cancion(Integer idcancion, String autor,String nombre ,String letra) {
        this.idcancion = idcancion;
        this.autor = autor;
        this.nombre = nombre;
        this.letra = letra;
    }

    public Integer getIdcancion() {
        return idcancion;
    }
    public void setIdcancion(Integer idcancion) {
        this.idcancion = idcancion;
    }
    public String getAutor() {
        return autor;
    }
    public void setAutor(String autor) {
        this.autor = autor;
    }
    public String getLetra() {
        return letra;
    }
    public void setLetra(String letra) {
        this.letra = letra;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    

    
}
