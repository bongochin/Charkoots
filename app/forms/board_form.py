from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, DecimalField, BooleanField, DateTimeField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Board


class BoardForm(FlaskForm):
    board_name = StringField('Group Name', validators=[DataRequired()])
    board_description = TextAreaField('Description', validators=[DataRequired()])
    board_cost = DecimalField('Price', validators=[DataRequired()])
    meat1 = IntegerField('First Meat', validators=[DataRequired()])
    meat2 = IntegerField('Second Meat', validators=[DataRequired()])
    meat3 = IntegerField('Third Meat', validators=[DataRequired()])
    cheese1 = IntegerField('First Cheese', validators=[DataRequired()])
    cheese2 = IntegerField('Second Cheese', validators=[DataRequired()])
    cheese3 = IntegerField('Third Cheese', validators=[DataRequired()])
    cracker = IntegerField('Cracker', validators=[DataRequired()])
    fruit = IntegerField('Fruit', validators=[DataRequired()])
    nut = IntegerField('Nut', validators=[DataRequired()])
    spread = IntegerField('Spread', validators=[DataRequired()])
