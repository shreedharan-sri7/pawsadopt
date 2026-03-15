package com.pawsadopt.controller;

import com.pawsadopt.model.AdoptionRequest;
import com.pawsadopt.service.AdoptionRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/adoption-requests")
public class AdoptionRequestController {

    @Autowired
    private AdoptionRequestService adoptionRequestService;

    @GetMapping
    public ResponseEntity<List<AdoptionRequest>> getAllAdoptionRequests() {
        return ResponseEntity.ok(adoptionRequestService.getAllAdoptionRequests());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdoptionRequest> getAdoptionRequestById(@PathVariable Long id) {
        Optional<AdoptionRequest> request = adoptionRequestService.getAdoptionRequestById(id);
        return request.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<AdoptionRequest> createAdoptionRequest(@RequestBody AdoptionRequest adoptionRequest) {
        AdoptionRequest createdRequest = adoptionRequestService.createAdoptionRequest(adoptionRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRequest);
    }

    @PutMapping("/{id}/approve")
    public ResponseEntity<AdoptionRequest> approveAdoptionRequest(@PathVariable Long id) {
        AdoptionRequest approvedRequest = adoptionRequestService.approveAdoptionRequest(id);
        if (approvedRequest != null) {
            return ResponseEntity.ok(approvedRequest);
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}/reject")
    public ResponseEntity<AdoptionRequest> rejectAdoptionRequest(@PathVariable Long id) {
        AdoptionRequest rejectedRequest = adoptionRequestService.rejectAdoptionRequest(id);
        if (rejectedRequest != null) {
            return ResponseEntity.ok(rejectedRequest);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdoptionRequest(@PathVariable Long id) {
        adoptionRequestService.deleteAdoptionRequest(id);
        return ResponseEntity.noContent().build();
    }
}