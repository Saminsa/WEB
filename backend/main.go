package main

import (
	"backend/database"
	"backend/routers"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	database.InitDB()
	r := routers.SetupRouter()

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},                             // Разрешить все домены
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},  // Разрешить все методы
		AllowedHeaders:   []string{"Authorization", "Content-Type"}, // Разрешить определенные заголовки
		AllowCredentials: true,
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	handler := c.Handler(r)

	log.Printf("Server is running at http://localhost:%s", port)
	log.Fatal(http.ListenAndServe(":"+port, handler))
}
