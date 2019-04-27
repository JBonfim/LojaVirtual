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

import com.minhalojaonline.api.models.Item;
import com.minhalojaonline.api.models.TipoItem;
import com.minhalojaonline.api.repository.TipoItemRepository;

/**
 * @author Jabes
 *
 */
@RestController
@RequestMapping(value="/api")
@Api(value="API REST TipoItem")
@CrossOrigin(origins="*")
public class TipoItemResource {

	@Autowired
	private TipoItemRepository tiRepository;
	
	@GetMapping("/tipoitems")
	@ApiOperation(value="retorna uma lista de Items")
	public List<TipoItem> listaItems(){
		return tiRepository.findAll();
	}
	
	@PostMapping("/tipoitem")
	@ApiOperation(value="metodo para cadastrar o Item")
	public TipoItem save(@RequestBody TipoItem Item){
		return tiRepository.save(Item);
	}
	
	@DeleteMapping("/tipoitem")
	@ApiOperation(value="apaga o Item")
	public void delete(@RequestBody TipoItem item){
		
		tiRepository.delete(item);
	}
	
	@PutMapping("/tipoitem")
	@ApiOperation(value="atualiza um determinado Item")
	public TipoItem update(@RequestBody TipoItem item){
		return tiRepository.save(item);
	}
	
	@GetMapping("/tipoitem/{id}")
	@ApiOperation(value="retorna a categoria de acordo com o id")
	public TipoItem getProduto(@PathVariable(value="id") long id){
		return tiRepository.findById(id);
	}

}
