from keras.models import load_model
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.layers import  Flatten, Dense, Dropout
from tensorflow.keras.models import Sequential



def load_ai_model():
    img_height = img_width = 256
    base_model = ResNet50(weights='imagenet', include_top=False, input_shape=(img_height, img_width, 3))
    model = Sequential([
    base_model,
    Flatten(),
    Dense(512, activation='relu'),
    Dropout(0.5),
    Dense(128, activation='relu'),
    Dropout(0.5),
    Dense(32, activation='relu'),
    Dropout(0.5),
    Dense(1, activation='sigmoid')
])
    model.load_weights('C:\\Users\\Lenovo\\Documents\\GitHub\\TCC\\backend\\app\\final_weights.h5')
    return model

model = load_ai_model()