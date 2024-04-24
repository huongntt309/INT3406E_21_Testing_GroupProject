import time

from locust import HttpUser, task, between

from locust import HttpUser, LoadTestShape, TaskSet, constant, task

import math


class WebsiteUser(HttpUser):
    wait_time = constant(0.5)
    @task
    def hello_world(self):
        self.client.get("/api/videogame")


class DoubleWave(LoadTestShape):

    # Settings:
    #     min_users -- minimum users
    #     peak_one_users -- users in first peak
    #     peak_two_users -- users in second peak
    #     time_limit -- total length of test

    min_users = 20
    peak_one_users = 60
    peak_two_users = 40
    time_limit = 600

    def tick(self):
        run_time = round(self.get_run_time())

        if run_time < self.time_limit:
            user_count = (
                (self.peak_one_users - self.min_users)
                * math.e * -(((run_time / (self.time_limit / 10 * 2 / 3)) - 5) * 2)
                + (self.peak_two_users - self.min_users)
                * math.e * -(((run_time / (self.time_limit / 10 * 2 / 3)) - 10) * 2)
                + self.min_users
            )
            return (round(user_count), round(user_count))
        else:
            return None