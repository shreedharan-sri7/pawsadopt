package com.pawsadopt.repository;

import com.pawsadopt.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {
    List<Pet> findByType(String type);
    List<Pet> findByAvailableTrue();
    List<Pet> findByTypeAndAvailableTrue(String type);
    
    @Query("SELECT p FROM Pet p WHERE p.available = true ORDER BY p.rating DESC")
    List<Pet> findTopRatedPets();
}
