package handlers

import (
	"backend/database"
	"backend/models"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
)

func GetMenuItems(w http.ResponseWriter, r *http.Request) {
	var menuItems []models.MenuItem
	database.DB.Find(&menuItems)
	json.NewEncoder(w).Encode(menuItems)
}

func GetMenuItem(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		http.Error(w, "Invalid menu item ID", http.StatusBadRequest)
		return
	}

	var menuItem models.MenuItem
	result := database.DB.First(&menuItem, id)
	if result.Error != nil {
		http.Error(w, "Menu item not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(menuItem)
}

func CreateMenuItem(w http.ResponseWriter, r *http.Request) {
	var menuItem models.MenuItem
	if err := json.NewDecoder(r.Body).Decode(&menuItem); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	result := database.DB.Create(&menuItem)
	if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(menuItem)
}

func UpdateMenuItem(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		http.Error(w, "Invalid menu item ID", http.StatusBadRequest)
		return
	}

	var menuItem models.MenuItem
	result := database.DB.First(&menuItem, id)
	if result.Error != nil {
		http.Error(w, "Menu item not found", http.StatusNotFound)
		return
	}

	if err := json.NewDecoder(r.Body).Decode(&menuItem); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	database.DB.Save(&menuItem)
	json.NewEncoder(w).Encode(menuItem)
}

func DeleteMenuItem(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		http.Error(w, "Invalid menu item ID", http.StatusBadRequest)
		return
	}

	result := database.DB.Delete(&models.MenuItem{}, id)
	if result.Error != nil {
		http.Error(w, "Menu item not found", http.StatusNotFound)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}
