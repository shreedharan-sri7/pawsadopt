package com.pawsadopt.model;

import jakarta.persistence.*;

@Entity
@Table(name = "adoptions")
public class Adoption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "pet_id", nullable = false)
    private Pet pet;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private String status = "PENDING"; // PENDING, APPROVED, REJECTED, COMPLETED

    @Column(length = 500)
    private String reason;

    @Column(nullable = false)
    private Double adoptionFee;

    @Column(name = "adoption_date")
    private String adoptionDate;

    @Column(name = "created_at")
    private String createdAt;

    @Column(name = "updated_at")
    private String updatedAt;

    public Adoption() {
    }

    public Adoption(Long id,
                    Pet pet,
                    User user,
                    String status,
                    String reason,
                    Double adoptionFee,
                    String adoptionDate,
                    String createdAt,
                    String updatedAt) {
        this.id = id;
        this.pet = pet;
        this.user = user;
        this.status = status;
        this.reason = reason;
        this.adoptionFee = adoptionFee;
        this.adoptionDate = adoptionDate;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Double getAdoptionFee() {
        return adoptionFee;
    }

    public void setAdoptionFee(Double adoptionFee) {
        this.adoptionFee = adoptionFee;
    }

    public String getAdoptionDate() {
        return adoptionDate;
    }

    public void setAdoptionDate(String adoptionDate) {
        this.adoptionDate = adoptionDate;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    @PrePersist
    protected void onCreate() {
        createdAt = java.time.LocalDateTime.now().toString();
        updatedAt = java.time.LocalDateTime.now().toString();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = java.time.LocalDateTime.now().toString();
    }
}
