package com.pawsadopt.repository;

import com.pawsadopt.model.AdoptionRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdoptionRequestRepository extends JpaRepository<AdoptionRequest, Long> {
    List<AdoptionRequest> findByStatus(String status);
    List<AdoptionRequest> findByUserId(Long userId);
    List<AdoptionRequest> findByPetId(Long petId);
}