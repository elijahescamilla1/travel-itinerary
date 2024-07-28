from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder='build', static_url_path='')
CORS(app)

# Database connection
DATABASE_URL = os.environ.get('DATABASE_URL')
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

# Serve React App
@app.route('/')
def serve_react_app():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
