from django.shortcuts import render
from rest_framework import generics
from .ai import model
from .models import Images
from .serializers import ImageSerializer
from PIL import Image
import numpy as np
from django.http import JsonResponse
from pathlib import Path
# Create your views here.

class ImageUploadView(generics.CreateAPIView):
    queryset = Images.objects.all()
    serializer_class = ImageSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        image_object = Images.objects.get(id=response.data['id'])
        image_path = image_object.image.path
        img = Image.open(image_path)
        img = img.resize((256,256))

        img = np.array(img)
        img = img / 255.0 

        img = np.expand_dims(img, axis=0)


        prediction_prob = model.predict(img)
        prediction_binary = (prediction_prob > 0.5).astype("int32")
        response.data['prediction'] = prediction_binary
        print(prediction_prob, 'prediction_prob')
        print(prediction_binary, 'prediction_binary')

        return response

