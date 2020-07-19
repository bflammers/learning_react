from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication

from .models import Order, Client
from .serializers import OrderSerializer, ClientSerializer

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    authentication_classes = (TokenAuthentication, )

    @action(detail=False, methods=['POST'])
    def place_order(self, request, pk=None):

        order_ser = OrderSerializer(data=request.data)
        client_ser = ClientSerializer(data=request.data['contact'])

        payload = dict()

        if client_ser.is_valid():

            matching_clients = Client.objects.filter(email = client_ser.validated_data['email'])
            if matching_clients:
                client = matching_clients[0]
                print('-- Client matched: ', client)
            else:
                client = client_ser.save()
                print('-- Client saved: ', client)
            
            payload['client'] = ClientSerializer(client).data

        if order_ser.is_valid():
            order = order_ser.save()
            order.client = client
            order.save()
            print('-- Order saved: ', order)
            payload['order'] = OrderSerializer(order).data

        return Response(payload, status=status.HTTP_200_OK)


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    authentication_classes = (TokenAuthentication, )

    @action(detail=True, methods=['GET'])
    def get_orders(self, request, pk=None):

        client = Client.objects.get(client_id=pk)
        orders = Order.objects.filter(client = client)

        payload = {'orders': [OrderSerializer(o).data for o in orders]}

        return Response(payload, status=status.HTTP_200_OK)
