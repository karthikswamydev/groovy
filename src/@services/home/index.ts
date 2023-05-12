import API from "./api";
class Home extemd API {

    getHomeData : async() => {
try {
    
    return  await API.get("/home-data", {})
} catch (error) {
    return []
}
    } 


}
export default new Home();