package main

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"net/url"

	"github.com/gin-gonic/gin"
)

type NominatimResponse []NominatimItem
type NominatimItem struct {
	Lat         string
	Lon         string
	DisplayName string `json:"display_name"`
}

func main() {
	router := gin.Default()
	router.GET("/hello", helloWorld)
	router.GET("/geo/search", search)
	router.Run("localhost:8080")
}

func helloWorld(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, "Hello, World!")
}

func search(context *gin.Context) {
	query := url.QueryEscape(context.Query("q"))
	response, err := http.Get("https://nominatim.openstreetmap.org/search?format=json&q=" + query)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
		return
	}
	defer response.Body.Close()

	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		context.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err})
		return
	}

	var nominatimResponse NominatimResponse

	if err := json.Unmarshal(body, &nominatimResponse); err != nil {
		context.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err})
		return
	}

	context.JSON(http.StatusOK, &nominatimResponse)
}
