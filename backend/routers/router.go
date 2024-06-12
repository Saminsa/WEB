package routers

import (
	"backend/handlers"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func SetupRouter() *chi.Mux {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Route("/bookings", func(r chi.Router) {
		r.Get("/", handlers.GetBookings)
		r.Post("/", handlers.CreateBooking)
		r.Get("/{id}", handlers.GetBooking)
		r.Put("/{id}", handlers.UpdateBooking)
		r.Delete("/{id}", handlers.DeleteBooking)
	})

	r.Route("/menu", func(r chi.Router) {
		r.Get("/", handlers.GetMenuItems)
		r.Post("/", handlers.CreateMenuItem)
		r.Get("/{id}", handlers.GetMenuItem)
		r.Put("/{id}", handlers.UpdateMenuItem)
		r.Delete("/{id}", handlers.DeleteMenuItem)
	})

	return r
}
