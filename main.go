package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/hello", helloWorld)

	router.Run("localhost:8080")
}

func helloWorld(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, "Hello, World!")
}
