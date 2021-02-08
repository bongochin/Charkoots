"""empty message

Revision ID: 59f49c0650b3
Revises: ffdc0a98111c
Create Date: 2021-02-08 11:52:54.642351

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '59f49c0650b3'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('address1', sa.String(length=255), nullable=False))
    op.add_column('users', sa.Column('address2', sa.String(length=255), nullable=True))
    op.add_column('users', sa.Column('city', sa.String(length=50), nullable=False))
    op.add_column('users', sa.Column('first_name', sa.String(length=50), nullable=False))
    op.add_column('users', sa.Column('last_name', sa.String(length=50), nullable=False))
    op.add_column('users', sa.Column('state', sa.String(length=2), nullable=False))
    op.add_column('users', sa.Column('zipcode', sa.Integer(), nullable=False))
    op.drop_constraint('users_username_key', 'users', type_='unique')
    op.drop_column('users', 'username')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('username', sa.VARCHAR(length=40), autoincrement=False, nullable=False))
    op.create_unique_constraint('users_username_key', 'users', ['username'])
    op.drop_column('users', 'zipcode')
    op.drop_column('users', 'state')
    op.drop_column('users', 'last_name')
    op.drop_column('users', 'first_name')
    op.drop_column('users', 'city')
    op.drop_column('users', 'address2')
    op.drop_column('users', 'address1')
    # ### end Alembic commands ###
