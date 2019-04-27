package com.minhalojaonline.api.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import net.minidev.json.annotate.JsonIgnore;


/**
 * @author Jabes
 *
 */
@Entity
@Table(name="TB_ITEM")
public class Item implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String descricao;
	private String detalhes;
	private String data_criacao;
	
//	@OneToMany(fetch = FetchType.LAZY)
//	@JoinColumn(name = "tipoitem_id", referencedColumnName = "id")
//	private TipoItem tipoItem;
	
	@JsonIgnore
	@ManyToMany
	@JoinTable(name = "ITEM_TIPOITEM",
		joinColumns = @JoinColumn(name="item_id"),
		inverseJoinColumns = @JoinColumn(name="tipoitem_id")
	)
	private List<TipoItem> tipoItem = new ArrayList<TipoItem>();
	
	@ManyToOne
	@JoinColumn(name="pedido_id")
	private Pedido pedido;
	
	private boolean isAlugado;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getDetalhes() {
		return detalhes;
	}
	public void setDetalhes(String detalhes) {
		this.detalhes = detalhes;
	}
	public String getData_criacao() {
		return data_criacao;
	}
	public void setData_criacao(String data_criacao) {
		this.data_criacao = data_criacao;
	}
	
	public List<TipoItem> getTipoItem() {
		return tipoItem;
	}
	public void setTipoItem(List<TipoItem> tipoItem) {
		this.tipoItem = tipoItem;
	}
	public boolean isAlugado() {
		return isAlugado;
	}
	public void setAlugado(boolean isAlugado) {
		this.isAlugado = isAlugado;
	}
	
	
	
	
}
