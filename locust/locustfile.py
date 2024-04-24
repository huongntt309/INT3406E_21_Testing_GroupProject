import time
from locust import HttpUser, task, between

class QuickstartUser(HttpUser):
    wait_time = between(1, 5)
    
    # host: https://videogamedb.uk:443
    
    @task
    def get_video_game(self):
        self.client.get("/api/videogame")
        self.client.get("/api/videogame/1")
        self.client.get("/api/videogame/2")

    @task
    def authenticate(self):
        payload = {
            "password": "admin",
            "username": "admin"
        }
        self.client.post("/api/authenticate", json=payload)
        