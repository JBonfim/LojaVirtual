package com.minhalojaonline.api.resources;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.minhalojaonline.api.models.Cliente;
import com.minhalojaonline.api.repository.ClienteRepository;

@RestController
@RequestMapping(value="/api")
@Api(value="API REST Clientes")
@CrossOrigin(origins="*")
public class ClienteResource {
	
	@Autowired
	private ClienteRepository cRepository;
	
	@GetMapping("/clientes")
	@ApiOperation(value="retorna uma lista de clientes")
	public List<Cliente> listaProdutos(){
		return cRepository.findAll();
	}

}
