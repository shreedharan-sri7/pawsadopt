package com.pawsadopt.model;

import jakarta.persistence.*;

@Entity
@Table(name = "pets")
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String type; // Dog, Cat, Parrot, Rabbit, Lizard, Turtle, etc.

    @Column(nullable = false)
    private String breed;

    @Column(nullable = false)
    private Integer age;

    @Column(nullable = false)
    private String color;

    @Column(nullable = false)
    private Double weight;

    @Column(length = 500)
    private String description;

    @Column(nullable = false)
    private Double adoptionFee;

    @Column(nullable = false)
    private Double rating = 5.0;

    @Column(nullable = false)
    private String health = "Vaccinated, Microchipped";

    @Column(nullable = false)
    private Boolean available = true;

    private String personality; // Comma-separated traits

    @Column(name = "created_at")
    private String createdAt;

    @Column(name = "updated_at")
    private String updatedAt;

    public Pet() {
    }

    public Pet(Long id,
               String name,
               String type,
               String breed,
               Integer age,
               String color,
               Double weight,
               String description,
               Double adoptionFee,
               Double rating,
               String health,
               Boolean available,
               String personality,
               String createdAt,
               String updatedAt) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.breed = breed;
        this.age = age;
        this.color = color;
        this.weight = weight;
        this.description = description;
        this.adoptionFee = adoptionFee;
        this.rating = rating;
        this.health = health;
        this.available = available;
        this.personality = personality;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getAdoptionFee() {
        return adoptionFee;
    }

    public void setAdoptionFee(Double adoptionFee) {
        this.adoptionFee = adoptionFee;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public String getHealth() {
        return health;
    }

    public void setHealth(String health) {
        this.health = health;
    }

    public Boolean getAvailable() {
        return available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }

    public String getPersonality() {
        return personality;
    }

    public void setPersonality(String personality) {
        this.personality = personality;
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
