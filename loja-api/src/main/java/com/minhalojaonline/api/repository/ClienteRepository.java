package com.minhalojaonline.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhalojaonline.api.models.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
	Cliente findById(long id);
}
