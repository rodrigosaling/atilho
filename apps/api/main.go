package main

import "fmt"
import "net/http"
import "encoding/json"

// Health check endpoint
func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	response := map[string]string{"status": "healthy"}
	json.NewEncoder(w).Encode(response)
}

func main() {
	http.HandleFunc("/health", healthHandler)

	port := "8080"
	fmt.Printf("Server starting on port %s\n", port)
	http.ListenAndServe(fmt.Sprintf(":%s", port), nil)
}
