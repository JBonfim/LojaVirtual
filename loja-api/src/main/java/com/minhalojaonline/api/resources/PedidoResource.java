package com.minhalojaonline.api.resources;

import java.util.List;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.minhalojaonline.api.models.Cliente;
import com.minhalojaonline.api.models.Pedido;
import com.minhalojaonline.api.models.Item;
import com.minhalojaonline.api.repository.ItemRepository;
import com.minhalojaonline.api.repository.PedidoRepository;

/**
 * @author Jabes
 * 
 */

@RestController
@RequestMapping(value = "/api")
@Api(value = "API REST Logica dos Carrinhos")
@CrossOrigin(origins = "*")
public class PedidoResource {

	@Autowired
	private PedidoRepository pRepository;
	
	@Autowired
	private ItemRepository iRepository;

	@GetMapping("/pedidos")
	@ApiOperation(value = "retorna uma lista de Items que estao alugados")
	public List<Pedido> listaItems() {
		return pRepository.findAll();
	}
	
	@PostMapping("/pedido")
	@ApiOperation(value="metodo para cadastrar o pedido")
	public Pedido save(@RequestBody Pedido pedido){
		//System.out.println("Id item: " + pedido.getItens().get(0).getId());
		return pRepository.save(pedido);
	}

}