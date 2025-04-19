from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/detect', methods=['POST'])
def detect_language():
    data = request.get_json()
    text = data['text']
    # You can connect Huggingface here later
    result = {'language': 'English', 'confidence': 0.99}
    return jsonify(result)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
