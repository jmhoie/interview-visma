from typing import List
from pydantic import BaseModel

class MenuItem(BaseModel):
    """
    Represents a MenuItem

    Attributes:
    id (str) -- uuid for the item
    name (str) -- name of the menu dish
    spicy (bool) -- denotes whether or not the dish is spicy
    description (str) -- short text describing the dish
    price (float) -- cost amount
    available (bool) -- denotes whether or not the dish is currently available
    """
    id: str
    name: str
    spicy: bool
    description: str
    price: float
    available: bool

class Order(BaseModel):
    """
    Represents a Menu Order

    Attributes:
    id (int) -- id for the order
    items (List(int)) -- list containing the ids of the menu items
    total (float) -- total order price
    status (str) -- either 'pending' or 'completed'
    """
    id: int
    items: List[str]
    total: float
    status: str
