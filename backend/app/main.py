from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.models import Order
from app.menu import full_menu

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173"
    ]

app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"]
                   )

# Didn't set up a DB, so orders are stored in a dict.
orders = {}

@app.get("/menu")
async def get_menu():
    return full_menu

@app.post("/order")
async def create_order(order: Order):
    order.status = "completed"
    orders[order.id] = order
    return order

@app.get("/order/{id}")
async def get_order(id):
    try:
        return orders[int(id)]
    except:
        return "404 Not Found"
