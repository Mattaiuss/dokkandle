from flask import Flask, jsonify
import json
import requests
Res_url = "http://127.0.0.1:5000/get-first-character"
payload = {}
headers = {}

app = Flask(__name__)

@app.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

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
                choice = data[i]
                return compare_choice(choice)
        return jsonify({'error': 'Name not found'}), 404
    except FileNotFoundError:
        return jsonify({'error': 'File not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/get-first-character', methods=['GET'])
def get_first_character():
    with open('data.json', 'r') as file:
        data = json.load(file)
    first_character = data[0]  # Sélectionne le premier personnage
    return jsonify(first_character), 200

def compare_choice(choice):
    comp = {'Nom': False, 'Genre': False,
            'Classe': False, 'Rarete': False,
              'Type': False, 'Race': False,
                'Anne': False}
    result = requests.get(Res_url, headers=headers, data=payload)
    data = result.json()
    print(data['Nom'])
    print(choice['Nom'])
    if data['Nom'] == choice['Nom']:
        comp['Nom'] = True
    if data['Genre'] == choice['Genre']:
        comp['Genre'] = True
    if data['Classe'] == choice['Classe']:
        comp['Classe'] = True
    if data['Rarete'] == choice['Rarete']:
        comp['Rarete'] = True
    if data['Type'] == choice['Type']:
        comp['Type'] = True
    if data['Race'] == choice['Race']:
        comp['Race'] = True
    if data['Date de sortie'] == choice['Date de sortie']:
        comp['Anne'] = True
    return jsonify(comp), 200

if __name__ == '__main__':
    app.run(debug=True)
