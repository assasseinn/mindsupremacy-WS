from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from datetime import datetime
from typing import List
import uuid

app = FastAPI()

class Order(BaseModel):
    name: str
    email: str
    phone: str
    paymentMethod: str
    amount: float

class OrderResponse(Order):
    id: str
    status: str
    createdAt: datetime

orders_db = []

@app.post("/api/orders", response_model=OrderResponse, status_code=201)
def create_order(order: Order):
    try:
        order_data = order.dict()
        order_data['id'] = str(uuid.uuid4())
        order_data['status'] = 'completed'
        order_data['createdAt'] = datetime.utcnow()
        orders_db.append(order_data)
        return order_data
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to create order")

@app.get("/api/orders", response_model=List[OrderResponse])
def get_orders():
    try:
        return orders_db
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to fetch orders")

@app.get("/api/orders/{order_id}", response_model=OrderResponse)
def get_order(order_id: str):
    try:
        order = next((o for o in orders_db if o['id'] == order_id), None)
        if order is None:
            raise HTTPException(status_code=404, detail="Order not found")
        return order
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to fetch order")
