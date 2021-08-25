from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, SubmitField
from wtforms.validators import ValidationError, DataRequired

class SignUpForm(FlaskForm):

    last_name = StringField(
        "Nom",
        validators=[DataRequired()],
    )

    first_name = StringField(
        "Prénom",
        validators=[DataRequired()],
    )

    etu = StringField(
        "# Étudiant",
        validators=[DataRequired()],
    )

    submit = SubmitField("Soumettre")