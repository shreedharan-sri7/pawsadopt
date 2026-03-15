package com.pawsadopt.repository;

import com.pawsadopt.model.Adoption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdoptionRepository extends JpaRepository<Adoption, Long> {
    List<Adoption> findByUserId(Long userId);
    List<Adoption> findByStatus(String status);
}
