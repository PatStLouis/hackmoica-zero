from flask import current_app as app
from flask import render_template, redirect, url_for, flash, request
from .form import SignUpForm
import json


@app.route("/", methods=["GET", "POST"])
def index():
    form = SignUpForm()

    if request.method == "POST" and form.validate_on_submit():
        inscription = {}
        inscription["etu"] = form.etu.data
        inscription["last_name"] = form.last_name.data
        inscription["first_name"] = form.first_name.data

        with open("app/static/inscriptions.json", "r") as f:
            inscriptions = json.loads(f.read())

        if inscription["etu"] in [inscription["etu"] for inscription in inscriptions]:
            flash("Déja enregistré.")
            return redirect(url_for("index"))

        inscriptions.append(inscription)
        inscriptions = json.dumps(inscriptions, indent=2)

        with open("app/static/inscriptions.json", "w") as f:
            f.write(inscriptions)

        flash("Bonne chance pour le tirage!")
        return redirect(url_for("index"))

    return render_template("index.jinja", form=form)