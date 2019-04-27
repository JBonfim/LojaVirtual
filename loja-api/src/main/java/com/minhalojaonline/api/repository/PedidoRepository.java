package com.minhalojaonline.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhalojaonline.api.models.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {

}
