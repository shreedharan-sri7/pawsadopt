package com.pawsadopt.service;

import com.pawsadopt.model.AdoptionRequest;
import com.pawsadopt.repository.AdoptionRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdoptionRequestService {

    @Autowired
    private AdoptionRequestRepository adoptionRequestRepository;

    public List<AdoptionRequest> getAllAdoptionRequests() {
        return adoptionRequestRepository.findAll();
    }

    public Optional<AdoptionRequest> getAdoptionRequestById(Long id) {
        return adoptionRequestRepository.findById(id);
    }

    public List<AdoptionRequest> getAdoptionRequestsByStatus(String status) {
        return adoptionRequestRepository.findByStatus(status);
    }

    public AdoptionRequest createAdoptionRequest(AdoptionRequest adoptionRequest) {
        return adoptionRequestRepository.save(adoptionRequest);
    }

    public AdoptionRequest approveAdoptionRequest(Long id) {
        Optional<AdoptionRequest> request = adoptionRequestRepository.findById(id);
        if (request.isPresent()) {
            AdoptionRequest ar = request.get();
            ar.setStatus("APPROVED");
            return adoptionRequestRepository.save(ar);
        }
        return null;
    }

    public AdoptionRequest rejectAdoptionRequest(Long id) {
        Optional<AdoptionRequest> request = adoptionRequestRepository.findById(id);
        if (request.isPresent()) {
            AdoptionRequest ar = request.get();
            ar.setStatus("REJECTED");
            return adoptionRequestRepository.save(ar);
        }
        return null;
    }

    public void deleteAdoptionRequest(Long id) {
        adoptionRequestRepository.deleteById(id);
    }
}