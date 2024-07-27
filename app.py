from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import psycopg2
import os

app = Flask(__name__)
CORS(app)

# Database connection
DATABASE_URL = os.environ.get('postgresql://postgres.wmgnhlqautdxbwmhaeva:[wyZcit-cepty2-nytruj]@aws-0-us-west-1.pooler.supabase.com:6543/postgres')
conn = psycopg2.connect(DATABASE_URL)
cur = conn.cursor()

@app.route('/itineraries', methods=['GET'])
def get_itineraries():
    cur.execute("SELECT * FROM itineraries")
    rows = cur.fetchall()
    return jsonify(rows)

@app.route('/itineraries', methods=['POST'])
def add_itinerary():
    data = request.json
    cur.execute("INSERT INTO itineraries (name, destination, start_date, end_date) VALUES (%s, %s, %s, %s)",
                (data['name'], data['destination'], data['start_date'], data['end_date']))
    conn.commit()
    return jsonify({'message': 'Itinerary added'})

@app.route('/itineraries/<int:id>', methods=['PUT'])
def update_itinerary(id):
    data = request.json
    cur.execute("UPDATE itineraries SET name=%s, destination=%s, start_date=%s, end_date=%s WHERE id=%s",
                (data['name'], data['destination'], data['start_date'], data['end_date'], id))
    conn.commit()
    return jsonify({'message': 'Itinerary updated'})

@app.route('/itineraries/<int:id>', methods=['DELETE'])
def delete_itinerary(id):
    cur.execute("DELETE FROM itineraries WHERE id=%s", (id,))
    conn.commit()
    return jsonify({'message': 'Itinerary deleted'})

if __name__ == '__main__':
    app.run(debug=True)


from dotenv import load_dotenv
load_dotenv()
