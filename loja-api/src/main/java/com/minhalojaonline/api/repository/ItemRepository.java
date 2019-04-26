package com.minhalojaonline.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhalojaonline.api.models.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

}
