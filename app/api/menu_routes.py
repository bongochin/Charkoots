from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required
from app.models import Menu

menus_route = Blueprint('menus', __name__)
