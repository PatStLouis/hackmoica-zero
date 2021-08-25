FROM python:3.8-slim

WORKDIR /flask

RUN apt-get update
RUN apt-get -y install gcc

ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

COPY requirements.txt ./
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY app ./app
COPY config.py start.py ./

ENV ENV='production'
ENV SECRET_KEY='echo2021'

CMD ["gunicorn", "--bind=0.0.0.0:80", "start:app"]