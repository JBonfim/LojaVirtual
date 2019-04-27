package com.minhalojaonline.api.resources;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.minhalojaonline.api.models.Cliente;
import com.minhalojaonline.api.repository.ClienteRepository;

/**
 * @author Jabes
 *
 */
@RestController
@RequestMapping(value="/api")
@Api(value="API REST Clientes")
@CrossOrigin(origins="*")
public class ClienteResource {
	
	@Autowired
	private ClienteRepository cRepository;
	
	@GetMapping("/clientes")
	@ApiOperation(value="retorna uma lista de clientes")
	public List<Cliente> listaClientes(){
		return cRepository.findAll();
	}
	
	@PostMapping("/cliente")
	@ApiOperation(value="metodo para cadastrar o cliente")
	public Cliente save(@RequestBody Cliente cliente){
		return cRepository.save(cliente);
	}
	
	@DeleteMapping("/cliente")
	@ApiOperation(value="apaga o Cliente")
	public void delete(@RequestBody Cliente cliente){
		cRepository.delete(cliente);
	}
	
	@PutMapping("/cliente")
	@ApiOperation(value="atualiza um determinado Cliente")
	public Cliente update(@RequestBody Cliente cliente){
		return cRepository.save(cliente);
	}
	
	

}
