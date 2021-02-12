from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Users_Order

user_routes = Blueprint('users', __name__)

# Retrieve All Users
@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])

# Retrieve Single User
@user_routes.route('/<int:id>')
# @login_required
def user():
    user = User.query.get(id)
    return user.to_dict()

# Retrieve All Orders by Single User
@user_routes.route('/<int:id>/orders')
# @login_required
def retrieve_all_user_orders(id):
    orders = User.query.join(Users_Order).filter(Users_Order.user_id == id).all()
    return jsonify([order.to_dict() for order in orders])

# Add an Order to a User

# Delete an User Order
