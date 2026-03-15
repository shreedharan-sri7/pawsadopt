package com.pawsadopt.service;

import com.pawsadopt.model.Adoption;
import com.pawsadopt.repository.AdoptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdoptionService {

    @Autowired
    private AdoptionRepository adoptionRepository;

    public Adoption createAdoptionRequest(Adoption adoption) {
        adoption.setStatus("PENDING");
        return adoptionRepository.save(adoption);
    }

    public Optional<Adoption> getAdoptionById(Long id) {
        return adoptionRepository.findById(id);
    }

    public List<Adoption> getAdoptionsByUserId(Long userId) {
        return adoptionRepository.findByUserId(userId);
    }

    public List<Adoption> getPendingAdoptions() {
        return adoptionRepository.findByStatus("PENDING");
    }

    public List<Adoption> getAllAdoptions() {
        return adoptionRepository.findAll();
    }

    public Adoption approveAdoption(Long adoptionId) {
        Optional<Adoption> adoption = adoptionRepository.findById(adoptionId);
        if (adoption.isPresent()) {
            Adoption a = adoption.get();
            a.setStatus("APPROVED");
            a.setAdoptionDate(java.time.LocalDate.now().toString());
            return adoptionRepository.save(a);
        }
        return null;
    }

    public Adoption rejectAdoption(Long adoptionId) {
        Optional<Adoption> adoption = adoptionRepository.findById(adoptionId);
        if (adoption.isPresent()) {
            Adoption a = adoption.get();
            a.setStatus("REJECTED");
            return adoptionRepository.save(a);
        }
        return null;
    }

    public void deleteAdoption(Long id) {
        adoptionRepository.deleteById(id);
    }
}
