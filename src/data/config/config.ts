export let API_URL:string;

//both production and testing env using live api
//TODO: Can build testing api for development env
API_URL = 'https://weather-backend-development.herokuapp.com'

export let ENDPOINTS= {
    LOCATION:'/location',
    WEATHER:'/weather',
    GEOLOCATION:'/geolocation'
}
