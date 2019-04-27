package com.minhalojaonline.api.resources;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.minhalojaonline.api.models.Cliente;
import com.minhalojaonline.api.models.Item;
import com.minhalojaonline.api.repository.ItemRepository;


/**
 * @author Jabes
 *
 */
@RestController
@RequestMapping(value="/api")
@Api(value="API REST Item")
@CrossOrigin(origins="*")
public class ItemResource {
	
	@Autowired
	private ItemRepository iRepository;
	
	@GetMapping("/items")
	@ApiOperation(value="retorna uma lista de Items")
	public List<Item> listaItems(){
		return iRepository.findAll();
	}
	
	@PostMapping("/item")
	@ApiOperation(value="metodo para cadastrar o Item")
	public Item save(@RequestBody Item item){
		System.out.println("Item -> "+item.toString());
		return iRepository.save(item);
	}
	
	@DeleteMapping("/item")
	@ApiOperation(value="apaga o Item")
	public void delete(@RequestBody Item item){
		iRepository.delete(item);
	}
	
	@PutMapping("/item")
	@ApiOperation(value="atualiza um determinado Item")
	public Item update(@RequestBody Item item){
		return iRepository.save(item);
	}
	
	@GetMapping("/item/{id}")
	@ApiOperation(value="retorna a categoria de acordo com o id")
	public Item getItem(@PathVariable(value="id") long id){
		return iRepository.findById(id);
	}
	

}
