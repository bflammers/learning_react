from django.db import models
import json


class Client(models.Model):

    client_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=128)
    email = models.EmailField()
    street_address = models.CharField(max_length=512)
    postal_code = models.CharField(max_length=512)


class Order(models.Model):

    order_id = models.AutoField(primary_key=True)
    salad = models.IntegerField(default=0)
    bacon = models.IntegerField(default=0)
    cheese = models.IntegerField(default=0)
    meat = models.IntegerField(default=0)
    price = models.DecimalField(decimal_places=2, max_digits=9)
    client = models.ForeignKey(Client, on_delete=models.CASCADE, null=True)

    def n_ingredients(self):
        ingredients = [self.salad, self.bacon, self.cheese, self.meat]
        return sum(ingredients)
