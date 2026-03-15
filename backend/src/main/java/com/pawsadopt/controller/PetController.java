package com.pawsadopt.controller;

import com.pawsadopt.model.Pet;
import com.pawsadopt.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pets")
public class PetController {

    @Autowired
    private PetService petService;

    @GetMapping
    public ResponseEntity<List<Pet>> getAllPets() {
        return ResponseEntity.ok(petService.getAllPets());
    }

    @GetMapping("/available")
    public ResponseEntity<List<Pet>> getAvailablePets() {
        return ResponseEntity.ok(petService.getAvailablePets());
    }

    @GetMapping("/top-rated")
    public ResponseEntity<List<Pet>> getTopRatedPets() {
        return ResponseEntity.ok(petService.getTopRatedPets());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pet> getPetById(@PathVariable Long id) {
        Optional<Pet> pet = petService.getPetById(id);
        return pet.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<Pet>> getPetsByType(@PathVariable String type) {
        return ResponseEntity.ok(petService.getPetsByType(type));
    }

    @PostMapping
    public ResponseEntity<Pet> createPet(@RequestBody Pet pet) {
        Pet createdPet = petService.createPet(pet);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPet);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pet> updatePet(@PathVariable Long id, @RequestBody Pet petDetails) {
        Pet updatedPet = petService.updatePet(id, petDetails);
        return updatedPet != null ? ResponseEntity.ok(updatedPet) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}/adopt")
    public ResponseEntity<String> markAsAdopted(@PathVariable Long id) {
        boolean success = petService.markAsAdopted(id);
        return success ? 
            ResponseEntity.ok("Pet marked as adopted successfully") : 
            ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePet(@PathVariable Long id) {
        petService.deletePet(id);
        return ResponseEntity.ok("Pet deleted successfully");
    }
}
