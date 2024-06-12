package main

import (
	"backend/database"
	"backend/routers"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	database.InitDB()
	r := routers.SetupRouter()

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server is running at http://localhost:%s", port)
	log.Fatal(http.ListenAndServe(":"+port, r))
}
