from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  first_name = db.Column(db.String(50), nullable = False)
  last_name = db.Column(db.String(50), nullable = False)
  address1 = db.Column(db.String(255), nullable = False)
  address2 = db.Column(db.String(255))
  city = db.Column(db.String(50), nullable = False)
  state = db.Column(db.String(2), nullable = False)
  zipcode = db.Column(db.Integer, nullable = False)

  # User has many Orders
  order = db.relationship('Order', secondary='users_orders', back_populates="user")


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "first_name": self.first_name,
      "last_name": self.last_name,
      "address1": self.address1,
      "address2": self.address2,
      "city": self.city,
      "state": self.state,
      "zipcode": self.zipcode,
    }
