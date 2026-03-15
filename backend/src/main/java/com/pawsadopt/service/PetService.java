package com.pawsadopt.service;

import com.pawsadopt.model.Pet;
import com.pawsadopt.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PetService {

    @Autowired
    private PetRepository petRepository;

    public List<Pet> getAllPets() {
        return petRepository.findAll();
    }

    public List<Pet> getAvailablePets() {
        return petRepository.findByAvailableTrue();
    }

    public Optional<Pet> getPetById(Long id) {
        return petRepository.findById(id);
    }

    public List<Pet> getPetsByType(String type) {
        return petRepository.findByTypeAndAvailableTrue(type);
    }

    public List<Pet> getTopRatedPets() {
        return petRepository.findTopRatedPets();
    }

    public Pet createPet(Pet pet) {
        return petRepository.save(pet);
    }

    public Pet updatePet(Long id, Pet petDetails) {
        Optional<Pet> pet = petRepository.findById(id);
        if (pet.isPresent()) {
            Pet existingPet = pet.get();
            if (petDetails.getName() != null) existingPet.setName(petDetails.getName());
            if (petDetails.getType() != null) existingPet.setType(petDetails.getType());
            if (petDetails.getBreed() != null) existingPet.setBreed(petDetails.getBreed());
            if (petDetails.getAge() != null) existingPet.setAge(petDetails.getAge());
            if (petDetails.getColor() != null) existingPet.setColor(petDetails.getColor());
            if (petDetails.getWeight() != null) existingPet.setWeight(petDetails.getWeight());
            if (petDetails.getDescription() != null) existingPet.setDescription(petDetails.getDescription());
            if (petDetails.getAvailable() != null) existingPet.setAvailable(petDetails.getAvailable());
            return petRepository.save(existingPet);
        }
        return null;
    }

    public boolean markAsAdopted(Long id) {
        Optional<Pet> pet = petRepository.findById(id);
        if (pet.isPresent()) {
            Pet p = pet.get();
            p.setAvailable(false);
            petRepository.save(p);
            return true;
        }
        return false;
    }

    public void deletePet(Long id) {
        petRepository.deleteById(id);
    }
}
