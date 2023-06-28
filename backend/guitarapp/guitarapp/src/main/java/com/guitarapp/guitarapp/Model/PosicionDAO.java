package com.guitarapp.guitarapp.Model;


public class PosicionDAO {
    String nombre;
    Integer primertraste;
    Integer pulsada;
    public PosicionDAO() {
    }
    public PosicionDAO(String nombre, Integer primertraste, Integer pulsada) {
        this.nombre = nombre;
        this.primertraste = primertraste;
        this.pulsada = pulsada;
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
    public Integer getPulsada() {
        return pulsada;
    }
    public void setPulsada(Integer pulsada) {
        this.pulsada = pulsada;
    }
     
}
