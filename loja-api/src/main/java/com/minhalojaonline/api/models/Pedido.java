package com.minhalojaonline.api.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import net.minidev.json.annotate.JsonIgnore;



/**
 * @author Jabes
 *
 */
@Entity
@Table(name="TB_PEDIDO")
public class Pedido implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String data;
	private String hora;
	
	@ManyToOne
	@JoinColumn(name="cliente_id")
	private Cliente cliente;
	
//	@OneToMany(mappedBy="pedido")
//	private Set<Item> itens = new HashSet<Item>();
	
//	@JsonIgnore
//	@OneToMany
//	private List<Item> itens = new ArrayList<Item>();
	
	@JsonIgnore
	@ManyToMany
	@JoinTable(name = "PEDIDO_ITENS",
		joinColumns = @JoinColumn(name="pedido_id"),
		inverseJoinColumns = @JoinColumn(name="item_id")
	)
	private List<Item> itens = new ArrayList<Item>();
	
//	@ManyToMany(fetch = FetchType.LAZY)
//	private List<Item> itens;
	
	private double total;
	private double total_pago;
	private double troco;
	
	private boolean isConcluido;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public String getHora() {
		return hora;
	}
	public void setHora(String hora) {
		this.hora = hora;
	}
	public Cliente getCliente() {
		return cliente;
	}
	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	
	public List<Item> getItens() {
		return itens;
	}
	public void setItens(List<Item> itens) {
		this.itens = itens;
	}
	public double getTotal() {
		return total;
	}
	public void setTotal(double total) {
		this.total = total;
	}
	public double getTotal_pago() {
		return total_pago;
	}
	public void setTotal_pago(double total_pago) {
		this.total_pago = total_pago;
	}
	public double getTroco() {
		return troco;
	}
	public void setTroco(double troco) {
		this.troco = troco;
	}
	public boolean isConcluido() {
		return isConcluido;
	}
	public void setConcluido(boolean isConcluido) {
		this.isConcluido = isConcluido;
	}
	
	

}
