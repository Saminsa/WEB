package handlers

import (
	"backend/database"
	"backend/models"
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
)

func GetBookings(w http.ResponseWriter, r *http.Request) {
	var bookings []models.Booking
	database.DB.Find(&bookings)
	json.NewEncoder(w).Encode(bookings)
}

func GetBooking(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		http.Error(w, "Invalid booking ID", http.StatusBadRequest)
		return
	}

	var booking models.Booking
	result := database.DB.First(&booking, id)
	if result.Error != nil {
		http.Error(w, "Booking not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(booking)
}

func CreateBooking(w http.ResponseWriter, r *http.Request) {
	var booking models.Booking
	if err := json.NewDecoder(r.Body).Decode(&booking); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	result := database.DB.Create(&booking)
	if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(booking)
}

func UpdateBooking(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		http.Error(w, "Invalid booking ID", http.StatusBadRequest)
		return
	}

	var input struct {
		Status string `json:"status"`
	}

	if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var booking models.Booking
	result := database.DB.First(&booking, id)
	if result.Error != nil {
		http.Error(w, "Booking not found", http.StatusNotFound)
		return
	}

	log.Printf("input: %v", input)

	booking.Status = input.Status
	database.DB.Save(&booking)
	json.NewEncoder(w).Encode(booking)
}

func DeleteBooking(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		http.Error(w, "Invalid booking ID", http.StatusBadRequest)
		return
	}

	result := database.DB.Delete(&models.Booking{}, id)
	if result.Error != nil {
		http.Error(w, "Booking not found", http.StatusNotFound)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}
