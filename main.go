package main

import (
	"github.com/gin-gonic/gin"

	"github.com/aowalke2/hermes/location"
)

func main() {
	router := gin.Default()
	location.AddLocaterEndpoints(router)
	router.Run("localhost:8080")
}
