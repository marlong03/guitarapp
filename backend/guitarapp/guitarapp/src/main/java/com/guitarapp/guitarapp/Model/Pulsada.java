package com.guitarapp.guitarapp.Model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "pulsada")
public class Pulsada {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    Integer idpulsada;
    Integer pulsada;
    @ManyToOne
    @JoinColumn(name = "idacorde")
    Acorde idacorde;
    public Pulsada() {
    }
    public Pulsada(Integer idpulsada, Integer pulsada, Acorde idacorde) {
        this.idpulsada = idpulsada;
        this.pulsada = pulsada;
        this.idacorde = idacorde;
    }
    public Integer getIdpulsada() {
        return idpulsada;
    }
    public void setIdpulsada(Integer idpulsada) {
        this.idpulsada = idpulsada;
    }
    public Integer getPulsada() {
        return pulsada;
    }
    public void setPulsada(Integer pulsada) {
        this.pulsada = pulsada;
    }
    public Acorde getIdacorde() {
        return idacorde;
    }
    public void setIdacorde(Acorde idacorde) {
        this.idacorde = idacorde;
    }
    
    
  

    
}
