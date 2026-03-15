package com.pawsadopt.controller;

public class AdoptionRequestDTO {
    private Long petId;
    private Long userId;
    private String reason;
    private Double adoptionFee;

    // Getters and setters
    public Long getPetId() { return petId; }
    public void setPetId(Long petId) { this.petId = petId; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getReason() { return reason; }
    public void setReason(String reason) { this.reason = reason; }

    public Double getAdoptionFee() { return adoptionFee; }
    public void setAdoptionFee(Double adoptionFee) { this.adoptionFee = adoptionFee; }
}