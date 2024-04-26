from flask import Flask, jsonify, request
app = Flask(__name__)
users = []
@app.route('/login_page_acci_care', methods=['POST'])
def register():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    
    if not name or not email or not password:
        return jsonify({'error': 'Please provide your credentials'}), 400
    
    users.append({
        'name': name,
        'email': email,
        'password': password
    })
    
    return jsonify({'message': 'User registered successfully'}), 201
@app.route('/api/welcome', methods=['POST'])
def welcome():
    data = request.get_json()
    name = data.get('name')

    if name:
        return jsonify({'message': f'Welcome, {name}!'})
    else:
        return jsonify({'error': 'Name not provided.'}), 400
if __name__ == '__main__':
    app.run(debug=True)
