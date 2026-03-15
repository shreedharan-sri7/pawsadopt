package com.pawsadopt.service;

import com.pawsadopt.model.Feedback;
import com.pawsadopt.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    public Feedback submitFeedback(Feedback feedback) {
        feedback.setApproved(true); // Auto-approve for demo
        return feedbackRepository.save(feedback);
    }

    public List<Feedback> getAllApprovedFeedback() {
        return feedbackRepository.findByApprovedTrue();
    }

    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    public Optional<Feedback> getFeedbackById(Long id) {
        return feedbackRepository.findById(id);
    }

    public Feedback approveFeedback(Long id) {
        Optional<Feedback> feedback = feedbackRepository.findById(id);
        if (feedback.isPresent()) {
            Feedback f = feedback.get();
            f.setApproved(true);
            return feedbackRepository.save(f);
        }
        return null;
    }

    public void deleteFeedback(Long id) {
        feedbackRepository.deleteById(id);
    }
}
