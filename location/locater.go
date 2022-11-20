package location

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"net/url"

	"github.com/gin-gonic/gin"
)

type LocationResponse []LocationItem

type LocationItem struct {
	Lat         string
	Lon         string
	DisplayName string `json:"display_name"`
}

func AddLocaterEndpoints(router *gin.Engine) {
	router.GET("/location/search", search)
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

	var locationResponse LocationResponse

	if err := json.Unmarshal(body, &locationResponse); err != nil {
		context.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err})
		return
	}

	context.JSON(http.StatusOK, &locationResponse)
}
