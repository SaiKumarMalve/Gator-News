package handlers

import (
	"log"
	"net/http"
	"os"

	"github.com/SaiKumarMalve/Gator-News/middlew"
	"github.com/SaiKumarMalve/Gator-News/routers"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

/* Handlers set the PORT for the servers to listen*/
func Handlers() {
	router := mux.NewRouter()

	router.HandleFunc("/registration", middlew.CheckBD(routers.Registration)).Methods("POST")
	router.HandleFunc("/login", middlew.CheckBD(routers.Login)).Methods("POST")
	router.HandleFunc("/viewProfile", middlew.CheckBD(middlew.ValidJWT(routers.ViewProfile))).Methods("GET")
	// router.HandleFunc("/modifyProfile", middlew.CheckBD(middlew.ValidJWT(routers.ModifyProfile))).Methods("PUT")
	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "8080"
	}
	handler := cors.AllowAll().Handler(router)
	log.Fatal(http.ListenAndServe(":"+PORT, handler))

}
