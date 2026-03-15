package com.pawsadopt.controller;

import com.pawsadopt.controller.AdoptionRequestDTO;
import com.pawsadopt.model.Pet;
import com.pawsadopt.model.User;
import com.pawsadopt.service.PetService;
import com.pawsadopt.service.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/adoptions")
public class AdoptionController {

    @Autowired
    private AdoptionService adoptionService;

    @Autowired
    private PetService petService;

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Adoption> createAdoptionRequest(@RequestBody AdoptionRequestDTO request) {
        Pet pet = petService.getPetById(request.getPetId()).orElse(null);
        User user = userService.getUserById(request.getUserId()).orElse(null);

        if (pet == null || user == null) {
            return ResponseEntity.badRequest().build();
        }

        Adoption adoption = new Adoption();
        adoption.setPet(pet);
        adoption.setUser(user);
        adoption.setReason(request.getReason());
        adoption.setAdoptionFee(request.getAdoptionFee() != null ? request.getAdoptionFee() : pet.getAdoptionFee());

        Adoption createdAdoption = adoptionService.createAdoptionRequest(adoption);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAdoption);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Adoption> getAdoptionById(@PathVariable Long id) {
        Optional<Adoption> adoption = adoptionService.getAdoptionById(id);
        return adoption.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Adoption>> getAdoptionsByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(adoptionService.getAdoptionsByUserId(userId));
    }

    @GetMapping("/status/pending")
    public ResponseEntity<List<Adoption>> getPendingAdoptions() {
        return ResponseEntity.ok(adoptionService.getPendingAdoptions());
    }

    @GetMapping
    public ResponseEntity<List<Adoption>> getAllAdoptions() {
        return ResponseEntity.ok(adoptionService.getAllAdoptions());
    }

    @PutMapping("/{id}/approve")
    public ResponseEntity<Adoption> approveAdoption(@PathVariable Long id) {
        Adoption adoption = adoptionService.approveAdoption(id);
        return adoption != null ? ResponseEntity.ok(adoption) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}/reject")
    public ResponseEntity<Adoption> rejectAdoption(@PathVariable Long id) {
        Adoption adoption = adoptionService.rejectAdoption(id);
        return adoption != null ? ResponseEntity.ok(adoption) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAdoption(@PathVariable Long id) {
        adoptionService.deleteAdoption(id);
        return ResponseEntity.ok("Adoption request deleted successfully");
    }
}
