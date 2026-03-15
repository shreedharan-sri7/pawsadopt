package com.pawsadopt;

import com.pawsadopt.model.User;
import com.pawsadopt.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    public CommandLineRunner initData(PetRepository petRepository, UserRepository userRepository) {
        return args -> {
            // Create sample user
            User user = new User();
            user.setName("Default User");
            user.setEmail("user@example.com");
            user.setPassword("password"); // In real app, hash this
            userRepository.save(user);

            System.out.println("Sample user initialized successfully!");
            // Create sample pets
            Pet pet1 = new Pet();
            pet1.setName("Max");
            pet1.setType("Dog");
            pet1.setBreed("Golden Retriever");
            pet1.setAge(2);
            pet1.setColor("Golden");
            pet1.setWeight(30.0);
            pet1.setDescription("Friendly Golden Retriever who loves to play fetch in the park.");
            pet1.setAdoptionFee(200.0);
            pet1.setRating(4.8);
            pet1.setAvailable(true);
            pet1.setPersonality("Friendly, Energetic, Playful, Intelligent");
            petRepository.save(pet1);

            Pet pet2 = new Pet();
            pet2.setName("Luna");
            pet2.setType("Cat");
            pet2.setBreed("Persian");
            pet2.setAge(1);
            pet2.setColor("Cream");
            pet2.setWeight(4.0);
            pet2.setDescription("Adorable Persian cat that loves cuddles and treats.");
            pet2.setAdoptionFee(150.0);
            pet2.setRating(4.9);
            pet2.setAvailable(true);
            pet2.setPersonality("Sweet, Calm, Affectionate, Playful");
            petRepository.save(pet2);

            Pet pet3 = new Pet();
            pet3.setName("Buddy");
            pet3.setType("Dog");
            pet3.setBreed("Labrador");
            pet3.setAge(3);
            pet3.setColor("Brown");
            pet3.setWeight(35.0);
            pet3.setDescription("Energetic Labrador perfect for active families.");
            pet3.setAdoptionFee(250.0);
            pet3.setRating(4.7);
            pet3.setAvailable(true);
            pet3.setPersonality("Energetic, Loyal, Friendly, Intelligent");
            petRepository.save(pet3);

            Pet pet4 = new Pet();
            pet4.setName("Tweety");
            pet4.setType("Parrot");
            pet4.setBreed("Macaw");
            pet4.setAge(4);
            pet4.setColor("Green and Yellow");
            pet4.setWeight(1.3);
            pet4.setDescription("Colorful macaw that talks and entertains all day.");
            pet4.setAdoptionFee(300.0);
            pet4.setRating(4.5);
            pet4.setAvailable(true);
            pet4.setPersonality("Intelligent, Social, Vocal, Entertaining");
            petRepository.save(pet4);

            Pet pet5 = new Pet();
            pet5.setName("Fluffy");
            pet5.setType("Rabbit");
            pet5.setBreed("Holland Lop");
            pet5.setAge(1);
            pet5.setColor("White");
            pet5.setWeight(1.5);
            pet5.setDescription("Cute white rabbit with soft fur and gentle nature.");
            pet5.setAdoptionFee(80.0);
            pet5.setRating(4.8);
            pet5.setAvailable(true);
            pet5.setPersonality("Gentle, Curious, Playful, Friendly");
            petRepository.save(pet5);

            Pet pet6 = new Pet();
            pet6.setName("Spike");
            pet6.setType("Lizard");
            pet6.setBreed("Bearded Dragon");
            pet6.setAge(5);
            pet6.setColor("Tan and Brown");
            pet6.setWeight(0.5);
            pet6.setDescription("Beautiful bearded dragon, perfect for reptile lovers.");
            pet6.setAdoptionFee(180.0);
            pet6.setRating(4.4);
            pet6.setAvailable(true);
            pet6.setPersonality("Calm, Docile, Curious, Social");
            petRepository.save(pet6);

            Pet pet7 = new Pet();
            pet7.setName("Shell");
            pet7.setType("Turtle");
            pet7.setBreed("Red-Eared Slider");
            pet7.setAge(3);
            pet7.setColor("Green");
            pet7.setWeight(0.8);
            pet7.setDescription("Peaceful turtle that brings calm to any home.");
            pet7.setAdoptionFee(160.0);
            pet7.setRating(4.7);
            pet7.setAvailable(true);
            pet7.setPersonality("Calm, Peaceful, Low-Maintenance, Unique");
            petRepository.save(pet7);

            Pet pet8 = new Pet();
            pet8.setName("Whiskers");
            pet8.setType("Cat");
            pet8.setBreed("Tabby");
            pet8.setAge(2);
            pet8.setColor("Orange");
            pet8.setWeight(4.5);
            pet8.setDescription("Playful tabby cat with a great personality.");
            pet8.setAdoptionFee(120.0);
            pet8.setRating(4.6);
            pet8.setAvailable(true);
            pet8.setPersonality("Playful, Affectionate, Curious, Independent");
            petRepository.save(pet8);

            Pet pet9 = new Pet();
            pet9.setName("Rocky");
            pet9.setType("Dog");
            pet9.setBreed("Labrador");
            pet9.setAge(3);
            pet9.setColor("Black");
            pet9.setWeight(32.0);
            pet9.setDescription("Loyal and energetic Labrador ready for a loving home.");
            pet9.setAdoptionFee(220.0);
            pet9.setRating(4.9);
            pet9.setAvailable(true);
            pet9.setPersonality("Loyal, Energetic, Friendly, Protective");
            petRepository.save(pet9);

            System.out.println("Sample pets initialized successfully!");
        };
    }
}
