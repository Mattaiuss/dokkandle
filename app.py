from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/', methods=['GET'])
def get_data():
    try:
        with open('data.json', 'r') as file:
            data = json.load(file)
        return jsonify(data), 200
    except FileNotFoundError:
        return jsonify({'error': 'File not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/<name>', methods=['GET'])
def get_info(name):
    try:
        with open('data.json', 'r') as file:
            data = json.load(file)
        for i in range(len(data)):
            if data[i]['Nom'] == name:
                return jsonify(data[i]), 200
        return jsonify({'error': 'Name not found'}), 404
    except FileNotFoundError:
        return jsonify({'error': 'File not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
