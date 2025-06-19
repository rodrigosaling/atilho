package main

import "fmt"
import "net/http"
import "encoding/json"
import "log"
import "time"

// Health check endpoint
func healthHandler(w http.ResponseWriter, r *http.Request) {
	now := time.Now()
	w.Header().Set("Content-Type", "application/json")
	response := map[string]string{"status": "healthy at " + now.String()}
	json.NewEncoder(w).Encode(response)
}

func main() {
	// Create a new ServeMux
	mux := http.NewServeMux()

	mux.HandleFunc("GET /health", healthHandler)

	port := ":8080"
	fmt.Printf("Server starting on port %s\n", port)
	log.Fatal(http.ListenAndServe(port, mux))
}
