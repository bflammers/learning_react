from rest_framework import serializers

from .models import Order, Client


class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Client
        # fields = ('client_id', 'name', 'email', 'street_address', 'postal_code')
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        # fields = '__all__'
        fields = ('order_id', 'salad', 'bacon', 'cheese', 
            'meat', 'price', 'client', 'n_ingredients')