from app.models import MenuItem
from uuid import uuid4


full_menu = [
    MenuItem(id=str(uuid4()), name="Pizza", spicy=False, description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price=179.0, available=True),
    MenuItem(id=str(uuid4()), name="Cheeseburger", spicy=False, description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price=199.0, available=False),
    MenuItem(id=str(uuid4()), name="Hot Wings", spicy=True, description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price=169.0, available=True),
    MenuItem(id=str(uuid4()), name="Ramen Soup", spicy=True, description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price=229.0, available=True),
    MenuItem(id=str(uuid4()), name="Steak", spicy=False, description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price=369.0, available=True),
    MenuItem(id=str(uuid4()), name="Pasta Carbonara", spicy=False, description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price=229.0, available=True)
    ]
